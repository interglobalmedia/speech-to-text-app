export const GetNotes = () => {
    let noteList = [];
    const note = document.getElementById('note');
    for (let i = 0; i < localStorage.length; i++) {
        note.innerHTML = `${localStorage.key(i)}<li>${localStorage.getItem(localStorage.key(i))}</li><br>`
        noteList.push(`${note.innerHTML}`);
        const storage = document.getElementById('storage');
        storage.innerHTML = `${noteList.join('')}`;
        noteList.sort(function (a, b) {
            return b.localStorage.key(i) - a.localStorage.key(i);
        })
    }
}