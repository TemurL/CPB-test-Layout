import { canvasSizing } from './modules/canvasSizing.js';
import { dropdownAddLayer } from './modules/layers/dropdownAddLayer.js';
import * as TLFunc from './modules/functions.js'
import { gallerySelect } from './modules/gallerySelect.js';
import { headerShadow } from './modules/headerShadow.js';
import { logicRulesScripts } from './modules/logicRulesScripts.js';
import { panelBtns } from './modules/panelBtns.js';
import { stepTabs } from './modules/stepTabs.js';
import { Layers } from './modules/layers/newCodeForLayers.js';
import { collapse } from './modules/options/collapse.js';

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
logicRulesScripts();
dropdownAddLayer();
collapse();

window.Layers = Layers;

Layers.init();
