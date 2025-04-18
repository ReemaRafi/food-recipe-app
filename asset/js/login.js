import { 
  auth,
  signInWithEmailAndPassword,

 } from "../../config.js";




const login = () => {

const email = document.getElementById('email');
const password = document.getElementById('password');
console.log(email.value , password.value)

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user->" ,user)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


const loginBtn = document.getElementById("loginBtn");
 loginBtn.addEventListener('click', login);











// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     // Simple validation (can be expanded as per need)
//     if (email === "" || password === "") {
//         alert("Please fill out all fields!");
//         return;
//     }

//     // Process login (can be an AJAX request to the server)
//     alert(`Logged in successfully as ${email}!`);
// });
