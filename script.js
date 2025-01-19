// Get radio buttons and form elements
const signinTab = document.getElementById('signin-tab');
const signupTab = document.getElementById('signup-tab');
const signinForm = document.querySelector('.signin-form');
const signupForm = document.querySelector('.signup-form');

// Function to toggle forms based on radio button selection
function toggleForms() {
    if (signinTab.checked) {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else if (signupTab.checked) {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Initial check to display the correct form
toggleForms();

// Event listeners to update the form display when radio buttons are clicked
signinTab.addEventListener('change', toggleForms);
signupTab.addEventListener('change', toggleForms);
