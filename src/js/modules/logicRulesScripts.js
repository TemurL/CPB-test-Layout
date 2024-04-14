const defaultRule = (index) => {
    return `
    <div class="logic__rule-content">
        <label for="logic__select_${index}">If Customer Selects:</label>
        <select name="logic__select_${index}" id="logic__select_${index}">
            <option value="none">Do Not select</option>
            <option value="other">Other</option>
            <option value="other">Other</option>
        </select>
        <p class="discription">This Element Should Be:</p>
        <div class="input-wrapper"><input type="radio" name="logic__state_${index}" id="logic__hidden_${index}" checked><label for="logic__hidden_${index}">Hidden</label></div>
        <div class="input-wrapper"><input type="radio" name="logic__state_${index}" id="logic__shown_${index}"><label for="logic__shown_${index}">Shown</label></div>
    </div>
    <div class="logic__rule-actions">
        <img src="./img/logic/copy.svg" alt="" class="logic__copy-button" id="logic__copy-button_${index}">
        <img src="./img/logic/delete.svg" alt="" class="logic__delete-button" id="logic__delete-button_${index}">
    </div>
    `
}
const addBtns = document.querySelectorAll('.logic__add-logic');

const deleteRule = (e) => {
    const currentRule = e.currentTarget.parentElement.parentElement;
    currentRule.remove();
}

const addRule = (e) => {
    let rulesQty = +e.currentTarget.dataset.rulesQty;
    const newRule = document.createElement('div');
    newRule.classList.add('logic__rule');
    newRule.innerHTML = defaultRule(rulesQty + 1);

    e.currentTarget.dataset.rulesQty = rulesQty + 1;
    e.currentTarget.insertAdjacentElement('beforebegin', newRule);

    newRule.querySelector('.logic__delete-button').addEventListener('click', deleteRule);
}

export const logicRulesScripts = () => {
    addBtns.forEach(btn => {
        btn.addEventListener('click', addRule);
    });
}