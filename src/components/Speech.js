import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './Speech.scss';

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

class Speech extends Component {
        state = {
            listening: false
        }
    
    toggleListen = () => {
        this.setState({
            listening: !this.state.listening
        }, this.handleListen)
    }

    handleListen = () => {
        console.log('listening?', this.state.listening);
        if (this.state.listening) {
            recognition.start();
            recognition.onend = () => {
                console.log('...continue listening...');
                recognition.start();
            }
        } else {
            recognition.stop();
            recognition.onend = () => {
                console.log('Stopped listening per click');
            }
        }
        recognition.onstart = () => {
            console.log('Listening!');
        }
        let finalTranscript = '';
        recognition.onresult = event => {
            let interimTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalTranscript += transcript + ' ';
                else interimTranscript += transcript;
            }
            document.getElementById('interim').innerHTML = interimTranscript;
            document.getElementById('final').innerHTML = finalTranscript;

            const transcriptArr = finalTranscript.split(' ');
            const stopCmd = transcriptArr.slice(-3, -1);
            console.log('stopCmd', stopCmd);

            if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
                recognition.stop();
                recognition.onend = () => {
                    console.log('Stopped listening per command');
                    const finalText = transcriptArr.slice(0, -3).join(' ');
                    document.getElementById('final').innerHTML = finalText;
                }
            }
        }
        recognition.onerror = event => {
            console.log('Error occurred in recognition: ' + event.error);
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <h1>Voice Controlled Notes App</h1>
                <p className={styles.pageDescription}>A tiny app that allows you to take notes by recording your voice</p>
                <h3 className={styles.noBrowserSupport}>Sorry, Your Browser Doesn't Support the Web Speech API. Try Opening This Demo In Google Chrome.</h3>
                <div className={styles.Speech}>
                    <h3>Add New Note</h3>
                    <div className="input-single">
                        <p>Create a new note by using voice recognition.</p>
                    </div>
                    
                    <textarea id='interim' className={styles.interim} placeholder="Interim draft goes here" rows="3"></textarea>
                    <textarea id='final' className={styles.final} placeholder="Final draft goes here" rows="3"></textarea>
                    <button id='microphone-btn' className={styles.button} onClick={this.toggleListen}><FontAwesomeIcon icon={faPlayCircle} /></button>

                    <h3>My Saved Notes</h3>
                    <ul id="notes">
                        <li>
                            <p className="no-notes">You don't have any notes.</p>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Speech;