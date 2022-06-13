// Variables
const showModalBtn = document.querySelector('.task__text__btn');
const modalWrap = document.querySelector('.task__modal-wrap');
const closeBtn = document.querySelector('.task__modal-wrap__popup__icon');
const clicksNumbersSpan = document.querySelector('.click-numbers');
const resetBtn = document.querySelector('.task__modal-wrap__popup__resetBtn');

// Initialize local clicks variable;
if (localStorage.getItem('localClicks') === null) {
    localStorage.setItem('localClicks', 0);
};

// Display modal; Incrase modal clicks counter;
showModalBtn.addEventListener('click', () => {
    modalWrap.style.visibility = 'visible';

    let clicksNumber = localStorage.getItem('localClicks');
    localStorage.setItem('localClicks', ++clicksNumber);
    clicksNumbersSpan.textContent = clicksNumber;

    clicksNumber > 5 ? resetBtn.style.display = 'block' : resetBtn.style.display = 'none';
});

// Hide modal function;
const hideModal = () => modalWrap.style.visibility = 'hidden';

// Add eventListeners to hide modal
modalWrap.addEventListener('click', e => {
    if (e.target.className === 'task__modal-wrap') hideModal();
})

closeBtn.addEventListener('click', () => hideModal());

// Reset local clicks variable; Hide modal;
resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure, you want to reset modal clicks? If you click ok it will also close modal window.')) {
        clicksNumbersSpan.textContent = '0';
        localStorage.clear();
        hideModal();
    }
})