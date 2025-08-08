const notes = document.querySelectorAll('.note');
const add_btn = document.querySelector('.add-btn');
// const exit_btn = document.querySelector('.exit-btn');
const save_btn = document.querySelector('.save-btn');

const saved = new Map();

function onCardClick() {
    notes.forEach(note => {
        note.addEventListener('click', () => {
            note.classList.add('active');
            // exit_btn.classList.add('active');
            save_btn.classList.add('active');
            add_btn.classList.add('hidden');

            const textareas = note.querySelectorAll('textarea');
            textareas.forEach(area => {
                area.classList.add('active');
            })
        });
    })
    save_btn.addEventListener('click', () => {
        // save stuff

        // get elements na may laman ng title at body sa note na active
        const title_draft = document.querySelector('.note.active .title');
        const body_draft = document.querySelector('.note.active .body');

        // kunin yung innerHTML ng nasa taas
        const current_title = title_draft.value;
        const current_body = body_draft.value;

        // ilagay sa dictionary (map?) called saved?
        saved.set('title', current_title);
        saved.set('body',  current_body);

        // Check if nasa saved?
        console.log(saved.get('title'));
        console.log(saved.get('body'));

        const active_note = document.querySelector('.note.active');
        active_note.classList.remove('active');
        // exit_btn.classList.remove('active');
        save_btn.classList.remove('active');
        add_btn.classList.remove('hidden');

        const active_areas = document.querySelectorAll('textarea.active');
        active_areas.forEach(area => {
            area.classList.remove('active');
        })
    })
}
onCardClick();