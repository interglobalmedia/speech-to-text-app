import React, {Component} from 'react';
import Speech from './components/Speech';
import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div className="Site">
                <div className="Sitecontent">
                        <div className={styles.App}>
                            <Speech />
                        </div>
                </div>
            </div>
        )
    }
}

export default App;

