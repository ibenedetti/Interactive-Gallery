const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle 'clicked' class on the clicked item
        item.classList.toggle('clicked');
    });
});

const images = document.querySelectorAll('.img');

images.forEach(img => {
    img.addEventListener('click', () => {
        // Toggle 'clicked' class on the clicked item
        img.classList.toggle('clicked-img');
    });
});