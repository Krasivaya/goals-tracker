const form = document.querySelector('#addForm');
const itemList = document.querySelector('#goalsList');
const check = document.querySelector('.check');
const chart = $('#chart');
const circle = $('#circle-2');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Progress event
goalCheck.addEventListener('click', progress);


// Add a new goal
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.querySelector('#item').value;

    // Create new li element
    const li = document.createElement('li');
    // Add a className
    li.className = 'list-group-item custom-checkbox';
    // Add text Node
    li.innerHTML = `
    <input type="checkbox" name="goal" class="goalCheck" id="${newItem}">
    <label class="yoo pl-2" for="${newItem}">${newItem}</label>
    `;

    // Create del button element
    const delBtn = document.createElement('button');
    // Add class
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Add text node
    delBtn.appendChild(document.createTextNode('X'));
    // Insert delBtn to li
    li.appendChild(delBtn);

    // Add li element to itemList
    itemList.appendChild(li);

    resetField()
}

// Rsset function
function resetField() {
    $('#item').val('')
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Goal Progress
function progress() {
    const allGoals = $('input[name="goal"]').length;
    const checkedGoals = $('input[name="goal"]:checked').length;

    // Results
    const results = (checkedGoals / allGoals) * 100

    // Display the Results
    if (results === 100) {
        document.querySelector('#done').style = 'display:block';
    } else if (isNaN(results)) {
        chart[0].innerText = 0
    }
    else {
        document.querySelector('#done').style = 'display:none';
        document.querySelector('#wait').style = 'display:none';
        document.querySelector('#progress').style = 'display:block';

        chart[0].innerText = Math.round(results)
        circle[0].setAttribute('stroke-dashoffset', -results)
    }
}
