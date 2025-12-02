          const buttons = document.getElementsByClassName('dark')
        function Change(){
            const isDark = document.body.classList.toggle('dark-mode')

            if(isDark){
                buttons[0].textContent = "☀️" //dark mode icon
            }
            else {
                buttons[0].textContent = "🌙"; // light mode icon
            }
        } 
 
 // ===== Open/Close Sign In Popup =====
          function openPopup() {
          document.getElementById("signup-popup").style.display = "flex"; // Show Sign In popup
          }

          function closePopup() {
          document.getElementById("signup-popup").style.display = "none"; // Hide Sign In popup
          }

          // ===== Open/Close Register Popup ====

          function switchToLogin(){
            closePopup();  // Close Sign In Popup
            document.getElementById("registation-popup").style.display = "flex"; // Open Registation popup
          }

          function closeRegister() {
            document.getElementById("registation-popup").style.display = "none"; // Close Registation popup
          }


          // ===== Switch Between Sign In and Registation popup ====== 
          function switchToLogin1()
          {
                  closeRegister(); // Close Registation popup
                  openPopup();     // Open Sign In popup
          }


          // ===== Sign In & Localstorage Check =====


          function showAlert(){
          let Signemail = document.getElementById("logingemail").value.trim().toLowerCase();
          let Signpassword = document.getElementById("password").value.trim();

          if(!Signemail || !Signpassword ){
            alert("Please fill all Fields");
            return ; // stop here 
          }

          // Get registered users from LocalStorage 
          let users = JSON.parse(localStorage.getItem("users")) || [];

          // find user with matching email and password
          let matchedUser = users.find(user => user.email === Signemail && user.password === Signpassword);
        
          if(!matchedUser){
            alert("incorrect email or password ❌")
          } else {
            alert(`Welcome ${matchedUser.firstname}! You are signed successfull.`);


            localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
            localStorage.setItem("isLoggedIn", "true");

           
            // Get the first letter and convert to uppercase
            const firstLetter = matchedUser.email.charAt(0).toUpperCase();
           
            // Replace "Sign in " button text with the first letter
            const signbtn = document.querySelector(".log");
            signbtn.textContent = firstLetter;
            signbtn.classList.add("user-icon");

            document.getElementById("singin-form").reset();
            

          const banner = document.getElementById("bann");

          //  ===== Show banner after succesful login =====

          setTimeout(() => {
              banner.style.display = "flex";
              banner.style.marginTop = "20px";

               // Keep it visible for another 2 seconds, then hide it
              setTimeout(() => {
                banner.style.display = "none";
              }, 10000);
          }, 2000);

          //Assign dropdown toggle ONCE and Remove the openPopup() call after loging
          signbtn.onclick = toggleDropdown;
            closePopup();
          }
        }




      const userDropdown = document.getElementById("userDropdown");

      function toggleDropdown(){
        userDropdown.style.display = (userDropdown.style.display === "block") ? "none" : "block"; 
      }

      window.addEventListener("click", function(event) {
        const signbtn = document.querySelector(".log");
            if (!userDropdown.contains(event.target) && !signbtn.contains(event.target)) {
            userDropdown.style.display = "none";
          } 
      });


      

      window.onload = function () {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (loggedUser && isLoggedIn === "true") {
    const firstLetter = loggedUser.email.charAt(0).toUpperCase();
    const signbtn = document.querySelector(".log");

    signbtn.textContent = firstLetter;
    signbtn.classList.add("user-icon");
    signbtn.onclick = toggleDropdown;  // Signin popup nahi khulega
  }
};

  
    // ===== Form Validation =====

    let form = document.getElementById("loginForm");
    let firstname = document.getElementById("firstName");
    let email = document.getElementById("email");
    let re_password = document.getElementById("re_password");
    let age = document.getElementById("age")

    form.addEventListener("submit", function(event) {
      event.preventDefault();
          if (validateForm()) {   // agar sab valid hai
        registerUser(event);  // tabhi register function call karo
      }
    });

    function validateForm(){
      let valid = true;

      document.querySelectorAll(".error-msg").forEach(e => e.textContent ="" );

      //Name Validation
      let firstChar = firstname.value.trim().charAt(0);
      if(firstname.value.trim() === ""){
        showError(firstname, "Name is required");
        valid = false;
      } else if (firstChar !== firstChar.toUpperCase()){
        showError(firstname, "first letter must be uppercase")
        valid = false;
      } else {
        showSuccess(firstname)
      }
 

    // Email validation 
    // Get existing users from Localstorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let emailValue = email.value.trim().toLowerCase();

    // Chect if email already exists
    let existingUser = users.find(user => user.email === emailValue);
    if(emailValue === ""){
        showError(email, "Email is required");
        valid = false;
    } else if (existingUser){
      showError(email, "This Email is already registered.")
      valid = false;
    } else {
      showSuccess(email);
    }

    // Password validation 
    if(re_password.value.trim() === ""){
      showError(re_password, "Password is required");
        valid = false;
      } else if (re_password.value.length < 6) {
        showError(re_password, "Password must be at least 6 characters")
        valid = false;
      } else {
        showSuccess(re_password);
      }        

      // Age validation 

    if(age.value.trim() === ""){
      showError(age, "Age is required");
      valid = false ; 
      } else if (Number(age.value) < 18 ){
        showError(age , "age must be at least greater than 18")
        valid = false;
      } else {
        showSuccess(age);
      }


      if(valid){
        document.getElementById("message").textContent = "Registration successful ✅";
        setTimeout ( () => {
          registerUser();
        }, 2000)
        // form.reset();
      }
    }

    // ===== Register User and Store Data in LocalStorage =====
      
        function registerUser(){
          
        // Create user object
        let newUser = {
          firstname: firstname.value.trim(),
          email: email.value.trim().toLowerCase(),
          password: re_password.value.trim(),
          age: age.value
        };

        //Get existing users form Localstorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // add new user
        users.push(newUser);

        // Store Updated list in LocalStorage
        localStorage.setItem("users", JSON.stringify(users));
        alert("✅ Registration successful!");

        // Close popup or Switch to  sign in
        form.reset();
        document.getElementById("message").textContent = "";
        closeRegister()
        openPopup();
    }


    // Show Error
      function showError(input, message) {
      const errorSpan = input.previousElementSibling; // Get <span> above input
      errorSpan.textContent = message; // Display error message 
      input.style.border = "2px solid red"; // Highlight input red
    }

      // Show Success
      function showSuccess(input) {
      const errorSpan = input.previousElementSibling; // Get <span> above input
      errorSpan.textContent = ""; // Clear message 
      input.style.border = "none"; // Remove border highlight
    }


   // LogOUt  User 

    function logoutUser(){
      
      if(confirm("Are you sure you want to logout?")){
          localStorage.removeItem("AddressDetails");
          localStorage.removeItem("DeliveryDetails");
          localStorage.removeItem("EMI_Details");
          localStorage.removeItem("PAYMENT_MODE");
          localStorage.removeItem("cart");
          localStorage.removeItem("totalAmount");
      
        // Show logout message
      const message = document.querySelector("#logmessage");
      message.classList.add("mess")
      message.textContent = "LoggedOut"

        // Reset the login button
         const signbtn = document.querySelector(".log")
         signbtn.textContent = "Sign in";
         signbtn.classList.remove("user-icon");
         signbtn.onclick = openPopup; // return to sign-in
         userDropdown.style.display = "none";
         window.location.href = "index.html";   // jaha jaana ho


        // Remove message after 1 second
        setTimeout( ()=> {
           message.style.display = "none"
        }, 1000);

        }

      }
      
      

