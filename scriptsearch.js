let products = {
    data: [
      {
        productName: "Москва-Самара",
        category: "Москва",
        price: "1500",
        image: "img/photo/moskva_samara.png",
      },
      {
        productName: "Оренбург-Орел",
        category: "Оренбург",
        price: "2000",
        image: "img/photo/orenburg_orel.png",
      },
      {
        productName: "Казахстан-Польша",
        category: "Казахстан",
        price: "1500",
        image: "img/photo/kazahstan_polsha.png",
      },
      {
        productName: "Казань-Омск",
        category: "Казань",
        price: "7500",
        image: "img/photo/kazan_omsk.png",
      },
      {
        productName: "Орск-Киров",
        category: "Орск", 
        price: "5600",
        image: "img/photo/orsk_kirov.png",
      },   
      {
        productName: "Смоленск-Санкт-Петербург",
        category: "Смоленск",
        price: "8000",
        image: "img/photo/smolensk_piter.png",
      }
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "Стоимость билета:" + i.price + "₽";
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  

  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  