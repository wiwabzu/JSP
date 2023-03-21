function search_product() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('products');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}

// function search_product() {
//     let input = document.getElementById('searchbar').value.toLowerCase();
//     let products = document.getElementsByClassName('products');
  
//     for (let i = 0; i < products.length; i++) {
//       let productName = products[i].querySelector('.product-name').textContent.toLowerCase();
//       if (!productName.includes(input)) {
//         products[i].style.display = "none";
//       } else {
//         products[i].style.display = "list-item";
//       }
//     }
//   }
  