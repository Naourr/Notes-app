const notes = document.querySelectorAll('.note');
const exit_btn = document.querySelector('.btn2');
const plus_btn = document.querySelector('.btn1');

function onCardClick() {
    notes.forEach(note => {
        note.addEventListener('click', () => {
            note.classList.add('active');
            exit_btn.classList.add('active');
            plus_btn.classList.add('hidden');

            const textareas = note.querySelectorAll('textarea');
            textareas.forEach(area => {
                area.classList.add('active');
            })
        });
    })
    exit_btn.addEventListener('click', () => {
        const active_note = document.querySelector('.note.active');
        active_note.classList.remove('active');
        exit_btn.classList.remove('active');
        plus_btn.classList.remove('hidden');

        const active_areas = note.querySelectorAll('textarea.active');
        active_areas.forEach(area => {
            area.classList.remove('active');
        })
    })

}
onCardClick();