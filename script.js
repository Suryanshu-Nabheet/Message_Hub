function validateForm(event) {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Clear previous error messages
    clearErrors();

    // Validate name
    if (name.length < 2) {
        showError('nameError', 'Name must be at least 2 characters long');
        isValid = false;
    }

    // Validate email
    if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate subject
    if (subject.length < 3) {
        showError('subjectError', 'Subject must be at least 3 characters long');
        isValid = false;
    }

    // Validate message
    if (message.length < 10) {
        showError('messageError', 'Message must be at least 10 characters long');
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.getElementsByClassName('error-message');
    for (let element of errorElements) {
        element.textContent = '';
    }
}

// Add form validation before submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!validateForm(event)) {
        event.preventDefault();
    }
});
