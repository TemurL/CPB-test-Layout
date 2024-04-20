import { closeLayerEditorWindow, openLayerEditorWindow } from "./layer-editor-window.js";

const layesUl = document.getElementsByClassName('layers-list__layer-item');

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

export const clickHandlerForLayerLi = (e) => {
    if (e.currentTarget.classList.contains('open-edit')) return
    Array.from(layesUl).forEach(l => {
        if (l.classList.contains('open-edit')) {
            l.classList.remove('open-edit');
        }
    })
    e.currentTarget.classList.add('open-edit');
    openEditor();
}

export const selectLayerForEdit = () => {    
    Array.from(layesUl).forEach(item => {
        item.addEventListener('click', clickHandlerForLayerLi);
    })
}

export const cleanSelectionFromLayers = () => {
    Array.from(layesUl).forEach(item => {
        if (item.classList.contains('open-edit')) item.classList.remove('open-edit');
        closeEditor();
    })
}