const timestampInput = document.querySelector('#timestamp');
timestampInput.value = new Date().toISOString();

const modalLinks = document.querySelectorAll('.modal-link');
const modals = document.querySelectorAll('dialog');

modalLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector(`#${link.getAttribute('data-target')}`).showModal();
    });
});

modals.forEach(modal => {
    modal.querySelector('.close').addEventListener('click', () => {
        modal.close();
    });
});
