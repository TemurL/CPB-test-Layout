import { canvasSizing } from './modules/canvasSizing.js';
import { dropdownAddLayer } from './modules/layers/dropdownAddLayer.js';
import { editLayersBtn } from './modules/layers/editLayersBtn.js';
import * as TLFunc from './modules/functions.js'
import { gallerySelect } from './modules/gallerySelect.js';
import { headerShadow } from './modules/headerShadow.js';
import { layerEditorWindow } from './modules/layers/layer-editor-window.js';
import { logicRulesScripts } from './modules/logicRulesScripts.js';
import { panelBtns } from './modules/panelBtns.js';
import { selectLayerForEdit } from './modules/layers/selectLayerForEdit.js';
import { stepTabs } from './modules/stepTabs.js';
import { setLayerEditorHeightAssCssProp } from './modules/layers/setLayerEditorHeightAssCssProp.js';

const disableFormSubmitBtns = () => {
    const btns = document.querySelectorAll('form button');
    btns.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
        })
    })
}
disableFormSubmitBtns();

TLFunc.isWebp();
panelBtns();
canvasSizing();
headerShadow();
gallerySelect();
stepTabs();
editLayersBtn();
selectLayerForEdit();
layerEditorWindow();
logicRulesScripts();
dropdownAddLayer();
setLayerEditorHeightAssCssProp();