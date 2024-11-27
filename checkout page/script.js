const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('phone');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const address = document.getElementById('address');
const city = document.getElementById('city');
const zipCode = document.getElementById('zipcode');
const checkBtn = document.querySelectorAll('.checkout-btn')

function checkInputs() {
    if(emailInput.value != '' && passwordInput.value != '' && firstName.value != '' && lastName.value != '' && address.value != '' && city.value != '' && zipCode.value != '') {
        console.log('done')
    }
    else console.log('not')
}

const popup = document.getElementById('popup');

function showPopup(message, color) {
    popup.textContent = message;
    popup.style.backgroundColor = color;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000); // Hide popup after 3 seconds
}

function checkInputs() {
    if (
        emailInput.value !== '' &&
        passwordInput.value !== '' &&
        firstName.value !== '' &&
        lastName.value !== '' &&
        address.value !== '' &&
        city.value !== '' &&
        zipCode.value !== ''
    ) {
        showPopup('Operation Done Successfully', 'green');
    } else {
        showPopup('Fill all the inputs', 'red');
    }
}

checkBtn[0].addEventListener('click', checkInputs);

