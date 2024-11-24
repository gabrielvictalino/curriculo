document.querySelector('.nome').addEventListener('mouseover', () => {
    const title = document.querySelector('.name-effect');
    title.classList.add('active');
});

document.querySelector('.nome').addEventListener('mouseout', () => {
    const title = document.querySelector('.name-effect');
    title.classList.remove('active');
});
