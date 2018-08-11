const customers = [
    {
        id: 1,
        firstName: "John",
        lastName:"Doe",
        email: "john@gmail.com",
        products: []
    },

    {
        id: 2,
        firstName: "Jack",
        lastName:"Junior",
        email: "jack@gmail.com",
        products: []
    },

    {
        id: 3,
        firstName: "Emily",
        lastName:"Smith",
        email: "emily@gmail.com",
        products: []
    }
];

let nextId = 4;

class CustomerService{
    list(){
        return customers;
    }
    
    delete(customer)
    {
        let indexOfCustomerToDelete = customers.indexOf(customer);
        customers.splice(indexOfCustomerToDelete, 1);
    }

    addNewCustomer(newCustomer)
    {
        newCustomer.id = nextId;   
        customers.push(newCustomer);
        nextId++;
    }

    find(id)
    {
        return customers.find(customer => customer.id == id);
    }

    addProduct(customer, product) {
        customer.products.push(product);
    }
}

export const customerService = new CustomerService;