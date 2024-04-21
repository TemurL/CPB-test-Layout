const layerEditorWindowElem = document.getElementsByClassName('layer-editor-window')[0];
const workspace = document.querySelector('.preview-container__workspace');
const headerPanel = document.getElementById('header-panel');

const switchTabsHandler = () => {
    const tabs = layerEditorWindowElem.querySelectorAll('.layer-editor-window__tab');
    const contentDivs = layerEditorWindowElem.querySelectorAll('.layer-editor-window__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            let clicked = e.currentTarget;
            if (clicked.classList.contains('selected')) return

            tabs.forEach((tab, index) => {
                if (tab.classList.contains('selected')) {
                    tab.classList.remove('selected');
                    contentDivs[index].classList.remove('open');
                }
            })
            clicked.classList.add('selected');
            contentDivs[index].classList.add('open')
        })
    })

}

export const closeLayerEditorWindow = () => {
    let heigth = layerEditorWindowElem.clientHeight;
    layerEditorWindowElem.style.setProperty('--top', `-${heigth}px`);
    layerEditorWindowElem.classList.remove('open');
}

export const openLayerEditorWindow = () => {
    layerEditorWindowElem.style.setProperty('--top', `${headerPanel.clientHeight}px`);
    layerEditorWindowElem.classList.add('open');
}

export const layerEditorWindow = () => {
    const setWidth = () => {
        let width = workspace.clientWidth;
        layerEditorWindowElem.style.width = `${width - 1}px`;
    }

    const setPosition = () => {
        const rect = workspace.getBoundingClientRect();
        let left = rect.left;
        layerEditorWindowElem.style.setProperty('--preview-left', `${left + 2}px`);
        layerEditorWindowElem.style.setProperty('--top', `${headerPanel.clientHeight}px`);
        layerEditorWindowElem.style.setProperty('--max-height', `${rect.top + rect.height - headerPanel.clientHeight}px`);
    }

    setWidth();
    setPosition();
    closeLayerEditorWindow();
    switchTabsHandler();

    window.onresize = () => {
        setWidth();
        setPosition();
    }
}

