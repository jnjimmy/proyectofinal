const gridBurger = document.querySelector('#grid-burguer')

let hamburguesas =[]

const mostrarGrid = async(category) =>{

    const url = `https://pixabay.com/api/?key=36152720-94611339c75af554904baf0e4&q=${category}&per_page=6`
    const res = await fetch(url)
    const {hits} =await res.json()
    hamburguesas = hits
    
    hamburguesas.forEach(burger => {
        const {largeImageURL, tags, id } = burger
        const div = document.createElement('div')
        div.classList.add("grid-food--card")
        div.innerHTML+=`
                <img src=${largeImageURL} alt="">
                <div>
                    <h3>${tags}</h3>
                    <p>$20.000</p>
                    <a class="button" href="#" data-id=${id}>agregar al carrito</a>
                </div>
            
        `
        gridBurger.appendChild(div)
    });
    
}

mostrarGrid('burger barbecue')

