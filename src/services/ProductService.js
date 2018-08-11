const products = [
    {
        id: 1,
        title: "MacBook pro",
        quantity: 10
    },
    {
        id: 2,
        title: "HP Envy x360 13",
        quantity: 10
    },
    {
        id: 3,
        title: "Mac mini",
        quantity: 10
    }

];

let nextIdProduct = 4;   

class ProductService {
    list(){
        return products;
    }

    increment(product){
        return product.quantity++;
    }

    decrement(product){
        if(!product.quantity <= 0){
            return product.quantity--;
        }else{
            alert('There are no more products in stock!')
        }
       
    }

    
}

export const productService = new ProductService;