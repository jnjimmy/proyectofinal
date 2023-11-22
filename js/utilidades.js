const cart = document.querySelector('#cart-principal');
const carrito = document.querySelector('#cart-icon');


const desplegarCompras = () =>{
    (cart.classList.contains('disabled'))? cart.classList.remove('disabled'):cart.classList.add('disabled')
    
}
carrito.addEventListener('click', desplegarCompras);