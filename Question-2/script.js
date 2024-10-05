document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const submitBtn = document.getElementById('submitBtn');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');

    const nameSuccess = document.getElementById('nameSuccess');
    const emailSuccess = document.getElementById('emailSuccess');
    const phoneSuccess = document.getElementById('phoneSuccess');
    const passwordSuccess = document.getElementById('passwordSuccess');

    const validation = {
        name: false,
        email: false,
        phone: false,
        password: false
    };

    const enableSubmit = () => {
        submitBtn.disabled = !(validation.name && validation.email && validation.phone && validation.password);
    };

    // Name validation
    nameInput.addEventListener('input', function () {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameSuccess.textContent = '';
            validation.name = false;
        } else {
            nameError.textContent = '';
            nameSuccess.textContent = 'Valid name';
            validation.name = true;
        }
        enableSubmit();
    });

    // Email validation
    emailInput.addEventListener('input', function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email';
            emailSuccess.textContent = '';
            validation.email = false;
        } else {
            emailError.textContent = '';
            emailSuccess.textContent = 'Valid email';
            validation.email = true;
        }
        enableSubmit();
    });

    // Phone number validation
    phoneInput.addEventListener('input', function () {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.textContent = 'Phone number must be 10 digits';
            phoneSuccess.textContent = '';
            validation.phone = false;
        } else {
            phoneError.textContent = '';
            phoneSuccess.textContent = 'Valid phone number';
            validation.phone = true;
        }
        enableSubmit();
    });

    // Password validation
    passwordInput.addEventListener('input', function () {
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long';
            passwordSuccess.textContent = '';
            validation.password = false;
        } else {
            passwordError.textContent = '';
            passwordSuccess.textContent = 'Valid password';
            validation.password = true;
        }
        enableSubmit();
    });

    // Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
        validation.name = validation.email = validation.phone = validation.password = false;
        enableSubmit();
        nameSuccess.textContent = emailSuccess.textContent = phoneSuccess.textContent = passwordSuccess.textContent = '';
    });
});
