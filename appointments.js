document.querySelector('.appointment-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const services = document.getElementById('services').value;
    const date = document.getElementById('date').value;

    let isValid = true;
    let errorMessage = '';

    // Validate Name
    if (name === '') {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    // Validate Email
    if (email === '') {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Phone
    if (phone === '') {
        isValid = false;
        errorMessage += 'Phone number is required.\n';
    } else if (!/^\d+$/.test(phone)) {
        isValid = false;
        errorMessage += 'Phone number must contain digits only.\n';
    }

    // Validate Services
    if (services === '') {
        isValid = false;
        errorMessage += 'Please select a service.\n';
    }

    // Validate Date
    if (date === '') {
        isValid = false;
        errorMessage += 'Please select a date.\n';
    }

    if (!isValid) {
        alert(errorMessage);
    } else {
        alert('Appointment booked successfully!');
    }
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
