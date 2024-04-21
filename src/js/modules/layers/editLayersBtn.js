import { closeLayerEditorWindow } from "./layer-editor-window.js";
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

    const showLayersBtnClickHandler = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            if (createLayerBtn.classList.contains('active')) {
                cleanSelectionFromLayers();
            }
            layoutMenu.querySelector('.layout__menu > .open').classList.remove('open');
            layoutLayers.classList.add('open');
            Array.from(e.currentTarget.parentElement.children).forEach(btn => {
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                }
            })
            e.currentTarget.classList.add('active');
        } else {
            layoutLayers.classList.remove('open');
            layoutOptions.classList.add('open');
            e.currentTarget.classList.remove('active');
            cleanSelectionFromLayers();
        }
    }
    const createLayerBtnClickHandler = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            Array.from(e.currentTarget.parentElement.children).forEach(btn => {
                if (btn.classList.contains('active')) {
                    btn.classList.remove('active');
                }
            })
            e.currentTarget.classList.add('active');
            layoutMenu.querySelector('.layout__menu > .open').classList.remove('open');
            layoutLayers.classList.add('open');

            const newLiElem = document.createElement('li');
            newLiElem.classList.add('layers-list__layer-item');
            newLiElem.dataset.layerType = 'image-area';
            newLiElem.textContent = 'New Layer Title';
            layersList.appendChild(newLiElem);
            newLiElem.addEventListener('click', clickHandlerForLayerLi);
            newLiElem.click();   
        } else {
            const newLiElem = document.createElement('li');
            newLiElem.classList.add('layers-list__layer-item');
            newLiElem.dataset.layerType = 'image-area';
            newLiElem.textContent = 'New Layer Title';
            layersList.appendChild(newLiElem);
            newLiElem.addEventListener('click', clickHandlerForLayerLi);
            newLiElem.click();   
        }
    }

    createLayerBtn.addEventListener('click', createLayerBtnClickHandler);
    showLayersBtn.addEventListener('click', showLayersBtnClickHandler);

    editLayersCloseButton.addEventListener('click', () => {
        layoutLayers.classList.remove('open');
        layoutOptions.classList.add('open');
        showLayersBtn.classList.remove('active');
        createLayerBtn.classList.remove('active');
        cleanSelectionFromLayers();      
    });

    // need to make better (not only this)
    layerEditorWindowCloseBtn.addEventListener('click', () => {
        cleanSelectionFromLayers();
        showLayersBtn.classList.add('active');
        createLayerBtn.classList.remove('active');
    });
    document.querySelector('.layer-editor__action-button#cancel').addEventListener('click', () => {
        cleanSelectionFromLayers();
        showLayersBtn.classList.add('active');
        createLayerBtn.classList.remove('active');
    })
    document.querySelector('.layer-editor__action-button#apply').addEventListener('click', () => {
        cleanSelectionFromLayers();
        showLayersBtn.classList.add('active');
        createLayerBtn.classList.remove('active');
    })
    //-------
}