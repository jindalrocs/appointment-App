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
       //similarly can be done to other fields
  });

//storing object in right format

let myObject = {
  name : "Harsh",
  email : "harsh@gmail.com"
}
//localStorage.setItem("myObject", JSON.stringify(myObject))
//console.log(localStorage);
let myobj_deserialized = JSON.parse(localStorage.getItem("myObject"));
console.log(myobj_deserialized);
