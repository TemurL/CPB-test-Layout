export const setLayerEditorHeightAssCssProp = () => {
    const layerEditor = document.querySelector('.layer-editor-wrapper');
    const editLayersElem = document.querySelector('.edit-layers');
    
    let height;

    new ResizeObserver(entries => {
        entries.forEach(() => {
            height = layerEditor.clientHeight;
            editLayersElem.style.setProperty('--layer-editor-height', `${height}px`);
        });
    }).observe(layerEditor);
}