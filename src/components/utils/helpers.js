export function clearAll() {
    localStorage.clear();
    const storage = document.getElementById('storage');
    storage.innerHTML = '';
}

export function reset() {
    window.location.reload(true);
}


