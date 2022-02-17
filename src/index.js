productArr = [];

$(document).ready(function () {
//   $(".success").hide();
//   $(".error").hide();
//   $("#update_product").hide();
//   add();
  $("#add_product").click(function () {
    //   alert("helol")
    add_pro();
  });
});

function add_pro() {
  var id = document.getElementById("product_sku").value;
  var name = document.getElementById("product_name").value;
  var price = document.getElementById("product_price").value;
  var qunatity = document.getElementById("product_quantity").value;
//   if (isNaN(id) || id == "") {
//     $(".error").show().fadeOut(2000);
//     $("#product_sku").css("border-color", "red");
//   } else if (name == "") {
//     $(".error").show().fadeOut(3000);
//     $(".error").css("border-color", "red");
//   } else if (price == "") {
//     $(".error").show().fadeOut(3000);
//     $(".error").css("border-color", "red");
//   } else if (qunatity == "") {
//     $(".error").show().fadeOut(3000);
//     $(".error").css("border-color", "red");
//   } else {
    var obj = {
      id: id,
      name: name,
      price: price,
      qunatity: qunatity,
    };
    productArr.push(obj);

    add();  

//   }

//   console.log(productArr);
}

function add() {

  var table =
    "<table><th>id </th><th> name</th><th> price</th><th>qunatity</th><th>Action</th>";

  for (var i = 0; i < productArr.lenght; i++) {
    table +=
      "<tr><td>" +
      productArr[i].sku +
      "</td><td>" +
      productArr[i].name +
      "</td><td>" +
      productArr[i].price +
      "</td><td>" +
      productArr[i].qunatity +
      '</td><td><a href = "#" onClick = "onEdit"> class = "edit"> Edit </a><a href = "#" onclick = "deleteRow(' +
      parseInt(productArr[i].sku) +
      ')" class= "delete" > Delete </a></td></tr>';
  }
  table += "</table>";
  document.getElementById("product_list").innerHTML = table;
}

