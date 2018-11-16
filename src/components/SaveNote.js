export const SaveNote = () => {
    const note = document.getElementById('final').textContent;
    const notes = document.querySelector('ul.notes');
    const dateTime = `${new Date().toLocaleString().split(',').join(' ')}`;
    notes.innerHTML = ` ${dateTime}:<br> ${note} <br>`;
    localStorage.setItem('note-' + dateTime, note);
}