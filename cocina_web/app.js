document.querySelectorAll('.cards').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block'
            ? 'none'
            : 'block';
    });
});

document.getElementById('search').addEventListener('input', function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.card').forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(value)
            ? 'block'
            : 'none';
    });
});
