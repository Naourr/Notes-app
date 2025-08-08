const notes = document.querySelectorAll('.note');
const addBtn = document.querySelector('.add-btn');
// const exitBtn = document.querySelector('.exit-btn');
const saveBtn = document.querySelector('.save-btn');

let saved = {};
const saveFile = localStorage.getItem('savedData')

function loadSaveFile() {
    if (saveFile) {
        saved = JSON.parse(saveFile);
        const titleDraft = document.querySelector('.note .title');
        const bodyDraft = document.querySelector('.note .body');
        titleDraft.value = saved.title;
        bodyDraft.value = saved.body;
    }
}
loadSaveFile();

function detectClicks() {
    notes.forEach(note => {
        note.addEventListener('click', () => openNote(note));
    });
    saveBtn.addEventListener('click', () => {
        saveToLocalStorage();
        closeNote();
    });
}
detectClicks();

function openNote(clicked) {
    clicked.classList.add('active');
    // exitBtn.classList.add('active');
    saveBtn.classList.add('active');
    addBtn.classList.add('hidden');

    const textareas = clicked.querySelectorAll('textarea');
    textareas.forEach(area => {
        area.classList.add('active');
    })
}

function saveToLocalStorage() {
    const titleDraft = document.querySelector('.note.active .title');
    const bodyDraft = document.querySelector('.note.active .body');
    const currentTitle = titleDraft.value;
    const currentBody = bodyDraft.value;
    saved.title = currentTitle;
    saved.body = currentBody;
    localStorage.setItem('savedData', JSON.stringify(saved));
}

function closeNote() {
    const activeNote = document.querySelector('.note.active');
    activeNote.classList.remove('active');
    // exitBtn.classList.remove('active');
    saveBtn.classList.remove('active');
    addBtn.classList.remove('hidden');

    const activeAreas = document.querySelectorAll('textarea.active');
    activeAreas.forEach(area => {
        area.classList.remove('active');
    })
}