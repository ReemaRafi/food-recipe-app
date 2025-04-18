import{
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  doc, setDoc,
   db,

} from "../../config.js";




//   sign in with gooogle

 let signinwithGoogle = () => {

  signInWithPopup(auth, googleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user" ,user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("errorMessage", eror)
    // ...
  });

 }



  //////////////////add data////////////

let addUserToFirestore = async () => {

  const ras = await setDoc(doc(db, "users", "user.uid"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });


  console.log("res" ,)
}



// const _sigInWithGoogle = async () => {
//     try {
//         await signOut(auth);  // 🛑 Pehle Logout
//         console.log("User signed out before sign-in attempt.");

//         const result = await signInWithPopup(auth, provider); // 🟢 Phir Sign-in
//         console.log("User signed in:", result.user);
//     } catch (error) {
//         console.error("Google Sign-In Error:", error.message);
//     }
// };


 const signinWithGoogle = document.getElementById("signinWithGoogle");
 signinWithGoogle.addEventListener('click',signinwithGoogle );
