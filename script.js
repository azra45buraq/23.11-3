const modal = document.getElementById('poemModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

function openModal(id) {
    const dataDiv = document.getElementById(id);
    const title = dataDiv.querySelector('.data-title').innerHTML;
    const content = dataDiv.querySelector('.data-content').innerHTML;

    modalTitle.innerHTML = title;
    modalBody.innerHTML = content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});