const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerSVG = document.querySelector('.menu-burger');
const mobileMenuListas = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const carIconListas = document.querySelector('#detail-product-car');
const flechaReturn = document.querySelector('.return-flecha');
const detailAdd = document.querySelector('#detail-product-add')
const mainContainer = document.querySelector('.main-container');
const contadorNav = document.querySelector('.contador');
const productDetailClose = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.container-shopping-cart');
const orderTotalId = document.querySelector('#orderTotal');
const btnWpp = document.querySelector("#btn-wpp");

/*const btnAddCar = document.querySelector('.btn-add-card');

const btnAddCarAll = btnAddCar.querySelectorAll('img');*/



function closeDetailProduct() {
   const detailAddClose = detailAdd.classList.contains('inactive');
   if (!detailAddClose) {
      detailAdd.classList.add('inactive');
   }
}


function flechaReturnDetail() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }
}
function toggleDesktopMenu() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   desktopMenu.classList.toggle('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }

}
function toggleMobileMenuBurger() {
   mobileMenuListas.classList.toggle('inactive');
}
function toggleCarIcon() {
   const iconDesktopMenu = desktopMenu.classList.contains('inactive');
   carIconListas.classList.toggle('inactive');
   if (!iconDesktopMenu) {
      desktopMenu.classList.add('inactive');
   }
}
function imgClick() {
   const detailAddContain = detailAdd.classList.contains('inactive');
   if (detailAddContain) {
      detailAdd.classList.remove('inactive');
   }
}
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerSVG.addEventListener('click', toggleMobileMenuBurger);
carIcon.addEventListener('click', toggleCarIcon);
flechaReturn.addEventListener('click', flechaReturnDetail);
productDetailClose.addEventListener('click', closeDetailProduct);
let valuebtnWpp = btnWpp.value;
let relmsg = valuebtnWpp.replace(/ /g,"%20");
btnWpp.addEventListener('click',function(){
   window.open('https://wa.me/51949360557?text='+relmsg, '_blank'); 
})





const cartProducts = [];
const productList = [];
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota naranja',
      price: 89.00,
      image: './imagenes/pelota1.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 95.00,
      image: './imagenes/guante3.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota1.jpeg'

   }
);
productList.push(
   {
      name: 'guante',
      price: 89.00,
      image: './imagenes/guante3.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota1.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg'

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg'

   }
);



function AddProduct(arr) {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
      img.addEventListener('click', imgClick);

      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');


      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.textContent = 'S/. ' + product.price;
      const productName = document.createElement('p');
      productName.textContent = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);

      const figure = document.createElement('figure');
      figure.classList.add('btn-add-car');
      const figureImg = document.createElement('img');

      figureImg.setAttribute('src', './imagenes/recursos/bt_add_to_cart.svg')
      figure.appendChild(figureImg);



      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(figure);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      mainContainer.appendChild(productCard);
   }
}


let sumaIterada = createTotal();
AddProduct(productList);

let indexSuma = 0;
contadorNav.textContent = indexSuma;

let btnsAdd = document.querySelectorAll('.btn-add-car');

btnsAdd.forEach((btnAdd, index) => {

   btnAdd.addEventListener('click', function () {
      indexSuma += 1;
      contadorNav.textContent = indexSuma;
      let suma = 0;
      if (index == 0) {
         createOrderProduct(0);
         cartProducts.push(productList[0].price);

         cartProducts.forEach(elemento => {
            return suma = suma + elemento;

         })
         
         sumaIterada(suma);

      }
      else if (index == 1) {
         createOrderProduct(1);
         cartProducts.push(productList[1].price);
         cartProducts.forEach(elemento => {
            return suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 2) {
         createOrderProduct(2);
         cartProducts.push(productList[2].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);


      }
      else if (index == 3) {
         createOrderProduct(3);
         cartProducts.push(productList[3].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 4) {
         createOrderProduct(4);
         cartProducts.push(productList[4].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);

      }
      else if (index == 5) {
         createOrderProduct(5);
         cartProducts.push(productList[5].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 6) {
         createOrderProduct(6);
         cartProducts.push(productList[6].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 7) {
         createOrderProduct(7);
         cartProducts.push(productList[7].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 8) {
         createOrderProduct(8);
         cartProducts.push(productList[8].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);
      }
      else if (index == 9) {
         createOrderProduct(9);
         cartProducts.push(productList[9].price);
         cartProducts.forEach(elemento => {
            suma = suma + elemento;

         })
         sumaIterada(suma);


      }

   }

   )

});


// Agregar producto en 'Shopping Cart'


/*<div class="shopping-cart">
<figure>
  <img src="./imagenes/guante1.jpg" alt="bike">
</figure>
<p>Guantes Flex</p>
<p> S/. 95.00</p>
<img src="./imagenes/recursos/bxs-tachito.svg" alt="close">
</div>*/


function createOrderProduct(indice) {
   const shoppingCart = document.createElement('div');
   shoppingCart.classList.add('shopping-cart');
   const figureOrder = document.createElement('figure');
   const figureOrderImg = document.createElement('img');
   figureOrderImg.setAttribute('src', productList[indice].image);
   figureOrder.appendChild(figureOrderImg);
   const nameOrder = document.createElement('p');
   nameOrder.textContent = productList[indice].name;
   const priceOrder = document.createElement('p');
   priceOrder.textContent = 'S/. ' + productList[indice].price + ".00";
   const imgIcon = document.createElement('img');
   imgIcon.setAttribute('src', './imagenes/recursos/bxs-tachito.svg');
   shoppingCart.appendChild(figureOrder);
   shoppingCart.appendChild(nameOrder);
   shoppingCart.appendChild(priceOrder);
   shoppingCart.appendChild(imgIcon);
   myOrderContent.appendChild(shoppingCart);
}




function createTotal() {
   const textTotalCount = document.createElement('p');
   const spanTotal = document.createElement('span');
   spanTotal.textContent = "Total";
   textTotalCount.appendChild(spanTotal);
   const numberTotalCount = document.createElement('p');
   orderTotalId.appendChild(textTotalCount);
   orderTotalId.appendChild(numberTotalCount);
   function addTotalCar(totalSuma) {
      numberTotalCount.textContent = ` Total: S/.  ${totalSuma}.00`;
   }
   return addTotalCar;

}




