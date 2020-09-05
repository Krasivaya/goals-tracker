const form = document.querySelector('#addForm');


// Form submit event
form.addEventListener('submit', addItem);


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
}