import { closeLayerEditorWindow, openLayerEditorWindow } from "./layer-editor-window.js";

const layesUl = document.querySelectorAll('.layers-list__layer-item');

const openEditor = () => {
    document.querySelector('.layer-editor-wrapper').classList.add('open');
    document.querySelector('.edit-layers__close-button').classList.add('hidden');
    openLayerEditorWindow();
}
const closeEditor = () => {
    document.querySelector('.layer-editor-wrapper').classList.remove('open');
    document.querySelector('.edit-layers__close-button').classList.remove('hidden');
    closeLayerEditorWindow();
}

export const selectLayerForEdit = () => {
    
    const clickHandler = (e) => {
        if (e.currentTarget.classList.contains('open-edit')) return
        layesUl.forEach(l => {
            if (l.classList.contains('open-edit')) {
                l.classList.remove('open-edit');
            }
        })
        e.currentTarget.classList.add('open-edit');
        openEditor();
    }
    
    layesUl.forEach(item => {
        item.addEventListener('click', clickHandler);
    })
}

export const cleanSelectionFromLayers = () => {
    layesUl.forEach(item => {
        if (item.classList.contains('open-edit')) item.classList.remove('open-edit');
        closeEditor();
    })
}