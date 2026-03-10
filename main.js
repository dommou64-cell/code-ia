document.getElementById('add-place-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('new-place');
    const value = input.value.trim();
    if (value) {
        const ul = document.querySelector('section ul');
        const li = document.createElement('li');
        li.textContent = value;
        ul.appendChild(li);
        input.value = '';
    }
});