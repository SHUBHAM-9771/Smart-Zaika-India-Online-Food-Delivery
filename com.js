//     document.addEventListener("DOMContentLoaded", () => {
//         const data = JSON.parse(localStorage.getItem("AddressDetails"));

// if(data){
//     document.getElementById("c-fullname").textContent = data.FullName;
//     document.getElementById("c-mobilenumber").textContent = data.PhoneNumber;
//     document.getElementById("c-state").textContent = data.StateSelect;
//     document.getElementById("c-city").textContent = data.CitySelect;
//     document.getElementById("c-street").textContent = data.Street;
//     document.getElementById("c-pincode").textContent = data.Pincode;

// }



// //Get cart Data 

// const CartData = JSON.parse(localStorage.getItem("cart")) || [];

// //Get container where items will show
// const container = document.getElementById("cart-summary-list");
// let total = 0;

// // container.innerHTML = ""; // Clear previous UI if any

// if(CartData && CartData.length > 0){
//     CartData.forEach(item => {
//         const div = document.createElement("div");
//         div.classList.add("cart-item");

//         div.innerHTML = `
//             <div class="t1">
//                 <img src="${item.img}"</img>
//                  <p>${item.name}</p>
//                  <p><span>X</span>${item.quantity}</p>
//             </div>
//             <div class="price">
//                 <p>${item.price}</p>
//             </div>
//             `;


//             const priceValue = Number(item.price.replace(/[^0-9]/g, ""));
//             total += item.quantity * priceValue;
//       container.appendChild(div);  
//     })
//     document.getElementById("total-price").textContent = "$"+ total;

//     localStorage.setItem("totalAmount", JSON.stringify(total));

// }
//     });


//  document.addEventListener("DOMContentLoaded", () => {

//     const normalBtn = document.getElementById("delivery-btn-normal");
//     const preorderBtn = document.getElementById("delivery-btn-preorder");
//     const PreorderDate = document.getElementById("preorder-date");
//     const PreorderTime = document.getElementById("preorder-time");
//     const proceedBtn = document.getElementById("proceed-paymen-btn");

//     let selectedDelivery = null; // track Which button is selected

//     function activateButton(selectedBtn){

//          // Pehle dono buttons se class hatao
//         normalBtn.classList.remove("active-delivery");
//         preorderBtn.classList.remove("active-delivery");

//         // Selected button me class add karo
//         selectedBtn.classList.add("active-delivery");

//         if(selectedBtn === preorderBtn){
//          PreorderDate.disabled = false;
//          PreorderTime.disabled = false; 
//          selectedDelivery = "Pre-Order";
//         } else {
//             PreorderDate.disabled =true;
//             PreorderTime.disabled = true;

//             // optional: clear date/time when switching back
//             PreorderDate.value = "";
//             PreorderTime.value = "";
//             selectedDelivery = "Normal";

//         }
//     }

//     //Button click 
//     normalBtn.addEventListener("click", () => {
//         activateButton(normalBtn); 
//     });

//     preorderBtn.addEventListener("click", () => {
//         activateButton(preorderBtn)
//     });


//     proceedBtn.addEventListener("click", () => {
           
//         // Proceed button click
//            if (!selectedDelivery) {
//             alert("Please select a delivery option first && Second.");
//             return;
//         } 

//          let deliveryInfo;

//          if(selectedDelivery === "Normal") {
//             deliveryInfo = {type: "Instant Delivery"};
//          } else {
//             if(!PreorderDate.value || !PreorderTime.value){
//                 alert("please select Pre-order Date & Time.");
//                 return;
//             }
//             deliveryInfo = {
//                 type : "Pre-Order Delivery",
//                 date : PreorderDate.value,
//                 time : PreorderTime.value
//             };
//          }
//          localStorage.setItem("DeliveryDetails", JSON.stringify(deliveryInfo));
         
//         alert("Delivery details saved! Proceed to payment section." );

//         document.querySelector(".confirmation-section").style.display = "none";
//         document.querySelector(".Payment-section").style.display = "block";


//         // Smooth Scroll to Cart
//         document.querySelector(".confirmation-section").scrollIntoView({
//         behavior: "smooth"
//         });

//     }); 
//  });



// function ComformBack(){
//     document.querySelector(".confirmation-section").style.display = "none";
//     document.querySelector(".address-section").style.display = "flex";
  
//     document.querySelector(".confirmation-section").scrollIntoView({
//     behavior: "smooth"
//     })
// }

