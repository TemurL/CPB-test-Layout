import { cleanSelectionFromLayers } from "./selectLayerForEdit.js";

export const editLayersBtn = () => {
    const showLayersBtn = document.querySelector('#edit-layers');
    const layoutMenu = document.querySelector('.layout__menu');
    const layoutLayers = document.querySelector('.menu__edit-layers');
    const layoutOptions = document.querySelector('.menu__edit-options');

    const editLayersCloseButton = layoutLayers.querySelector('.edit-layers__close-button');
    const layerEditorWindowCloseBtn = document.querySelector('.layer-editor-window__close-button');

    const toggleEditLayers = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            layoutMenu.querySelector('.open').classList.remove('open');
            layoutLayers.classList.add('open');
            e.currentTarget.classList.add('active');
        } else {
            layoutLayers.classList.remove('open');
            layoutOptions.classList.add('open');
            e.currentTarget.classList.remove('active');
            cleanSelectionFromLayers();
        }
    }

    showLayersBtn.addEventListener('click', toggleEditLayers);

    editLayersCloseButton.addEventListener('click', (e) => {
        layoutLayers.classList.remove('open');
        layoutOptions.classList.add('open');
        showLayersBtn.classList.remove('active');
        cleanSelectionFromLayers();      
    });

    layerEditorWindowCloseBtn.addEventListener('click', cleanSelectionFromLayers);
}