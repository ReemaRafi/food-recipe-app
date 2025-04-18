import { 
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged ,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookProvider ,
  FacebookAuthProvider,
  doc, setDoc,
  db,
 } from "../../config.js";


///////////////////////// on auth change ////////



//cconsole.log("auth" , auth.currentUser) konsa user login hy malom kr k dega

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    //const uid = user.uid;
    console.log("user" ,user)
    // ...
  } else {
    console.log("not login")
    // User is signed out
    // ...
  }
});


///////////////////////// password reset ////////////

const sendResetpassEmail = () => {

const user = auth.currentUser;
  sendPasswordResetEmail(auth,user.email)
  .then(() => {
    console.log("Password reset email sent!")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error")
  });
}


const resetPassword = document.getElementById("resetPassword");
resetPassword.addEventListener('click',sendResetpassEmail )


///////////////////////// Register user ////////

const register = () => {

    const email = document.getElementById('email');
    const password = document.getElementById('password');

     console.log(email.value , password.value);
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user--->" ,user);
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // ..

    console.log("error -->" ,error)
  });


}



 const registerBtn = document.getElementById("registerBtn");
 registerBtn.addEventListener('click', register)



///////////////log out user /////////

 const logOut = () => {
  signOut(auth).then(() => {
    console.log("SignOut")
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}



const logoutBtn = document.getElementById("logoutBtn");
 logoutBtn.addEventListener('click', logOut);


 ////////sign in with google/


 

//  let signinwithGoogle = () => {

//   signInWithPopup(auth, googleProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log("user" ,user)
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     console.log("errorMessage", eror)
//     // ...
//   });

//  }


//////////////////add data////////////

let addUserToFirestore = async () => {

  const ras = await setDoc(doc(db, "users", "user.uid"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });


  console.log("res" ,)
}







//   sign in with gooogle


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

const _sigInWithGoogle = async () => {
    try {
        await signOut(auth);  // 🛑 Pehle Logout
        console.log("User signed out before sign-in attempt.");

        const result = await signInWithPopup(auth, provider); // 🟢 Phir Sign-in
        console.log("User signed in:", result.user);
    } catch (error) {
        console.error("Google Sign-In Error:", error.message);
    }
};


 const signinWithGoogle = document.getElementById("signinWithGoogle");
 signinWithGoogle.addEventListener('click', _sigInWithGoogle);

