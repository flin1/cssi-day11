const signIn = () => {
console.log("sign in code loaded")
}
const signInButton = document.querySelector("#signInButton");
signInButton.addEventListener("click", signIn);
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
    window.location = "writeNote.html";
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
// The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // The email of the user
    var email = error.email;
    console.log("broke")
  });