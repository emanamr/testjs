
   var button = document.querySelector(".submit");
   	var ul = document.getElementById('list');

       ul.addEventListener('click',function(){

            button.disabled = false; /*الغاء خاصية عدم تفعيل الزر*/
  button.setAttribute('id', 'submit-enabled');  /*id تغيير الـ */
   	});var options = document.querySelectorAll("input[type=radio]");
    var li = document.getElementsByTagName("li");
 var correctAnswer = 0;

var modaElements = document.getElementById('modal-elements');
 button.addEventListener('click',function(){

   if( options[correctAnswer].checked == true ){
modaElements.style.background = "url(https://classroom.udacity.com/images/correct-illustration-ceea2.svg) no-repeat center top";
           li[correctAnswer].classList.add("correct");
           // قم بفتح النافذة المنبثقة الخاصة بالجواب الصحيح
overlay.style.display = "block";  /*اضفت هذا السطر*/
modaElements.style.color = "#02ccba";
modaElements.textContent= "Thanks for completing that!";


       }
       else{
modaElements.style.background = "url(https://classroom.udacity.com/images/wrong-illustration-0df77.svg) no-repeat center top";
          // قم بفتح النافذة المنبثقة الخاصة بالجواب الخطأ

          			modaElements.style.background = "url(https://classroom.udacity.com/images/wrong-illustration-0df77.svg) no-repeat center top";  /*أضفت هذه السطر*/

          			modaElements.style.color = "#f65d44";  /*أضفت هذه السطر*/
modaElements.textContent= "Try Again!";
          			overlay.style.display = "block"; /*اضفت هذا السطر*/
        }

 });
 window.addEventListener('click',function(){

 	if (event.target == overlay) {

 		overlay.style.display = "none";
li[correctAnswer].classList.remove("correct");
 	}

 });
    /*  var person = prompt("Please enter your name");
       if (person != null) {
           document.getElementById("welcome").innerHTML = "Hello " + person + "! How are you today?";
/*var color = prompt("please enter your favorite color")
if (color!=null){
  document.body.style.backgroundColor=color;
}*/
