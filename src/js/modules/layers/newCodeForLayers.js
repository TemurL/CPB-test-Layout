export const Layers = new class Layers{
    constructor() {   
        this.layoutLayers = document.querySelector('.menu__edit-layers'),
        this.layoutOptions = document.querySelector('.menu__edit-options'),
        this.layerEditorWrapper = document.querySelector('.layer-editor-wrapper'),
        this.showLayersBtn = document.querySelector('#edit-layers'),
        this.createLayerBtn = document.getElementById('create-layer'),
        this.layersList = document.querySelector('.edit-layers__layers-list'),
        this.layoutMenu = document.querySelector('.layout__menu'),
        this.editLayersCloseButton = document.querySelector('.edit-layers__close-button'),
        this.layerEditorWindowCloseBtn = document.querySelector('.layer-editor-window__close-button'),
        this.applyBtn = document.querySelector('.layer-editor__action-button#apply'),
        this.cancelBtn = document.querySelector('.layer-editor__action-button#cancel'),
        this.layerEditorWindowElem = document.getElementsByClassName('layer-editor-window')[0],
        this.workspace = document.querySelector('.preview-container__workspace'),
        this.headerPanel = document.getElementById('header-panel'),

        this.layerEditorWindowIsOpen = false,
        this.layoutLayersIsOpen = false,

        this.actions = {
            getLayersUl: () => {
                return document.querySelectorAll('.edit-layers .layers-list__layer-item');
            },

            clickHandlerForLayerLi: (e) => {
                if (e.currentTarget.classList.contains('open-edit')) return
                Array.from(this.actions.getLayersUl()).forEach(l => {
                    if (l.classList.contains('open-edit')) {
                        l.classList.remove('open-edit');
                    }
                })
                e.currentTarget.classList.add('open-edit');
                this.actions.openEditor();


            },

            cleanSelectionFromLayers: () => {
                Array.from(this.actions.getLayersUl()).forEach(item => {
                    if (item.classList.contains('open-edit')) item.classList.remove('open-edit');
                    this.actions.closeEditor();
                })
            },

            showLayoutLayers: () => {
                if (this.linkLayersObject.isOpen) {
                    this.linkLayersObject.close();
                };

                this.layoutOptions.classList.remove('open');
                this.layoutLayers.classList.add('open');

                Array.from(this.showLayersBtn.parentElement.children).forEach(btn => {
                    if (btn.classList.contains('active')) btn.classList.remove('active')
                });

                this.showLayersBtn.classList.add('active');

                this.layoutLayersIsOpen = true;
            },
            hideLayoutLayers: () => {
                this.layoutOptions.classList.add('open');
                this.layoutLayers.classList.remove('open');
                this.showLayersBtn.classList.remove('active');
                this.createLayerBtn.classList.remove('active');

                this.actions.cleanSelectionFromLayers();
                this.actions.closeLayerEditorWindow();

                this.layoutLayersIsOpen = false;
                this.layerEditorWindowIsOpen = false;
            },
            createLayer: () => {
                this.createLayerBtn.classList.add('active');
                this.showLayersBtn.classList.remove('active');

                const newLiElem = document.createElement('li');
                newLiElem.classList.add('layers-list__layer-item');
                newLiElem.dataset.layerType = 'image-area';
                newLiElem.textContent = 'New Layer Title';
                this.layersList.appendChild(newLiElem);
                newLiElem.addEventListener('click', this.actions.clickHandlerForLayerLi);
                newLiElem.click();

                this.layoutLayersIsOpen = true;
                this.layerEditorWindowIsOpen = true;
            },

            switchShowLayersBtnToActive: () => {
                this.actions.cleanSelectionFromLayers();
                this.showLayersBtn.classList.add('active');
                this.createLayerBtn.classList.remove('active');

                this.layoutLayersIsOpen = true;
                this.layerEditorWindowIsOpen = false;
            },

            closeLayerEditorWindow: () => {
                let heigth = this.layerEditorWindowElem.clientHeight;
                this.layerEditorWindowElem.style.setProperty('--top', `-${heigth}px`);
                this.layerEditorWindowElem.classList.remove('open');

                this.layerEditorWindowIsOpen = false;
            },

            openLayerEditorWindow: () => {
                this.layerEditorWindowElem.style.setProperty('--top', `${this.headerPanel.clientHeight}px`);
                this.layerEditorWindowElem.classList.add('open');

                this.layerEditorWindowIsOpen = true;
            },

            openEditor: () => {
                document.querySelector('.layer-editor-wrapper').classList.add('open');
                document.querySelector('.edit-layers__close-button').classList.add('hidden');
                this.actions.openLayerEditorWindow();
            },

            closeEditor: () => {
                document.querySelector('.layer-editor-wrapper').classList.remove('open');
                document.querySelector('.edit-layers__close-button').classList.remove('hidden');
                this.actions.closeLayerEditorWindow();
            },

            setWidthLayerEditorWindow: () => {
                let width = this.workspace.clientWidth;
                this.layerEditorWindowElem.style.width = `${width - 1}px`;
            },

            setPositionLayerEditorWindow: () => {
                const rect = this.workspace.getBoundingClientRect();
                let left = rect.left;
                this.layerEditorWindowElem.style.setProperty('--preview-left', `${left + 2}px`);
                this.layerEditorWindowElem.style.setProperty('--top', `${this.headerPanel.clientHeight}px`);
                this.layerEditorWindowElem.style.setProperty('--max-height', `${rect.top + rect.height - this.headerPanel.clientHeight}px`);
            },

            switchTabsHandlerLayerEditorWindow: () => {
                const tabs = this.layerEditorWindowElem.querySelectorAll('.layer-editor-window__tab');
                const contentDivs = this.layerEditorWindowElem.querySelectorAll('.layer-editor-window__content');

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
            },

            setLayerEditorHeightAssCssProp: () => {
                let height;

                new ResizeObserver(entries => {
                    entries.forEach(() => {
                        height = this.layerEditorWrapper.clientHeight;
                        this.layoutLayers.style.setProperty('--layer-editor-height', `${height}px`);
                    });
                }).observe(this.layerEditorWrapper);

            }

        },

        this.init = () => {
            this.showLayersBtn.addEventListener('click', () => {
                if (this.layoutLayersIsOpen && this.layerEditorWindowIsOpen) {
                    this.actions.switchShowLayersBtnToActive();
                } else if (this.layoutLayersIsOpen) {
                    this.actions.hideLayoutLayers();
                } else {
                    this.actions.showLayoutLayers();
                }
            });

            this.createLayerBtn.addEventListener('click', () => {
                if (!this.layoutLayersIsOpen) {
                    this.actions.showLayoutLayers();
                }
                this.actions.createLayer();
            });

            this.layerEditorWindowCloseBtn.addEventListener('click', (e) => {
                this.actions.switchShowLayersBtnToActive();
            });

            this.applyBtn.addEventListener('click', (e) => {
                this.actions.switchShowLayersBtnToActive();
            });

            this.cancelBtn.addEventListener('click', (e) => {
                this.actions.switchShowLayersBtnToActive();
            });

            this.editLayersCloseButton.addEventListener('click', (e) => {
                this.actions.hideLayoutLayers();
                this.actions.cleanSelectionFromLayers();
            });

            this.actions.setWidthLayerEditorWindow();
            this.actions.setPositionLayerEditorWindow();
            this.actions.closeLayerEditorWindow();
            this.actions.switchTabsHandlerLayerEditorWindow();

            window.onresize = () => {
                this.actions.setWidthLayerEditorWindow();
                this.actions.setPositionLayerEditorWindow();
            }

            this.actions.setLayerEditorHeightAssCssProp();

            Array.from(this.actions.getLayersUl()).forEach(item => {
                item.addEventListener('click', this.actions.clickHandlerForLayerLi);
            });

            this.linkLayersObject.init();

            console.log('Layers were init');
        },

        this.linkLayersObject = {
            linkLayersWrapper: document.getElementsByClassName('layer-manager__link-layers-wrapper')[0],
            linkLayersBtn: document.getElementById('link-layers'),
            layerUlIn: document.getElementsByClassName('link-layers__layers-list')[0],
            layerUlOut: document.getElementsByClassName('edit-layers__layers-list')[0],

            isOpen: false,

            listItemClickHandler: (e) => {
                console.log(e.target);
            },

            docMouseMoveHandler: (e) => {
                const player = document.querySelector('.drag-layer-player');
                player.style.setProperty('--pos-x', e.clientX + scrollX + 'px');
                player.style.setProperty('--pos-y', e.clientY + scrollY + 'px');
            },

            listItemMouseDownHandler: (e) => {
                console.log(e);
                let listItem = e.currentTarget;
                if (listItem.dataset.layerType === 'auto') {
                    listItem.classList.add('dont-drag');
                    addEventListener('mouseup', () => {
                        listItem.classList.remove('dont-drag');
                    });
                    return
                }
                listItem.classList.add('dragging');
                const player = document.createElement('div');
                player.classList.add('drag-layer-player');
                player.style.setProperty('--pos-x', e.clientX + scrollX + 'px');
                player.style.setProperty('--pos-y', e.clientY + scrollY + 'px');

                document.body.classList.add('dragging-layer-thumb');

                addEventListener('mousemove', this.linkLayersObject.docMouseMoveHandler);
                addEventListener('mouseup', (e) => {
                    removeEventListener('mousemove', this.linkLayersObject.docMouseMoveHandler);
                    player.style.animationName = 'scaleOut';
                    setTimeout(() => {
                        player.remove();
                    }, 350);
                    listItem.classList.add('connected');
                    listItem.classList.remove('dragging');
                    document.body.classList.remove('dragging-layer-thumb');
                })
                document.body.appendChild(player);
            },

            linkLayersBtnClickHandler: (e) => {
                if (this.linkLayersObject.isOpen) {
                    this.linkLayersObject.close();
                } else {
                    this.linkLayersObject.open();
                }
            },

            updateList: () => {
                let outLength = this.actions.getLayersUl().length;
                let inLength = this.linkLayersObject.layerUlIn.children.length;
                if (inLength < outLength) {
                    let clone;
                    for (let i = inLength; i < outLength; i++) {
                        clone = this.linkLayersObject.layerUlOut.children[i].cloneNode(true);
                        clone.addEventListener('click', this.linkLayersObject.listItemClickHandler);
                        clone.addEventListener('mousedown', this.linkLayersObject.listItemMouseDownHandler);
                        this.linkLayersObject.layerUlIn.appendChild(clone);
                    } 
                } else if (inLength > outLength) {
                    for (let i = 0; i < inLength - outLength; i++) {
                        this.linkLayersObject.layerUlIn.children[i].remove();
                        console.log(`removing layer ${i}...`);
                    }
                }
            },

            open: () => {
                if (this.layerEditorWindowIsOpen || this.layoutLayersIsOpen) {
                    this.actions.closeEditor();
                    this.actions.closeLayerEditorWindow();
                    this.actions.cleanSelectionFromLayers();
                    this.actions.hideLayoutLayers();
                };

                this.linkLayersObject.updateList();
                this.linkLayersObject.linkLayersWrapper.classList.add('open');

                this.linkLayersObject.isOpen = true;
            },

            close: () => {
                this.linkLayersObject.linkLayersWrapper.classList.remove('open');
                this.linkLayersObject.isOpen = false;
            },


            init: () => {
                this.linkLayersObject.updateList();
                this.linkLayersObject.linkLayersBtn.addEventListener('click', this.linkLayersObject.linkLayersBtnClickHandler);

                console.log('linkLayers was init');
            },
        }

        
    }
}