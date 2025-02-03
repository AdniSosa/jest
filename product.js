// - resetProducts(): reinicia la lista de productos y el id.
// - addProduct(name, price): agrega un producto a la lista de productos.
// - removeProduct(id): elimina un producto de la lista de productos.
// - getProducts(): devuelve todos los productos.
// - resetProducts(): reinicia la lista de productos.
// - getProduct(id): devuelve un producto por su id.
// - updateProduct(id, name, price): actualiza un producto por su id.
// - products: array de productos. Por defecto, estará vacío.
// - id: id del producto. Por defecto, será 0. Cada vez que se añada un producto, se incrementará en 1.

let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

const resetProducts = () => {
    products = [];
}

const addProduct = (name, price) => {
    id +=1;
    const product = products.find(product => product.name === name);

    if(!name) {
        throw new Error ('Must be a name for the product')
    }
    if(!price) {
        throw new Error ('Must be a price for the product')
    }

    if(product) {
        throw new Error ('The product already exists')
    }
    
    const newProduct = {id, name, price}
    
    products.push(newProduct);

    return newProduct;
}

const removeProduct = (id) => {
    const index = products.findIndex(product => product.id === id)
    console.log(index);
    if(index === -1) {
        throw new Error ('This product doesn´t exists')
    }
    products.splice(index, 1);
    return products;
}

const getProducts = () => {
    if(products.length === 0) {
        throw new Error ('There are no products to show')
    }
}

const getProduct = (id) => {
    const product = products.filter(product => product.id === id);

    if(product.length === 0) {
        throw new Error ('This product hasn´t been found')
    }

    return product[0];
}

const updateProduct = (id, name, price) => {
    const product = products.filter(product => product.id === id);
    const index = products.findIndex(product => product.id === id)

    if(product.length === 0) {
        throw new Error ('This product hasn´t been found')
    }
    products[index].name = name;
    products[index].price = price

    return product[0];
}

//addProduct('manzana', 2);
//addProduct('pera', 3);
//updateProduct(4, 'chinola', 5);
//resetProducts();
//console.log(getProducts());
//console.log(getProduct(1));
//removeProduct(3)
//console.log(products);
// resetProducts();
// console.log(products);
// console.log(id);

//console.log(products);

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct
}