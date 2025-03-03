function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute('data-include');
                includeHTML(); // Recursively call to handle nested includes
            })
            .catch(error => console.error('Error including HTML:', error));
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);