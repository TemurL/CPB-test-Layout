export const headerShadow = () => {
    const headerPanel = document.querySelector('#header-panel');
    
    addEventListener('scroll', () => {
        if (scrollY != 0) {
            headerPanel.classList.add('scrolled');
        } else {
            headerPanel.classList.remove('scrolled');
        }
    })
}