// // ===================== LOAD DATA ON PAGE REFRESH =====================
// // ===================== UPDATE CONFIRMATION PAGE =====================
// // function updateConfirmationPage(data) {
// //     document.getElementById("c-fullname").textContent = data.FullName;
// //     document.getElementById("c-mobilenumber").textContent = data.PhoneNumber;
// //     document.getElementById("c-state").textContent = data.StateSelect;
// //     document.getElementById("c-city").textContent = data.CitySelect;
// //     document.getElementById("c-street").textContent = data.Street;
// //     document.getElementById("c-pincode").textContent = data.Pincode;
// // }



// // // ===================== MAIN DOMContentLoaded =====================
// // document.addEventListener("DOMContentLoaded", () => {

// //     // -------- LOAD ADDRESS ON CONFIRMATION PAGE --------
// //     const data = JSON.parse(localStorage.getItem("AddressDetails"));
// //     if(data){
// //         updateConfirmationPage(data);
// //     }

// //     // -------- LOAD CART DATA --------
// //     const CartData = JSON.parse(localStorage.getItem("cart")) || [];
// //     const container = document.getElementById("cart-summary-list");
// //     let total = 0;

// //     if (CartData.length > 0) {
// //         CartData.forEach(item => {
// //             const div = document.createElement("div");
// //             div.classList.add("cart-item");

// //             div.innerHTML = `
// //                 <div class="t1">
// //                     <img src="${item.img}">
// //                     <p>${item.name}</p>
// //                     <p><span>X</span>${item.quantity}</p>
// //                 </div>
// //                 <div class="price">
// //                     <p>${item.price}</p>
// //                 </div>
// //             `;

// //             const priceValue = Number(item.price.replace(/[^0-9]/g, ""));
// //             total += item.quantity * priceValue;

// //             container.appendChild(div);
// //         });

// //         document.getElementById("total-price").textContent = "$" + total;
// //         localStorage.setItem("totalAmount", JSON.stringify(total));
// //     }


// //     // ===================== DELIVERY OPTION HANDLING =====================
// //     const normalBtn = document.getElementById("delivery-btn-normal");
// //     const preorderBtn = document.getElementById("delivery-btn-preorder");
// //     const PreorderDate = document.getElementById("preorder-date");
// //     const PreorderTime = document.getElementById("preorder-time");
// //     const proceedBtn = document.getElementById("proceed-paymen-btn");

// //     let selectedDelivery = null;

// //     function activateButton(selectedBtn){
// //         normalBtn.classList.remove("active-delivery");
// //         preorderBtn.classList.remove("active-delivery");

// //         selectedBtn.classList.add("active-delivery");

// //         if (selectedBtn === preorderBtn) {
// //             PreorderDate.disabled = false;
// //             PreorderTime.disabled = false;
// //             selectedDelivery = "Pre-Order";
// //         } else {
// //             PreorderDate.disabled = true;
// //             PreorderTime.disabled = true;
// //             PreorderDate.value = "";
// //             PreorderTime.value = "";
// //             selectedDelivery = "Normal";
// //         }
// //     }

// //     normalBtn.addEventListener("click", () => activateButton(normalBtn));
// //     preorderBtn.addEventListener("click", () => activateButton(preorderBtn));


// //     proceedBtn.addEventListener("click", () => {

// //         if (!selectedDelivery) {
// //             alert("Please select a delivery option first.");
// //             return;
// //         }

// //         let deliveryInfo;

// //         if (selectedDelivery === "Normal") {
// //             deliveryInfo = { type: "Instant Delivery" };
// //         } else {
// //             if (!PreorderDate.value || !PreorderTime.value) {
// //                 alert("Please select Pre-order Date & Time.");
// //                 return;
// //             }

// //             deliveryInfo = {
// //                 type : "Pre-Order Delivery",
// //                 date : PreorderDate.value,
// //                 time : PreorderTime.value
// //             };
// //         }

// //         localStorage.setItem("DeliveryDetails", JSON.stringify(deliveryInfo));

// //         // Go to Payment Section
// //         document.querySelector(".confirmation-section").style.display = "none";
// //         document.querySelector(".Payment-section").style.display = "flex";

// //         alert("Delivery details saved! Proceed to payment.");
// //     });

// // }); // END DOMContentLoaded



// // // ===================== SAVE ADDRESS + MOVE TO CONFIRM PAGE =====================
// // function SaveAddressAndNext() {

