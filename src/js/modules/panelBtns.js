export const panelBtns = () => {
    const funcBtns = document.querySelector('.header-panel__func-btns');
    const previewModes = document.querySelector('.header-panel__preview-modes');

    const clickHandler = (e) => {
        const clicked = e.target;
        const panel = e.currentTarget;

        panel.querySelector('.selected')?.classList.remove('selected');
        clicked.classList.toggle('selected'); 
    }

    previewModes.addEventListener('click', clickHandler);
    funcBtns.addEventListener('click', clickHandler);
}