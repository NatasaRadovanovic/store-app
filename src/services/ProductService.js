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

    find(id)
    {
        return products.find(product => product.id == id);
    }
}

export const productService = new ProductService;