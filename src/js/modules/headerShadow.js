export const headerShadow = () => {
    const headerPanel = document.querySelector('#header-panel');
    const menuTopBlocks = document.querySelectorAll('.menu__top-block');

    addEventListener('scroll', () => {
        if (scrollY != 0) {
            headerPanel.classList.add('scrolled');
            menuTopBlocks.forEach(block => {
                block.classList.add('scrolled');
            })
        } else {
            headerPanel.classList.remove('scrolled');
            menuTopBlocks.forEach(block => {
                block.classList.remove('scrolled');
            })
        }
    })
}