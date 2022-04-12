/**
 * Let's get a reference to the button and input... maybe we can use
 * these references to listen for clicks on the button and update our list
 */
const button = document.querySelector('#todo-form button');
const input = document.querySelector('#todo-form input');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        console.log(input.value);
        input.value = "";
    }
});

input.addEventListener('keypress', (event) => {
    if (input.value.length > 0 && event.which === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        console.log(input.value);
        input.value = "";
    }
});


