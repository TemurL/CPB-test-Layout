import { canvasSizing } from './modules/canvasSizing.js';
import { editLayersBtn } from './modules/editLayersBtn.js';
import * as TLFunc from './modules/functions.js'
import { gallerySelect } from './modules/gallerySelect.js';
import { headerShadow } from './modules/headerShadow.js';
import { layerEditorWindow } from './modules/layer-editor-window.js';
import { logicRulesScripts } from './modules/logicRulesScripts.js';
import { panelBtns } from './modules/panelBtns.js';
import { selectLayerForEdit } from './modules/selectLayerForEdit.js';
import { stepTabs } from './modules/stepTabs.js';

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