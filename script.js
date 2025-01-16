const addButton = document.getElementById('add-btn');
const notesContainer = document.getElementById('notes-container');

// Function to create a new sticky note
function createNote() {
    // Create note container
    const note = document.createElement('div');
    note.classList.add('note');

    // Add inner content to the note
    note.innerHTML = `
        <textarea placeholder="Write your note..."></textarea>
        <button class="delete-btn">&times;</button>
    `;

    // Add delete functionality
    const deleteBtn = note.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(note);
    });

    // Append the note to the container
    notesContainer.appendChild(note);
}

// Add click event to the "Add New" button
addButton.addEventListener('click', createNote);
