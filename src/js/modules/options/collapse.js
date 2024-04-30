export const collapse = () => {
    const collapseBtns = document.querySelectorAll('.custom-option__collapse-button');
    collapseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const customOption = e.target.closest('.custom-option');
            if (customOption.classList.contains('collapsed')) {
                customOption.classList.remove('collapsed');
            } else {
                customOption.classList.add('collapsed');
            }
        })
    })
}