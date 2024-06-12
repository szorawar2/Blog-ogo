

document.addEventListener("DOMContentLoaded", () => {
  const heading1 = document.getElementById("heading1");
  const heading2 = document.getElementById("heading2");

  // Fade in the first heading
  heading1.classList.add("animate__fadeIn");
  
  // When the fade in animation ends, start fade out
  heading1.addEventListener('animationend', () => {
    if (heading1.classList.contains("animate__fadeIn")) {
      heading1.classList.remove("animate__fadeIn");
      heading1.classList.add("animate__fadeOut");

      // When fade out ends, show the second heading
      heading1.addEventListener('animationend', () => {
        heading1.style.display = "none";
        heading2.style.display = "block";
        heading2.classList.add("animate__fadeIn");
      });
    }
  });



  document.getElementById('signUpButton').addEventListener('click', function() {
  document.getElementById('signUpForm').style.display = 'block';
  document.getElementById('signUpButton').style.display = 'none';
  document.getElementById('logInButton').style.display = 'block';
  document.getElementById('logInForm').style.display = 'none';
  });

  document.getElementById('logInButton').addEventListener('click', function() {
  document.getElementById('logInForm').style.display = 'block';
  document.getElementById('logInButton').style.display = 'none';
  document.getElementById('signUpButton').style.display = 'block';
  document.getElementById('signUpForm').style.display = 'none';
  });

});

