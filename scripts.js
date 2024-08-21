document.querySelectorAll('.gallery-item').forEach(item => {
    const description = item.querySelector('.description');
    const descText = item.getAttribute('data-description');
    
    item.addEventListener('mouseover', () => {
        description.textContent = descText;
    });

    item.addEventListener('mouseout', () => {
        description.textContent = '';
    });
});
