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
let loginform = document.getElementById('loginForm')
var listitem = document.getElementById('lists');
listitem.addEventListener('click', removeItem);
//listitem.addEventListener('click', editItem);
loginform.addEventListener('submit', function(loginForm) {

const myObject = {
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
 
  var editBtn = document.createElement('button');
  editBtn.className = 'edit';
 
  // Add classes to del button
 
  //adding class of edit button
 // editBtn.className = 'float-lg-right';
 
 
  deleteBtn.appendChild(document.createTextNode('Delete'));
  
  editBtn.appendChild(document.createTextNode('Edit'));
  listitem.appendChild(litag);
  litag.appendChild(deleteBtn);
  litag.appendChild(editBtn);

  // Remove item

  editBtn.onclick = (e) =>{
    if(e.target.classList.contains('edit')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        console.log(li.parentElement);
      
        var editedname = document.getElementById('username');
        var editmail = document.getElementById('email');
        editedname.value = myObject.name;
        editmail.value = myObject.email;

        listitem.removeChild(li);
        console.log(editedname.value);
        localStorage.removeItem(email.value);
       
      }
    }
  }
 
  

}




function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      listitem.removeChild(li);
      localStorage.removeItem(email.value);
    }
  }
}




