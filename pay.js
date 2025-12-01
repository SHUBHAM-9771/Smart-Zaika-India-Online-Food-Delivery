
window.addEventListener("DOMContentLoaded", function () {
    let totalAmount = Number(localStorage.getItem("totalAmount")) || 0;
    document.getElementById("order-amount").innerText =  totalAmount;
});

    function paysection(){

    const emiBox = document.getElementById("emiBox");
    const emiRadio = document.getElementById("EMI");
    const NetRadio = document.getElementById("Net");
    const CashRadio = document.getElementById("Cash");
    const cardRadio = document.getElementById("Card");

    const cardNumber = document.getElementById("Pamentdetails");
    const month = document.getElementById("monthyear");
    const CV = document.getElementById("cvv");
    const cardName = document.getElementById("cardname");

    //Disable card input function
    const disableCard = () => {
        cardNumber.disabled = true;
        month.disabled = true;
        CV.disabled = true;
        cardName.disabled = true;
        document.querySelectorAll(".error-msg").forEach(i => i.textContent = "");
         // RESET input border back to normal
        [cardNumber, month, CV, cardName].forEach(input => {
        input.style.border = "1px solid #ccc";
        });

    };

    // Enable card inputs function
    const enableCard = () => {
        cardNumber.disabled = false;
        month.disabled = false;
        CV.disabled = false;
        cardName.disabled = false;
    };

    // EMI Selected

        if(emiBox.checked && totalAmount >=2000){
            emiBox.style.display = "block";
            disableCard();
            return;
        } else {
            emiBox.style.display = "none";
            enableCard();
        }
    // if (emiRadio.checked) {
    //     if( totalAmount >= 2000)
    //         {
    //           emiBox.style.display = "block";
    //           disableCard();
    //            return;
    //         }
    // }

    // Card Selected
    if (cardRadio.checked) {
        emiBox.style.display = "none";
        enableCard();
        return;
    }

    // Net Banking
    if (NetRadio.checked) {
        emiBox.style.display = "none";
        disableCard();
        return;
    }

    // Cash on Delivery
    if (CashRadio.checked) {
        emiBox.style.display = "none";
        disableCard();
        return;
    }

}

    function Cardselect(){
        // EMI select -> EMI validation
        if(document.getElementById("EMI").checked) {
            return calculateEMI();
        }

        // Card select ->card validation 
        if(document.getElementById("Card").checked) {
            return validateCard();
        }

        // Netbanking/cash -> No validation
        return true ;
    } 

const form = document.getElementById("payment-form");

function validateCard() {

       // Stop validation if Card is NOT selected
    if (!document.getElementById("Card").checked) {
        return true;  
    }
    let valid = true;

    const cardNumber = document.getElementById("Pamentdetails");
    const month = document.getElementById("monthyear");
    const CV = document.getElementById("cvv");
    const cardName = document.getElementById("cardname");

    // Clear old errors
    document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");

    // Card Number Validation
    if (cardNumber.value.trim() === "") {
        showError(cardNumber, "Card Number is required");
        valid = false;
    } else {
        showSuccess(cardNumber);
    }

    // Month Validation
    if (month.value.trim() === "") {
        showError(month, "Month and Year is required");
        valid = false;
    } else {
        showSuccess(month);
    }

    // CVV Validation
    if (CV.value.trim() === "") {
        showError(CV, "CVV is required");
        valid = false;
    } else {
        showSuccess(CV);
    }

    // Card Name Validation
    if (cardName.value.trim() === "") {
        showError(cardName, "Name on Card is required");
        valid = false;
    } else {
        showSuccess(cardName);
    }

    return valid;
}


function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    // const errorSpan = input.previousElementSibling;
    // const errorSpan = input.parentElement.querySelector(".error-msg");
    errorSpan.textContent = message;
    input.style.border = "2px solid red";
}

function showSuccess(input) {
    const errorSpan = input.nextElementSibling;
    // const errorSpan = input.previousElementSibling;
    // const errorSpan = input.parentElement.querySelector(".error-msg");
    errorSpan.textContent = "";
    input.style.border = "1px solid #ccc";
}


form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!Cardselect()) return; // Stop if validation fails

    if (document.getElementById("EMI").checked) alert("EMI Payment Submitted Successfully!");
    else if (document.getElementById("Card").checked) alert("Card Payment Submitted Successfully!");
    else if (document.getElementById("Net").checked) alert("Net Banking Payment Submitted Successfully!");
    else if (document.getElementById("Cash").checked) alert("Cash on Delivery Selected!");


});

// Calculate EMI section 

 let totalAmount  = Number(localStorage.getItem("totalAmount")) || 0 ;

 const bank = document.getElementById("EMIBank")
 const duration = document.getElementById("EMIDuration");

 const emiText = document.getElementById("monthlyemi");
 const totalPaytext = document.getElementById("totalpayable");
 const interestedText = document.getElementById("totalinterest");

 function calculateEMI(){

    let selectBank = bank.value;
    let months = Number(duration.value);

    //Validation 

    if(!selectBank){
        bank.nextElementSibling.innerText  = "Please select a bank!";
        return;
    } else {
        bank.nextElementSibling.innerText = "";
    } 

     if (!months) {
        duration.nextElementSibling.innerText = "Please select duration!";
        return;
    } else {
        duration.nextElementSibling.innerText = "";
    }

    //  EMI Formula with 2% interest per month 
    let interest = (totalAmount * 0.02) * months;
    let totalPayable = totalAmount + interest;
    let monthlyEMI = totalPayable / months;

    // Show Data 
    emiText.innerText = `$ ${monthlyEMI.toFixed(2)}`;
    totalPaytext.innerText = `$ ${totalPayable.toFixed(2)}`;
    interestedText.innerText = `$ ${interest.toFixed(2)}`;

    // Store in Everything in local storage 

    let emiData = {
        bank : selectBank,
        duration : months,
        totalAmount : totalAmount,
        interest : interest.toFixed(2),
        totalPayable : totalPayable.toFixed(2),
        monthlyEMI : monthlyEMI.toFixed(2)
    };
    localStorage.setItem("EMI_Details", JSON.stringify(emiData))
    return true;
}

// Save selected payment mode 

const paymentRadios = document.querySelectorAll('input[name="method"]');

paymentRadios.forEach(radio => {
    radio.addEventListener("change", function() {

        let selectedMode = this.value; //EMI , Card , Net Cash

        // Store in localStore
        localStorage.setItem("PAYMENT_MODE", selectedMode);
    });
});

 // Trigger calculation on selection change
bank.addEventListener("change", calculateEMI);
duration.addEventListener("change", calculateEMI);

function paymentBack(){
    document.querySelector(".Payment-section").style.display = "none";
    document.querySelector(".confirmation-section").style.display = "flex";
    
    // document.querySelector(".hero").style.display = "flex";
    // document.querySelector(".menu").style.display = "flex";
    // document.querySelector("#menu-section").style.display = "flex";

  
    document.querySelector(".Payment-section").scrollIntoView({
    behavior: "smooth"
    })
}




