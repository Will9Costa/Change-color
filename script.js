function toggleColor(element, color) {
    var paragraphs = document.querySelectorAll('#container p');
    paragraphs.forEach(function(p) {
        p.classList.remove('active');
        p.style.backgroundColor = '';
    });

    element.classList.add('active');
    element.style.backgroundColor = color;

}


