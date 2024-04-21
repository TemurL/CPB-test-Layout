export const stepTabs = () => {
    let tabs = document.querySelectorAll('.tab-list__tab');
    const addStepBtn = document.querySelector('#add-step-button');
    const stepsWrapper = document.querySelector('.steps__wrapper');

    const tabClickHandler = (e) => {
        tabs = document.querySelectorAll('.tab-list__tab');
        if (e.currentTarget.classList.contains('selected')) {
            e.currentTarget.setAttribute('contenteditable', 'true');
            return
        }
        e.currentTarget.parentElement.querySelector('.selected').removeAttribute('contenteditable');
        e.currentTarget.parentElement.querySelector('.selected').classList.remove('selected');
        e.currentTarget.classList.add('selected');
        
        let index = e.currentTarget.id.split('_')[1];

        stepsWrapper.querySelector('.open').classList.remove('open');
        console.log('here');
        stepsWrapper.children[index - 1].classList.add('open');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', tabClickHandler);
    })

    const createStep = (e) => {
        let stepsLenght = document.querySelectorAll('.tab-list__tab').length
        const newTab = document.createElement('li');
        newTab.classList.add('tab-list__tab');
        newTab.id = `steps-tab_${stepsLenght + 1}`;
        newTab.textContent = `Step ${stepsLenght + 1}`;
        newTab.addEventListener('click', tabClickHandler);
        e.currentTarget.insertAdjacentElement('beforebegin', newTab);

        const newStepContent = document.createElement('div');
        newStepContent.classList.add('tab-list__step-content');
        newStepContent.id = `steps-content_${stepsLenght + 1}`;
        stepsWrapper.insertAdjacentElement('beforeend', newStepContent);

        newTab.click();
    }

    addStepBtn.addEventListener('click', createStep);
}