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

    
}

export const productService = new ProductService;