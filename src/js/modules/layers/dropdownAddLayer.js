import { Layers } from './newCodeForLayers.js';


export const dropdownAddLayer = () => {
    const addLayerBtns = document.querySelectorAll('.custom-option__add-layer-button');
    const selectFromBtn = document.querySelectorAll('.dropdown_select-from');
    const layerManagerBtn = document.querySelector('.layer-manager__button#edit-layers');

    const findDropdown = (el) => {
        return el.closest('.custom-option').querySelector('.custom-option__add-layer-dropdown');
    }

    const addLayerBtnsClickHandler = (e) => {
        findDropdown(e.currentTarget).classList.add('open');
    }

    const selectFromBtnClickHandler = (e) => {
        findDropdown(e.currentTarget).classList.remove('open');
        layerManagerBtn.click();
    }

    addLayerBtns.forEach(btn => {
        btn.addEventListener('click', addLayerBtnsClickHandler);
    })

    selectFromBtn.forEach(btn => {
        btn.addEventListener('click', selectFromBtnClickHandler);
    })
}