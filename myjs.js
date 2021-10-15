
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("myBtn1");

var span1 = document.getElementsByClassName("close1")[0];
 
btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}

function myfun(){
  var name = document.getElementById("InputEmail1").value;
  if(name){
    alert("Welcome "+name+" you have successfully signed up");
  }
}

function myfun1(){
  var name = document.getElementById("InputEmail").value;
  if(name){
    alert("Welcome "+name+" you have successfully logged in");
  }
}