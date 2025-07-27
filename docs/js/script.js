function loader(){
document.querySelectorAll('figure').forEach(figure => {
    const img = figure.querySelector('img');
    if (img && img.alt) {
        let caption = figure.querySelector('figcaption');
        if (!caption) {
            caption = document.createElement('figcaption');
            figure.appendChild(caption);
        }
        caption.textContent = img.alt;
    }
});
}

