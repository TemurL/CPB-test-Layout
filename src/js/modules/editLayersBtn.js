import { cleanSelectionFromLayers, clickHandlerForLayerLi } from "./selectLayerForEdit.js";

export const editLayersBtn = () => {
    const showLayersBtn = document.querySelector('#edit-layers');
    const createLayerBtn = document.querySelector('#create-layer');
    const layersList = document.querySelector('.edit-layers__layers-list');
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
        } else if (e.currentTarget.id == 'edit-layer') {
            layoutLayers.classList.remove('open');
            layoutOptions.classList.add('open');
            e.currentTarget.classList.remove('active');
            cleanSelectionFromLayers();
        }

        if (e.currentTarget.id == 'create-layer') {
            const newLiElem = document.createElement('li');
            newLiElem.classList.add('layers-list__layer-item');
            newLiElem.dataset.layerType = 'image-area';
            newLiElem.textContent = 'New Layer Title';
            layersList.appendChild(newLiElem);
            newLiElem.addEventListener('click', clickHandlerForLayerLi);
            newLiElem.click();
        }
    }

    createLayerBtn.addEventListener('click', toggleEditLayers);
    showLayersBtn.addEventListener('click', toggleEditLayers);

    editLayersCloseButton.addEventListener('click', (e) => {
        layoutLayers.classList.remove('open');
        layoutOptions.classList.add('open');
        showLayersBtn.classList.remove('active');
        cleanSelectionFromLayers();      
    });

    layerEditorWindowCloseBtn.addEventListener('click', cleanSelectionFromLayers);
}