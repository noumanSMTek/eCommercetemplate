import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { auth, db } from "./firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";



const formHandler = document.getElementById('formHandler');
formHandler.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('userEmail');
    const passwordInput = document.getElementById('userPassword');
    const fNameInput = document.getElementById('fName');
    const lNameInput = document.getElementById('lName');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const country = document.getElementById('country').value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const fName = fNameInput.value;
    const lName = lNameInput.value;
    const phoneNumber = phoneNumberInput.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {
                    email,
                    password,
                    fName,
                    lName,
                    phoneNumber,
                    country,
                })
                .then(() => {
                    alert('Your Account Has Been Created');
                    emailInput.value = "";
                    passwordInput.value = "";
                    fNameInput.value = "";
                    lNameInput.value = "";
                    phoneNumberInput.value = "";
                })
                .catch((e) => {
                    alert(e)
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})