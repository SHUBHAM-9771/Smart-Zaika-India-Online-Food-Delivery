


// window.onload = 
function updateOrders(){

      // ================= CART ITEMS =====================
    
      let cartItem =JSON.parse(localStorage.getItem("cart"));


    if(!cartItem || cartItem.length === 0) return ;

    let orderBox = document.getElementById("order-summ");

    orderBox.innerHTML = ""; //clear HTML
    
    cartItem.forEach(item => {
       orderBox.innerHTML +=  `<div id="item-rows">
          
          <div>
            <img src="${item.img}" alt="${item.name}" />
          </div>

          <div id="item-details">
            <p id="item-name">${item.name}</p>
            <p id="item-quality">Qty : ${item.quantity}</p>
          </div>

          <div class="item-price">
            <p id="item-price"> ${item.price}</p>
          </div>
      </div>`;
        
    });

        // ================= ADDRESS DETAILS =====================

    let AddDetails = JSON.parse(localStorage.getItem("AddressDetails"));
    if(!AddDetails) return;

    let AddressBox = document.getElementById("address-details1");

    AddressBox.innerHTML = `
         <div class="address-row">
            <span id="name">${AddDetails.FullName}</span>
          </div>

          <div class="address-row">
            <span id="PhoneNumber">${AddDetails.PhoneNumber}</span>          
          </div>

          <div class="address-row">
            <span id="Landnark">${AddDetails.Street}</span>
            <span id="Pincode">${AddDetails.Pincode}</span>           
          </div>`;

        // ================= DELIVERY DETAILS =====================
      let OrderDetails = JSON.parse(localStorage.getItem("DeliveryDetails"));
      if(!OrderDetails) return ;

    // ================= PAYMENT METHOD =====================
    let Orderoptions = localStorage.getItem("PAYMENT_MODE");
    if(!Orderoptions) return ;


    // ================= EMI DETAILS (Load ONLY if EMI selected) =====================
    let EMIDetails = JSON.parse(localStorage.getItem("EMI_Details"));
    // if(!EMIDetails) return ;

    let totalAmounts = Number(localStorage.getItem("totalAmount")) || 0;
    let deliveryCharge = 20; // You used "FREE", so 0 is fine

    let finalAmount = totalAmounts + deliveryCharge;

    // If EMI is selected → overwrite finalAmount
    if (Orderoptions === "EMI" && EMIDetails) {
        finalAmount = 20  + Number(EMIDetails.totalPayable);
    }

        // =================== RENDER SUMMARY =====================
      // let OrderType = document.getElementById("order-totals1");
      // OrderType.innerHTML = `

      //       if(Orderoptions.EMI  && Orderoptions.NET Banking  && Orderoptions.Cash on delivery ){
      //          <div class="total-rows">
      //         <span>Items Total :</span>
      //         <span id="itemTotal">${totalAmounts}</span>           
      //       </div>
      //       } else {
      //          <div class="total-rows">
      //         <span>Items Total :</span>
      //         <span id="itemTotal">${EMIDetails.totalAmount}</span>           
      //       </div>
      //       }
      //       // <div class="total-rows">
      //       //   <span>Items Total :</span>
      //       //   <span id="itemTotal">${EMIDetails.totalAmount}</span>           
      //       // </div>
            
      //     <div class="total-rows">
      //         <span>Deliver Charge :</span>
      //         <span id="deliveryCharge"> ₹ 20</span>
      //       </div>
      //     <div class="total-rows">
      //         <span>DeliveryTypes :</span>
      //         <span id="DeliveryDetails">${OrderDetails.type}</span>
      //     </div>
          
      //     <div class="total-rows">
      //         <span>Payment Method</span>
      //         <span id="paymentMethod">${Orderoptions}</span>
      //       </div>
            
      //       <div class="emi-box" id="emiBox" style= "display : none">
      //       <div class="total-rows">
      //           <span>Monthly EMI:</span>
      //           <span id="monthlyEmi">${EMIDetails.monthlyEMI}</span>
      //       </div>

      //       <div class="total-rows">
      //           <span>EMI Tenure:</span>
      //           <span id="emiMonths">${EMIDetails.duration} Months</span>
      //       </div>
      //   </div>
        
      //   <div class="total-rows total-finals">
      //         <span>Total Payable</span>
      //         <span id="totalPayable">${finalAmount}</span>
      //   </div>`;
      let OrderType = document.getElementById("order-totals1");

    let html = "";

    // 🔥 IF EMI NOT SELECTED → Normal Price
    if (Orderoptions !== "EMI") {
        html += `
        <div class="total-rows">
            <span>Items Total :</span>
            <span id="itemTotal">₹ ${totalAmounts}</span>
        </div>`;
    }

    // 🔥 IF EMI SELECTED → EMI Total
    if (Orderoptions === "EMI" && EMIDetails) {
        html += `
        <div class="total-rows">
            <span>Items Total :</span>
            <span id="itemTotal">₹ ${EMIDetails.totalAmount}</span>
        </div>`;
    }

    html += `
        <div class="total-rows">
            <span>Delivery Charge :</span>
            <span id="deliveryCharge">₹ 20</span>
        </div>

        <div class="total-rows">
            <span>Delivery Type :</span>
            <span id="DeliveryDetails">${OrderDetails.type}</span>
        </div>

        <div class="total-rows">
            <span>Payment Method :</span>
            <span id="paymentMethod">${Orderoptions}</span>
        </div>

        <div class="emi-box" id="emiBox" style="display:none;">
            <div class="total-rows">
                <span>Monthly EMI:</span>
                <span id="monthlyEmi">${EMIDetails ? EMIDetails.monthlyEMI : ""}</span>
            </div>
            <div class="total-rows">
                <span>EMI Tenure:</span>
                <span id="emiMonths">${EMIDetails ? EMIDetails.duration : ""} Months</span>
            </div>
        </div>

        <div class="total-rows total-finals">
            <span>Total Payable</span>
            <span id="totalPayable">₹ ${finalAmount}</span>
        </div>
    `;

    OrderType.innerHTML = html;




  // Show EMI details only if chosen
   let  emiBox = document.getElementById("emiBox");
   if(Orderoptions === "EMI")
   emiBox.style.display = "block";

  //  localStorage.clear();
}

function OrderUser(){
    const popup = document.getElementById("order-summary1");
    const box = document.getElementById("order-container1");


     // 🔥 IMPORTANT → Load order summary every time user opens it
    updateOrders();

    popup.style.display = "flex";
    userDropdown.style.display = "none";

    setTimeout(() => {
        box.classList.add("show");
    }, 50);
}

function CloseOrder(){
      const close = document.getElementById("order-summary1");

      close.style.display = "none"
}