// --------------------------------------------- Live Clock Function -------------------------------------------------------
function showTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = "AM";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time = `${hours}:${minutes}:${seconds} ${session}`;
  document.getElementById("clock").textContent = `Current Time: ${time}`;
}

// --- Offer Countdown Function (1 hour) ---
let endTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour = 60min * 60sec * 1000ms

function updateOfferTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance <= 0) {
    document.getElementById("offer-timer").textContent = "⏰ Offer Expired!";
    clearInterval(timerInterval);
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("offer-timer").textContent =
    `Offer ends in: ${hours}h ${minutes}m ${seconds}s`;
}

// Run both functions every second
setInterval(showTime, 1000);
setInterval(updateOfferTimer, 1000);

// Call once immediately
showTime();
updateOfferTimer();


// offer function 

function change(){
  // Image Element 
  const foodImage = document.querySelector("#offer-image img").getAttribute("src");

  // price Element 
  let PriceValue = document.getElementById("totalprice").textContent;

  // Remove Rupes symbol and convert to number

  PriceValue = parseInt(PriceValue.replace(/[^0-9]/g, ""));

  // Calculate Discount Price
  const Discountprice = PriceValue/2;
  const OfferData = {
    'Image' : foodImage,
    "foodName" : "Burgar",
    "OriginalPrice" : PriceValue,
    'DiscountPrice' : Discountprice
  }

  localStorage.setItem("OfferDetails",JSON.stringify(OfferData));

  alert("Data saved SuccessFully in localstorage ");
}


 
