let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let delcart = JSON.parse(localStorage.getItem("cartItem")) || [];
displayOnCart(cartArr);

function displayOnCart(dis) {
  let mainC = document.getElementById("cartD");

  dis.map(function (e, index) {
    let cartSD = document.createElement("div");
    cartSD.id = "specificCart";

    let cartImg = document.createElement("img");
    cartImg.id = "cartImage";
    cartImg.src = e.strMealThumb;

    let nameC = document.createElement("p");

    nameC.innerHTML = e.strMeal;

    let del = document.createElement("button");
    del.innerHTML = "Remove";
    del.addEventListener("click", function () {
      //   deleteElemet(index);
    });

    cartSD.append(cartImg, nameC, del);
    mainC.append(cartSD);
  });
}
// function deleteElemet(i) {
//   cartArr.splice(i, 1);

//   delcart.push(cartArr);
//   localStorage.setItem("cartItem", JSON.stringify(delcart));

//   displayOnCart(delcart);
// }
