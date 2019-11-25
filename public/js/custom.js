toggleSignup = () => {
    document.querySelector("#login-toggle").style.backgroundColor="#fff";
     document.querySelector("#login-toggle").style.color="#222";
     document.querySelector("#signup-toggle").style.backgroundColor="#57b846";
     document.querySelector("#signup-toggle").style.color="#fff";
     document.querySelector("#login-form").style.display="none";
     document.querySelector("#signup-form").style.display="block";
 }
 
toggleLogin = () => {
     document.querySelector("#login-toggle").style.backgroundColor="#57B846";
     document.querySelector("#login-toggle").style.color="#fff";
     document.querySelector("#signup-toggle").style.backgroundColor="#fff";
     document.querySelector("#signup-toggle").style.color="#222";
     document.querySelector("#signup-form").style.display="none";
     document.querySelector("#login-form").style.display="block";
 }
 