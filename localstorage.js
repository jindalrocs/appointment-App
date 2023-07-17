/*
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
*/
//storing object in right format
document.getElementById('loginForm').addEventListener('submit', function(loginForm) {

let myObject = {
  name : username.value,
  email : email.value
}
localStorage.setItem(myObject.email, JSON.stringify(myObject))
//console.log(localStorage);
//let myobj_deserialized = JSON.parse(localStorage.getItem("myObject"));
//console.log(myobj_deserialized);
showuser(myObject);
 }
);
function showuser(myObject)
{
  var listitem = document.getElementById('lists');
  var litag = document.createElement('li');
  litag.textContent = myObject.name + '-' + myObject.email;
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete';
 
 
  // Add classes to del button
 
  //adding class of edit button
 // editBtn.className = 'float-lg-right';
 
 
  deleteBtn.appendChild(document.createTextNode('Delete'));
  listitem.appendChild(litag);
  litag.appendChild(deleteBtn);

  // Remove item
 
  

}
var listitem = document.getElementById('lists');
listitem.addEventListener('click', removeItem);




function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      listitem.removeChild(li);
      localStorage.removeItem(email.value);
    }
  }
}
