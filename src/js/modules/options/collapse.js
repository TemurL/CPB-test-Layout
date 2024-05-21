export const collapse = () => {
    const collapseBtns = document.querySelectorAll('.custom-option__collapse-button');
    collapseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const customOption = e.target.closest('.custom-option');
            console.log(customOption);
            if (customOption.classList.contains('collapsed')) {
                customOption.classList.remove('collapsed');
            } else {
                customOption.classList.add('collapsed');
            }
        })
    })
}