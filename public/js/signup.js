const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
  
    // if (email && password) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ 
    //         email: email.value,
    //         password: password.value,
    //      }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    };
  // };

  document
    .getElementById('signup-btn')
    .addEventListener('submit', signupFormHandler);
  