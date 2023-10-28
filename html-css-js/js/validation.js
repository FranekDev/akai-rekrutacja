/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const name = document.querySelector('#first-name');
const nameLength = document.querySelector('.name-length');

const surname = document.querySelector('#last-name');
const surnameLength = document.querySelector('.surname-length');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const form = document.querySelector('form');
const submitBtn = document.querySelector('input[type="submit"]');

const validateInput = (input, minLength, maxLength) => {
    const allowedLetters = /^[a-zA-Z]+$/;
    const inputLength = input.value.trim().length;

    if (inputLength < minLength || inputLength > maxLength || !allowedLetters.test(input.value)) {

        input.classList.add('invalid');
        return false;
    } else {
        input.classList.remove('invalid');
        return true;
    }

 
};

const inputName = document.querySelector('.input-name');
const inputSurname = document.querySelector('.input-surname');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateCheckboxes();

    if (inputSurname.childElementCount > 1 || inputName.childElementCount > 1) {
        inputSurname.removeChild(inputSurname.lastChild);
        inputName.removeChild(inputName.lastChild);
    }

    if (!validateInput(name, 3, 15)) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Imię nie może być puste,<br>musi zawierać od 3 do 15 znaków,<br>dozwolone są tylko litery.';
        inputName.appendChild(errorMessage);
    }

    if (!validateInput(surname, 3, 20)) {
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Nazwisko nie może być puste,<br>musi zawierać od 3 do 20 znaków,<br>dozwolone są tylko litery.';
        inputSurname.appendChild(errorMessage);
    }
    
});

name.addEventListener('input', () => {
    name.setAttribute('maxlength', 15);
    nameLength.textContent = `${name.value.length}/15`;
});

surname.addEventListener('input', () => {
    surname.setAttribute('maxlength', 20);
    surnameLength.textContent = `${surname.value.length}/20`;
});


const validateCheckboxes = () => {
    const sections = document.querySelector('.sections');
    const checked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    const errors = sections.getElementsByTagName('p');

    if (!checked) {
        const errorMessage = document.createElement('p');

        errorMessage.classList.add('error-message');
        errorMessage.innerHTML = 'Wybierz co najmniej jedną sekcję.';

        sections.appendChild(errorMessage);
    } else if (errors.length > 0) {
        sections.removeChild(sections.lastChild);
    }
}

window.addEventListener('load', () => {
    nameLength.textContent = `${name.value.length}/15`;
    surnameLength.textContent = `${surname.value.length}/20`;
});
