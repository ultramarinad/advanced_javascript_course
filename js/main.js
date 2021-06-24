class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.merch = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts() {
        this.merch = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.merch){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }

    getSum() {
        let sum = 0;
        this.merch.forEach(item=>{sum += item.price});
    }    
}

class ProductItem {
	constructor(product, img = 'https://via.placeholder.com/200x150'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render() {
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="button_buy">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class Trash {
    addMerch() {
    }
    removeMerch() {
    }
    changeMerch() {
    }
    render(){
    }
}

class ElemBasket {
    render(){}

}