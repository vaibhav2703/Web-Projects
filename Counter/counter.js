const countValue = document.querySelector('#counter');

const increment = () => {

    // get the value form UI 
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value + 1;
    // set the value
    countValue.innerText = value;
};

const decrement = () => {
    
    // get the value form UI 
    let value = parseInt(countValue.innerText);
    // Update the value
    value = value - 1;
    // set the value
    countValue.innerText = value;

};