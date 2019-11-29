//login and signup toggle
toggleSignup = () => {
    document.querySelector("#login-toggle").style.backgroundColor="#fff";
     document.querySelector("#login-toggle").style.color="#222";
     document.querySelector("#signup-toggle").style.backgroundColor="#008658";
     document.querySelector("#signup-toggle").style.color="#fff";
     document.querySelector("#login-form").style.display="none";
     document.querySelector("#signup-form").style.display="block";
 }
 
toggleLogin = () => {
     document.querySelector("#login-toggle").style.backgroundColor="#008658";
     document.querySelector("#login-toggle").style.color="#fff";
     document.querySelector("#signup-toggle").style.backgroundColor="#fff";
     document.querySelector("#signup-toggle").style.color="#222";
     document.querySelector("#signup-form").style.display="none";
     document.querySelector("#login-form").style.display="block";
 }
 

 //collapsible bar..
let col = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < col.length; i++) {
  col[i].addEventListener("click", function() {
    this.classList.toggle("activeCol");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
 //filter search
 const search =()=> {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.querySelector('#myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector("#myUL");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

