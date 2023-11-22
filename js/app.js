const grid = document.querySelector('#grid-burguer')
const cartList = document.querySelector('#cart-shop')
const cartPrincipal = document.querySelector('#cart-principal')
const vaciar = document.querySelector('#vaciar-cart')

let cartArray =[];
let validacion = false;

const eventos = ()=>{
    gridBurger.addEventListener('click', addBurguer)
    cartPrincipal.addEventListener('click', deleteBurger)
    vaciar.addEventListener('click',(e)=>{
        e.preventDefault
        cartArray =[]
        pintarHtml()
    })
    document.addEventListener('DOMContentLoaded', loadCart)
}

const addBurguer = (e) =>{
    e.preventDefault()
    const {target} = e
    if(target.classList.contains('button')) {
        Toastify({
            text: "Load to cart",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              color:'#474747'
            },
            onClick: function(){} 
          }).showToast();
        const card = target.parentElement.parentElement;
        readCard(card)
        validacion =false
    }
}

const readCard =(card)=>{
    const burgerCart ={
        img:card.querySelector('img').src,
        nombre:card.querySelector('h3').textContent,
        precio:card.querySelector('p').textContent,
        id:card.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
    cartArray.forEach(repeat =>{
        if(repeat.id === burgerCart.id){
            validacion =true
        }    
    })
    if(validacion){
        const newBurger = cartArray.map(burger =>{
            if(burger.id === burgerCart.id){
                burger.cantidad++;
                return burger;
            }else{
                return burger
            }
        })
        cartArray = [...newBurger]
    }else{

        cartArray = [...cartArray, burgerCart]
    }
    
    pintarHtml()
}

const pintarHtml =()=>{
    reiniciarCarrito();
    cartArray.forEach(burger => {
        const pedido = document.createElement('div')
        pedido.classList.add('compras')
        pedido.innerHTML=`
        <img src=${burger.img} alt="">
                <p>${burger.nombre}</p>
                <p>$${burger.precio}</p>
                <p>${burger.cantidad}</p>
                <a class='borrar' data-id=${burger.id} href="#">x
                  </a>
        `
        cartList.appendChild(pedido)
    });
    saveStorage()
} 
const saveStorage= ()=>{
    localStorage.setItem('cart', JSON.stringify(cartArray))
}

const deleteBurger = (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('borrar')){
        Toastify({
            text: "delete article of the cart",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to right, #CD7006, #970F03)",
              color:'#474747'
            },
            onClick: function(){} 
          }).showToast();
        const idB = e.target.getAttribute('data-id')
        cartArray =cartArray.filter(
            (del) => del.id != idB 
        );
        pintarHtml();
        
    }
}
const reiniciarCarrito =()=>{
    cartList.innerHTML='';
}
const loadCart =  () =>{
    cartArray=  JSON.parse(localStorage.getItem('cart')) || []
    pintarHtml();
}

eventos()

