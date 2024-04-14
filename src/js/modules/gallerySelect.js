export const gallerySelect = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const canvasImg = document.querySelector('.workspace__canvas img');

    galleryItems.forEach(item => {
        const itemClickHandler = (e) => {
            const clicked = e.currentTarget
            galleryItems[0].parentElement.querySelector('.selected').classList.remove('selected');
            clicked.classList.add('selected');
            canvasImg.setAttribute('src', clicked.children[0].src);

        }
        item.addEventListener('click', itemClickHandler)
    })
}