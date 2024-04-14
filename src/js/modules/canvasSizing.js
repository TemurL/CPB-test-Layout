export const canvasSizing = () => {
    const canvas = document.getElementsByClassName('workspace__canvas')[0];
    const biggerBtn = document.querySelector('.workspace__size-button#bigger');
    const smallerBtn = document.querySelector('.workspace__size-button#smaller');
    const selectSize = document.querySelector('.workspace__select-size');
    const dropdown = document.querySelector('.select-size__dropdown');
    
    const scaleBtnsClickHandler = (e) => {
        if (e.currentTarget.id == 'bigger') {
            canvas.style.setProperty('--set-scale', +getComputedStyle(canvas).scale + 0.2);
            selectSize.querySelector('span').textContent = `${Math.max(Math.floor((+getComputedStyle(canvas).scale + 0.2) * 100), 0)}%`;
        } else {
            canvas.style.setProperty('--set-scale', +getComputedStyle(canvas).scale - 0.2);
            selectSize.querySelector('span').textContent = `${Math.max(Math.floor((+getComputedStyle(canvas).scale - 0.2) * 100), 0)}%`;
        }
    }

    biggerBtn.addEventListener('click', scaleBtnsClickHandler);
    smallerBtn.addEventListener('click', scaleBtnsClickHandler);

    const drag = (e) => {

        const mouseUpHandler = () => {
            el.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        const mouseMoveHandler = (event) => {
            let offsetX = event.clientX - startX;
            let offsetY = event.clientY - startY;

            el.style.setProperty('--drag-position', `${prevPositionX + offsetX}px ${prevPositionY + offsetY}px`);
        }

        const el = e.currentTarget;

        let startX = e.clientX;
        let startY = e.clientY;

        let prevPositionX = +getComputedStyle(el).translate.split(' ')[0].replace('px', '');
        let prevPositionY = +getComputedStyle(el).translate.split(' ')[1].replace('px', '');

        el.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }

    canvas.addEventListener('mousedown', drag);

    //select size 
    const selectSizeClickHandler = (e) => {
        if (!dropdown.classList.contains('open')) {
            dropdown.style.display = 'block';
            setTimeout(() => {
                dropdown.classList.add('open');
            }, 50);
        } else {
            dropdown.classList.remove('open');
            setTimeout(() => {
                dropdown.style.display = 'none';
            }, 300);
        }
    }

    const dropdownLiClickHandler = (e) => {
        canvas.style.setProperty('--set-scale', +e.currentTarget.textContent.replace('%', '') / 100);
        canvas.style.setProperty('--drag-position', '1px 1px');
        selectSize.querySelector('span').textContent = e.currentTarget.textContent;
    }

    selectSize.addEventListener('click', selectSizeClickHandler);
    
    [...dropdown.children].forEach(li => {
        li.addEventListener('click', dropdownLiClickHandler);
    })
}