// //     const data = {
// //         FullName: document.getElementById("fullname").value,
// //         PhoneNumber: document.getElementById("phonenumber").value,
// //         StateSelect: document.getElementById("state").value,
// //         CitySelect: document.getElementById("city").value,
// //         Street: document.getElementById("street").value,
// //         Pincode: document.getElementById("pincode").value
// //     };

// //     // SAVE IN LOCALSTORAGE
// //     localStorage.setItem("AddressDetails", JSON.stringify(data));

// //     // INSTANT UPDATE (NO REFRESH NEEDED)
// //     updateConfirmationPage(data);

// //     // OPEN CONFIRMATION PAGE
// //     document.querySelector(".address-section").style.display = "none";
// //     document.querySelector(".confirmation-section").style.display = "flex";
// // }



// // // ===================== CONFIRMATION BACK BUTTON =====================
// // function ComformBack(){
// //     document.querySelector(".confirmation-section").style.display = "none";
// //     document.querySelector(".address-section").style.display = "flex";
// // }

function loadConfirmationData() {

    // ----- Address Details Load -----
    const data = JSON.parse(localStorage.getItem("AddressDetails"));

    if(data){
        document.getElementById("c-fullname").textContent = data.FullName;
        document.getElementById("c-mobilenumber").textContent = data.PhoneNumber;
        document.getElementById("c-state").textContent = data.StateSelect;
        document.getElementById("c-city").textContent = data.CitySelect;
        document.getElementById("c-street").textContent = data.Street;
        document.getElementById("c-pincode").textContent = data.Pincode;
    }

    // ----- Cart Details Load -----
    const CartData = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-summary-list");
    container.innerHTML = ""; // old UI clear

    let total = 0;

    CartData.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <div class="t1">
                <img src="${item.img}" />
                <p>${item.name}</p>
                <p><span>X</span>${item.quantity}</p>
            </div>
            <div class="price">
                <p>${item.price}</p>
            </div>
        `;

        const priceValue = Number(item.price.replace(/[^0-9]/g, ""));
        total += item.quantity * priceValue;

        container.appendChild(div);
    });

    document.getElementById("total-price").textContent = "₹ " + total;
    localStorage.setItem("totalAmount", JSON.stringify(total));

    // ===================== DELIVERY OPTION HANDLING =====================
    const normalBtn = document.getElementById("delivery-btn-normal");
    const preorderBtn = document.getElementById("delivery-btn-preorder");
    const PreorderDate = document.getElementById("preorder-date");
    const PreorderTime = document.getElementById("preorder-time");
    const proceedBtn = document.getElementById("proceed-paymen-btn");

    let selectedDelivery = null;

    function activateButton(selectedBtn){
        normalBtn.classList.remove("active-delivery");
        preorderBtn.classList.remove("active-delivery");

        selectedBtn.classList.add("active-delivery");

        if (selectedBtn === preorderBtn) {
            PreorderDate.disabled = false;
            PreorderTime.disabled = false;
            selectedDelivery = "Pre-Order";
        } else {
            PreorderDate.disabled = true;
            PreorderTime.disabled = true;
            PreorderDate.value = "";
            PreorderTime.value = "";
            selectedDelivery = "Normal";
        }
    }

    normalBtn.addEventListener("click", () => activateButton(normalBtn));
    preorderBtn.addEventListener("click", () => activateButton(preorderBtn));


    proceedBtn.addEventListener("click", () => {

        if (!selectedDelivery) {
            alert("Please select a delivery option first.");
            return;
        }

        let deliveryInfo;

        if (selectedDelivery === "Normal") {
            deliveryInfo = { type: "Instant Delivery" };
        } else {
            if (!PreorderDate.value || !PreorderTime.value) {
                alert("Please select Pre-order Date & Time.");
                return;
            }

            deliveryInfo = {
                type : "Pre-Order Delivery",
                date : PreorderDate.value,
                time : PreorderTime.value
            };
        }

        localStorage.setItem("DeliveryDetails", JSON.stringify(deliveryInfo));

        // Go to Payment Section
        document.querySelector(".confirmation-section").style.display = "none";
        document.querySelector(".Payment-section").style.display = "flex";

        updateAmountUI();

        alert("Delivery details saved! Proceed to payment.");
    });

    
}


function ComformBack(){
    document.querySelector(".confirmation-section").style.display = "none";
    document.querySelector(".address-section").style.display = "flex";
  
    document.querySelector(".confirmation-section").scrollIntoView({
    behavior: "smooth"
    })
}
