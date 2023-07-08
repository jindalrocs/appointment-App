document.getElementById('loginForm').addEventListener('submit', function() {
    // Get the value of the name field.
    var name = document.getElementById('username').value;
    console.log(name);

    // Save the name in localStorage.
    localStorage.setItem('username', name);


       // Get the value of the email field.
       var emailid = document.getElementById('email').value;
       console.log(emailid);
   
       // Save the name in localStorage.
       localStorage.setItem('emailid', emailid);
  });