document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const masterPassword = document.getElementById('master-password').value;

    
    const correctPassword = 'Guest'; 

    if (masterPassword === correctPassword) {
        window.location.href = 'passwords.html'; 
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
