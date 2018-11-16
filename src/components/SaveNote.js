import {localStorageSupport} from '../utils/storageSupport';

export const SaveNote = () => {
    const note = document.getElementById('final').textContent;
    const notes = document.querySelector('ul.notes');
    const dateTime = `${new Date().toLocaleString().split(',').join(' ')}`;
    notes.innerHTML = ` ${dateTime}:<br> ${note} <br>`;
    // check for local storage
    const storagequotamsg = document.getElementById('storagequota-msg');
    // run detection with inverted expression
    if (!localStorageSupport) {
        // change value to inform visitor of no local storage support
        storagequotamsg.innerHTML = 'Sorry. No HTML5 local storage support here.';
    } else {
        try {
            // set interval and autosave every second.
            setInterval(() => {
                localStorage.setItem('note-' + dateTime, note);
            }, 1000);
        } catch (domException) {
            if (domException.name === 'QUOTA_EXCEEDED_ERR' || domException.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                storagequotamsg.innerHTML = 'Local Storage Quota Exceeded!';
            }
        }
    }
    localStorage.setItem('note-' + dateTime, note);
}