function toggleColor(element, color) {
    var paragraphs = document.querySelectorAll('#container p');
    paragraphs.forEach(function(p) {
        p.classList.remove('active');
        p.style.backgroundColor = '';
    });

    element.classList.add('active');
    element.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}

function resetColors() {
    var paragraphs = document.querySelectorAll('#container p');
    paragraphs.forEach(function(p) {
        p.classList.remove('active');
        p.style.backgroundColor = ''; // Restaura o background original
    });

    // Reseta o background do body
    document.body.style.backgroundColor = ' lightcoral'; // Cor padrão
}
