async function displayDishes() {
  try {
    let url = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
    );
    let dishes = await url.json();
    let arrDishes = dishes.meals;
    displayOnScreen(arrDishes);
    console.log(arrDishes);
  } catch (err) {
    console.log(err);
  }
}
displayDishes();
let cartArr = JSON.parse(localStorage.getItem("cart")) || [];

function displayOnScreen(dishes) {
  let mainDiv = document.getElementById("main");
  dishes.map(function (ele) {
    let specificDiv = document.createElement("div");
    specificDiv.id = "sDiv";

    let img = document.createElement("img");
    img.id = "showimg";
    img.src = ele.strMealThumb;

    let name = document.createElement("p");
    name.innerHTML = ele.strMeal;
    console.log(ele.strMeal);

    let price = document.createElement("p");
    price.innerHTML = Math.floor(Math.random() * 500 + 100);

    let btn = document.createElement("button");
    btn.innerHTML = "Add To Cart";
    btn.addEventListener("click", function () {
      addToCart(ele);
    });

    specificDiv.append(img, name, price, btn);
    mainDiv.append(specificDiv);
  });
  let cartC = document.getElementById("count");
  cartC.innerHTML = `Items In Cart : ${cartArr.length}`;
  function addToCart(ele) {
    cartArr.push(ele);
    console.log(cartArr);
    localStorage.setItem("cart", JSON.stringify(cartArr));
    cartC.innerHTML = `Items In Cart : ${cartArr.length}`;
  }
}
