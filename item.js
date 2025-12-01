let menu = { 
    bihar: [
        {name : "Thekua", price: "₹ 1000", img : "./src/thekua.png.jpeg"  },
        {name : "Litti Chokha", price: "₹ 500", img : "./src/food_3.png"  },     
        { name : "Ahuna Chikan", price: "₹ 1200", img : "./src/bih_1.jpeg"  },
        { name : "Khaja", price: "₹ 300", img : "./src/bih_3.jpeg"  },
        { name : "Makhana", price: "₹ 1500", img : "./src/bih_4.jpeg"  },
        { name : "Jalebi", price: "₹ 2000", img : "./src/bih_5.jpeg"  },
      ],

        punjab : [
        { name : "Butter Chikan",price: "₹ 3000", img : "./src/pan_3.jpeg" },
        { name : "Amritsari Kulcha", price: "₹ 2300", img : "./src/food_1.png"  },     
        { name : "Tandoori Chiken", price: "₹ 2400", img : "./src/pan_2.jpeg"  },
        { name : "Chole Bhature", price: "₹ 1100", img : "./src/chole.jpg"  },
        { name : "Rajma Chawal", price: "₹ 700", img : "./src/pan_1.jpeg"  },
        { name : "Lassi", price: "₹ 870", img : "./src/lassi.jpg"  }
    ],

     bangal : [
        { name : "Baingan bhaja ", price: "₹ 430", img : "./src/Ben_1.jpeg"  },
        { name : "Mishti doi", price: "₹ 670", img : "./src/Ben_2.jpeg"  },     
        { name : "Rasgulla", price: "₹ 230", img : "./src/Ben_3.jpeg"  },
        { name : "Tandoor fish", price: "₹ 450", img : "./src/food_2.png"  },
        { name : "Mutton thali ", price: "₹ 540", img : "./src/Ban_4.jpeg"  },
        { name : "Mix Thali", price: "₹ 230", img : "./src/food1.jpg"  }
    ],

     southIndian : [
        { name : "Idli", price: "₹ 180", img : "./src/South_1.jpg"  },
        { name : "Amritsari Kulcha", price: "₹ 120", img : "./src/South_2.jpg"  },     
        { name : "Pongal", price: "₹ 180", img : "./src/South_3.jpg"  },
        { name : "Tirunelveli Biryani", price: "₹ 450", img : "./src/South_4.jpg"  },
        { name : "Dosha", price: "₹ 650", img : "./src/food_4.png"  },
        { name : "Curd Rice", price: "₹ 540", img : "./src/Curd Rice.jpg"  }
    ],

     gujrat : [
        { name : "jalebi fafda", price: "₹ 320", img : "./src/Guj_1.jpeg"  },
        { name : "Amritsari Kulcha", price: "₹ 540", img : "./src/Guj_2.jpeg"  },     
        { name : "Undhiyu", price: "₹ 800", img : "./src/Guj_3.jpeg"  },
        { name : "Dhokla", price: "₹ 120", img : "./src/Guj_4.png"  },
        { name : "Burgur", price: "₹ 230", img : "./src/Guj_5.jpeg"  },
        { name : "khichdi", price: "₹ 320", img : "./src/Guj_6.jpg"  }
    ],

     delhi : [
        { name : "Biryani", price: "₹ 230", img : "./src/Del_3.jpg"  },
        { name : "Golgappas", price: "₹ 450", img : "./src/Golgappas.jpg"  },     
        { name : "Tandoori Chiken", price: "₹ 320", img : "./src/del_2.jpeg"  },
        { name : "Chole Bhature", price: "₹ 560", img : "./src/del_1.jpeg"  },
        { name : "Kebabs", price: "₹ 670", img : "./src/Kebabs.jpg"  },
        { name : "Kulfi", price: "₹ 430", img : "./src/Kulfi.jpg"  }
    ]
}

function ShowMenu(city){


        // 🔒 Login Check
    let users = localStorage.getItem("users");

    if (!users) {
        alert("Please login first!");
        return; // ❌ Stop here (menu will not open)
    }

    let section = document.getElementById("menu-section");
    let title = document.getElementById("menu-titles");
    let list = document.getElementById("menu-items");

    // section.style.display = "block";


  // ✅ Fix title capitalization
  title.innerText = city.charAt(0).toUpperCase() + city.slice(1) + " Specials";
    list.innerHTML = "";

menu[city].forEach(item => {
    list.innerHTML += `
      <div class="menu-item">
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name}</p>
        <p>${item.price}</p>
        <button onclick="AddtoCart('${item.name}', '${item.price}', '${item.img}')">Add to Cart</button>
      </div>
    `;
  });

}




function AddtoCart(name ,price, img ){
  let cart = JSON.parse(localStorage.getItem("cart")) || [] ;



  let existing = cart.find(item => item.name === name);
  if(existing)
  {
    existing.quantity += 1;  
  } else {
    cart.push({name, price, img, quantity: 1});
  }

 

  // cart data localstorage me save karo 

  localStorage.setItem("cart", JSON.stringify(cart));

  // showTost(`${item.name} added to cart 🛒`);
   alert (`${name} added to cart!`);
}

function openMenu(){
  document.querySelector(".cart-section").style.display = "none";
  document.querySelector(".hero").style.display = "flex";
  document.querySelector(".menu").style.display = "flex";

   document.querySelector(".cart-section").scrollIntoView({
        behavior: "smooth"
  })
} 

