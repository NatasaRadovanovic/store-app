const customers = [
    {
        id: 1,
        name: "John",
        email: "john@gmail.com",
        products: []
    },

    {
        id: 2,
        name: "Jack",
        email: "jack@gmail.com",
        products: []
    },

    {
        id: 3,
        name: "Emily",
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
}

export const customerService = new CustomerService;