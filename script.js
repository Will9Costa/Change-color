function toggleColor(element, color) {
    var paragraphs = document.querySelectorAll('#container p');
    paragraphs.forEach(function(p) {
        p.classList.remove('active');
    });

    element.classList.add('active');
    element.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
}
