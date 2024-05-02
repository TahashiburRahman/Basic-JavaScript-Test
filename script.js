const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    clearErrorMessages();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        displayErrorMessage('name', 'Please enter your name.');
        isValid = false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        displayErrorMessage('email', 'Please enter a valid email address.');
        isValid = false;
    }

    if (!/^\d{11}$/.test(phoneInput.value)) {
        displayErrorMessage('phone', 'Please enter a valid Phone number. (11 digits)');
        isValid = false;
    }

    if (isValid) {
        const output = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            message: messageInput.value,
        };

        form.reset();

        // Display submitted data
        outputDiv.innerHTML = `
            <p>Name: ${output.name}</p>
            <p>Email: ${output.email}</p>
            <p>Phone: ${output.phone}</p>
            <p>Message: ${output.message}</p>
        `;
    }
});

function displayErrorMessage(inputId, errorMessage) {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.textContent = errorMessage;
}

function clearErrorMessages() {
    document.querySelectorAll('.error-message').forEach((errorElement) => {
        errorElement.textContent = '';
    });
}


// dark mode
const darkModeButton = document.querySelector('.dark');
const body = document.body;

darkModeButton.addEventListener('click', () => {
body.classList.toggle('dark-mode');

const isDarkMode = body.classList.contains('dark-mode');
darkModeButton.textContent = isDarkMode ? 'Light' : 'Dark';
});


function scrollToAbout() {
const aboutSection = document.getElementById('about-section');

// Scroll to the "About Us" section with smooth behavior
window.scrollTo({
    top: aboutSection.offsetTop,
    behavior: 'smooth'
});

// Add green border effect
aboutSection.style.border = '2px solid green';

// Remove the border after 1 seconds
setTimeout(() => {
    aboutSection.style.border = 'none';
}, 1000);
}

function scrollToContact() {
const contactSection = document.getElementById('contact-section');

// Scroll to the "Contact" section with smooth behavior
window.scrollTo({
    top: contactSection.offsetTop,
    behavior: 'smooth'
});

// Add green border effect
contactSection.style.border = '2px solid green';

// Remove the border after 1 seconds
setTimeout(() => {
    contactSection.style.border = 'none';
}, 1000);
}



