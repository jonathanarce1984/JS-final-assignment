/* Jonathan Arce
 * My portfolio Javascript
 */

// function to open Contact Form
function openContactForm() {
  document.getElementById("myForm").style.display = "block";
}

//function to close contact form
function closeContactForm() {
  document.getElementById("myForm").style.display = "none";
}

// displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// changes the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// changes the slide when the dots are clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener(
  "click",
  function(event) {
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (
      event.target.matches(".cancel") ||
      (!event.target.closest(".form-popup") &&
        !event.target.closest(".Pop_Up_Button") &&
        !event.target.closest(".contact"))
    ) {
      closeContactForm();
    }
  },
  false
);

//validate contact form
function validate() {
  console.log("validate");

  let nameValid = checkNameValidity();
  let emailValid = checkEmailValidity();
  let phoneValid = checkPhoneValidity();
  let message = checkMessageIsNotEmpty();

  if (!nameValid || !emailValid || !phoneValid || !message){
      return false;
  }
  return true;
}

//function to check if name is empty
function checkNameValidity() {
  if (document.form.name.value == "") {
    document.getElementById("errorName").innerHTML = "Name cannot be empty";
    document.form.name.focus();
    return false;
  }
  document.getElementById("errorName").innerHTML = "";
  return true;
}

//function to check if email is valid
function checkEmailValidity() {
  var emailID = document.form.email.value;
  //get index position of "@"
  atPosn = emailID.indexOf("@");
  //get index position of "."
  dotPosn = emailID.lastIndexOf(".");
  //check if email is empty
  if (emailID == "") {
    document.getElementById("errorEmail").innerHTML = "E-mail cannot be empty";
    document.form.email.focus();
    return false;
  }
  //check if the index position of @ is less than 1 or if the index position of "." less the position of @ is less than 2
  //Example: a@b.com. "@"" is at index pos 1 and "." is at index pos 3. Then this email add is valid.
  if (atPosn < 1 || dotPosn - atPosn < 2) {
    document.getElementById("errorEmail").innerHTML = "Please enter valid email ID";
    document.form.email.focus();
    return false;
  }
  document.getElementById("errorEmail").innerHTML = "";
  return true;
}

//function to check if name is empty
function checkPhoneValidity() {
  if (
    document.form.phone.value == "" ||
    isNaN(document.form.phone.value) ||
    document.form.phone.value.length != 10
  ) {
    document.getElementById("errorPhone").innerHTML =
      "Please enter a valid 10-digit phone number";
    document.form.phone.focus();
    return false;
  }
  document.getElementById("errorPhone").innerHTML =
      "";
  return true;
}

//check if message is empty
function checkMessageIsNotEmpty(){
    if (document.form.message.value == "") {
        document.getElementById("errorMessage").innerHTML = "Message cannot be empty";
        document.form.message.focus();
        return false;
      }
      document.getElementById("errorMessage").innerHTML = "";
    return true;
}


document.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'name':
        checkNameValidity();
            break;
        case 'email':
        checkEmailValidity();
            break;
        case 'phone':
        checkPhoneValidity();
            break;
        case 'message':
        checkMessageIsNotEmpty();
            break;
    }
});