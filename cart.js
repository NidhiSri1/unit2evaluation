let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
let arr = JSON.parse(localStorage.getItem("updatedCart")) || [];
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

    let price = document.createElement("p");

    nameC.innerHTML = e.price;

    let del = document.createElement("button");
    del.innerHTML = "Remove";
    del.addEventListener("click", function () {
      deleteElemet(index);
    });
    cartSD.append(cartImg, nameC, price, del);
    mainC.append(cartSD);
  });
  function deleteElemet(i) {
    cartArr.splice(i, 1);
    localStorage.setItem("updatedCart", JSON.stringify(cartArr));
    // displayOnCart(cartArr);
  }
}

let rightdiv = document.getElementById("checkOutDiv");

let totalP = document.createElement("p");
totalP.innerHTML = "Total Amt";

rightdiv.append(totalP);
