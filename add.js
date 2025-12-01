const cityData ={
    "Delhi" : ["New Delhi", "Dwarika", "New Ashok Nager", "Karol Bagh", "Saket"],
    "Bihar" : ["Patna", "Siwan", "Chhapra", "Gopalganj","Hajipur", "Gaya", "Sounpur"],
    "Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri", "Asansol"],
    "Gujrat" : ["Ahamedabad", "Surat", "Vadodara", "Rajkot", "Gandhinager"],
    "Punjab" : ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Chandigarh"],
    "Maharashtra" : ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
}


const  stateSelect = document.getElementById("state");
const  citySelect = document.getElementById("city");


stateSelect.addEventListener("change", function() {
    const selectedState = stateSelect.value;
    citySelect.innerHTML = "<option value = ''>Select City</option>";

    if(cityData[selectedState]) {
        cityData[selectedState].forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
        });
    }
});

function change(){

        const  stateSelect = document.getElementById("state").value;
        const  citySelect = document.getElementById("city").value;
        const  fullname = document.getElementById("fullname").value;
        const  number = document.getElementById("mobilenumber").value;
        const  pincode  = document. getElementById("pincode").value;
        const  landmark = document.getElementById("landmark").value;
        const  street = document.getElementById("street").value;
        const housenumber = document.getElementById("housenumber").value;

 
        // Validate all fields
            if (!fullname || !number || !pincode || !landmark || !street || !housenumber || !state || !city) {
                alert("Please fill all fields");
                return; // Stop execution
            }

        const AddressDetails = {
            "FullName" : fullname,
            "PhoneNumber" : number,
            "HouseNumber" : housenumber,
            "Pincode" : pincode,
            "LandMark" : landmark,
            "Street" : street,
            "StateSelect" : stateSelect,
            "CitySelect" : citySelect,
         };

         localStorage.setItem("AddressDetails", JSON.stringify(AddressDetails));
        //     alert("data stored successfully")



        document.querySelector(".address-section").style.display = "none";
        document.querySelector(".confirmation-section").style.display = "flex";

            // CALL THIS
            loadConfirmationData();

        // Smooth Scroll to Cart
        document.querySelector(".confirmation-section").scrollIntoView({
        behavior: "smooth"
    });

}

function AddressBack(){
    document.querySelector(".address-section").style.display = "none";
    document.querySelector(".cart-section").style.display = "block";
   
    document.querySelector(".address-section").scrollIntoView({
    behavior: "smooth"
    })
}

 