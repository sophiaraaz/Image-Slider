function submitForm(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('gender').value;
    const password = document.getElementById('college id').value;
    const password = document.getElementById('date of birth').value;
    const password = document.getElementById('password').value;
     
    // Validation (you can add more complex validation)
    if (username.trim() === '' || email.trim() === '' || gender.trim() === ''||  college id.trim() === '' || date of birth.trim() === '' || password.trim() === '' ) {
      showMessage('Please fill in all fields', 'red');
      return;
    }
  
    // Display success message
    showMessage('Registration successful!', 'green');
    clearForm(); // Clear the form after successful registration
  }
  
  function showMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.style.color = color;
    messageElement.textContent = message;
  }
  
  function clearForm() {
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('college id').value = '';
    document.getElementById('date of birth').value = '';
    document.getElementById('password').value = '';
    
  }

  