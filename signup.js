document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');
  
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.style.display = 'block';
      return;
    }
  
    
    if (username.length < 3) {
      errorMessage.textContent = 'Username must be at least 3 characters long.';
      errorMessage.style.display = 'block';
      return;
    }
  
    
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      errorMessage.textContent = 'Password must be at least 6 characters long, contain at least one uppercase letter, and one number.';
      errorMessage.style.display = 'block';
      return;
    }
  
    
    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      errorMessage.style.display = 'block';
      return;
    }
  
    
    errorMessage.style.display = 'none';
    alert('Sign up successful!');
    window.location.href = 'index.html';
  });
  
 
  const togglePassword = document.getElementById('toggle-password');
  const passwordField = document.getElementById('password');
  togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈'; 
  });
  
  const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
  const confirmPasswordField = document.getElementById('confirm-password');
  toggleConfirmPassword.addEventListener('click', function() {
    const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '🙈'; 
  });
  


