const menu = [
    {
        id: 1,
        title: "Mini Cheese Burger",
        price: "$9.00"
    },
    {
        id: 2,
        title: "Double Size Burger",
        price: "$11.00"
    },
    {
        id: 3,
        title: "Bacon Egg and Cheese",
        price: "$13.00"
    },
    {
        id: 4,
        title: "Pulled Porx Burger",
        price: "$18.00"
    },
    {
        id: 5,
        title: "Fried Chicken Burger",
        price: "$22.00"
    }
];

const snacks = [
    {
        id: 1,
        title: "Corn Tikki - Spicy fried Aloo",
        price: "$15.00"
    },
    {
        id: 2,
        title: "Bread besan Toast",
        price: "$35.00"
    },
    {
        id: 3,
        title: "Healthy soya nugget snacks",
        price: "$20.00"
    },
    {
        id: 4,
        title: "Tandoori Soya Chunks",
        price: "$30.00"
    },
];

const beverage = [
    {
        id: 1,
        title: "Single Cup Brew",
        price: "$07.00"
    },
    {
        id: 2,
        title: "Caffe Americano",
        price: "$09.00"
    },
    {
        id: 3,
        title: "Caramel Macchiato",
        price: "$15.00"
    },
    {
        id: 4,
        title: "Standard black coffee",
        price: "$08.00"
    },
    {
        id: 5,
        title: "Standard black coffee",
        price: "$12.00"
    }
];

const image = ["images/menu-burger.jpg", "images/menu-snack.jpg", "images/menu-beverage.jpg"];
const menuImages = ["images/menu-burger-img.jpg", "images/menu-snack-img.jpg", "images/menu-beverage-img.jpg"];

const menuArea = document.querySelector('.menu-area');
const burgerBtn = document.getElementById('burger');
const snackBtn = document.getElementById('snack');
const beverageBtn = document.getElementById('beverage');
const menuImage = document.getElementById('menu-image');


window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu, 0);
    burgerBtn.classList.toggle('green-btn');
    snackBtn.classList.toggle('yellow-btn');
    beverageBtn.classList.toggle('yellow-btn');
});

burgerBtn.addEventListener('click', function () {
    displayMenuItems(menu, 0);
    burgerBtn.className = "custom-food-btn my-2 green-btn";
    snackBtn.className = "custom-food-btn my-2 yellow-btn";
    beverageBtn.className = "custom-food-btn my-2 yellow-btn";
});

snackBtn.addEventListener('click', function () {
    displayMenuItems(snacks, 1);
    burgerBtn.className = "custom-food-btn my-2 yellow-btn";
    snackBtn.className = "custom-food-btn my-2 green-btn";
    beverageBtn.className = "custom-food-btn my-2 yellow-btn";
});

beverageBtn.addEventListener('click', function () {
    displayMenuItems(beverage, 2);
    burgerBtn.className = "custom-food-btn my-2 yellow-btn";
    snackBtn.className = "custom-food-btn my-2 yellow-btn";
    beverageBtn.className = "custom-food-btn my-2 green-btn";

});

function displayMenuItems(menuItems, n) {
    let displayMenu = menuItems.map(x => {
        return ` <div class="d-flex align-items-center mb-3">
        <div>
            <img class="img-round" src="${image[n]}" alt="">
        </div>
        <div class="menu-details">
            <div class="menu-price-title d-flex justify-content-between">
                <h3>${x.title}</h3>
                <h3 class="yellowish-text price">${x.price}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet elit. Phasel nec preti facil</p>
        </div>
    </div>`
    })

    displayMenu = displayMenu.join("");
    menuArea.innerHTML = displayMenu;
    menuImage.src = menuImages[n];
}

