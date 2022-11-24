
const firebaseConfig = {
  apiKey: "AIzaSyAwFv9Vyl46_i0S8_aIcGA5rmb717wWcMY",
  authDomain: "auth-8f185.firebaseapp.com",
  projectId: "auth-8f185",
  storageBucket: "auth-8f185.appspot.com",
  messagingSenderId: "318652920836",
  appId: "1:318652920836:web:5cbdf2399d7fa2b9bff151"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
// Your web app's Firebase configuration

document.getElementById('login').addEventListener('click',GoogleLogin)

function GoogleLogin() {
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider)

.then((result)=>{
const user = result.user
console.log(user)
const name = user.displayName
const email = user.email
const image = user.photoURL
 
    const dict_values = {name,email,image}
    const s = JSON.stringify(dict_values)
    console.log(s)
}).then((s)=>  $.ajax({
  url:"http://localhost:8081/home",
  type:"POST",
  dataType: "json",
  content:"application/json",
  data:JSON.stringify(s)})
  ).catch(e=>console.log(e))
.then(
window.open = "/home"
)
}
