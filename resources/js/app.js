import './bootstrap';

const button = document.querySelector('.mobile-menu');
const sidebar = document.querySelector('.sidebar');

button.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});