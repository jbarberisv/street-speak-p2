// Signup request
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to sign up.'); // When unsuccessful, show alert
    }
  }
};

// Event listener
const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}

// Handler function for login form submission
const LoginFormHandler = async (event) => {
  event.preventDefault();
  // Get the values of the username and password input fields
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  // If the input fields have values
  if (username && password) {
        // Send a POST request to the login endpoint with the input values as JSON data
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // If the request was successful, redirect to the homepage
    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
            // If the request was unsuccessful, show an alert
      alert('Failed to log in.'); // When unsuccessful, show alert
    }
  }
};

// Event listener for the login form
const LoginForm = document.querySelector('.login-form');
if (LoginForm) {
  LoginForm.addEventListener('submit', LoginFormHandler);
}

// Logout function to send request to log out the user
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); // When successful, load the homepage
  } else {
    alert('Failed to log out.'); // When unsuccessful, show alert
  }
};
// Add an event listener to the logout button
const logoutButton = document.querySelector('#logout');
if (logoutButton) {
  logoutButton.addEventListener('click', logout);
}
