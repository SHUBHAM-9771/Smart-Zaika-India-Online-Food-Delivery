


 document.addEventListener("DOMContentLoaded", () => {
    
 })
function openCart() {
    //Hide Hero section
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".menu").style.display = "none";
    document.querySelector("#menu-section").style.display = "none"


    //Show Cart section
    document.querySelector(".cart-section").style.display = "block";

    // Load latest cart items
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    showCart();  // <<< IMPORTANT

   // Smooth Scroll to Cart
    document.querySelector(".cart-section").scrollIntoView({
        behavior: "smooth"
    });
}

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let container = document.getElementById("cart-items");
        let totalprice = 0;

        function showCart(){

            container.innerHTML = ""; 
            totalprice = 0;

            
            cart.forEach((item, index)=> {
            let div = document.createElement("div");
            div.classList.add("cart-item");

            div.innerHTML = `<img src="${item.img}" loading="lazy" >  
                <p>${item.name}</p>
                <p>${item.price}</p>
                <span class="increase-decrese">
                <button onclick ="decrease(${index})">-</button>
                <p>${item.quantity}</p> 
                <button onclick ="increase(${index})">+</button>
                </span>
                <span class="close1"  onclick="removeItem(${index})">&times;</span>`
   
             container.appendChild(div);
        });

                localStorage.setItem("cart", JSON.stringify(cart));          

       
    }   
    


            function increase(index){
                cart[index].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(cart)); // Save in localStorage
                showCart()
            }

        function decrease(index){
            if(cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index,1);
            }
            localStorage.setItem("cart", JSON.stringify(cart)); // Save in localStorage
            showCart()
        }



        function removeItem(index) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            showCart()
        }

      
    window.addEventListener("storage", () => {
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        showCart();
    });

    function goToAddress(){

    // Get latest cart from localStorage
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty! Add items before proceeding.");
        
        //  Show alert → Then redirect to Home Page
        window.location.href = "index.html";  
        return; // Stop execution, next page na jaye
    }
    
    document.querySelector(".cart-section").style.display = "none";
    document.querySelector(".address-section").style.display = "block";


     //Smooth Scroll to Cart
    document.querySelector(".cart-section").scrollIntoView({
        behavior: "smooth"
    });
}

    showCart();


// back button to home 

function CardBack(){
    document.querySelector(".cart-section").style.display = "none";

    //  Show alert → Then redirect to Home Page
        // window.location.href = "index.html"; 
    document.querySelector("#menu-section").style.display = "flex"; 
    document.querySelector(".menu").style.display = "flex";
    document.querySelector(".hero").style.display = "flex";



    document.querySelector(".cart-section").scrollIntoView({
    behavior: "smooth"
    })
}

