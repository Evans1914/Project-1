const addButton = document.getElementById('add-btn');
const notesContainer = document.getElementById('notes-container');


function createNote() {
    
    const note = document.createElement('div');
    note.classList.add('note');

    
    note.innerHTML = `
        <textarea placeholder="Write your note..."></textarea>
        <button class="delete-btn">&times;</button>
        <input type="color" class="color-picker" value="#fffa91" />
    `;

    
    const deleteBtn = note.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(note);
    });
   
    const colorPicker = note.querySelector('.color-picker');
    colorPicker.addEventListener('input', (e) => {
        note.style.backgroundColor = e.target.value;
    });

    notesContainer.appendChild(note);
}

addButton.addEventListener('click', createNote);
