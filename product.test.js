
// - addProduct
    // El primer test que vamos a hacer es el de crear un producto. Para ello, vamos a usar la función **addProduct**. 
    // Esta función recibe dos parámetros: el nombre del producto y el precio. 
    // Si alguno de los dos parámetros no está definido, la función lanzará un error. Si el producto ya existe, la función también lanzará un error.
        //   - debería agregar un producto.
        //   - debería incrementar el id en 1 cada vez que se añada un producto.
        //   - debería lanzar un error si el nombre o el precio no están definidos.
        //   - debería lanzar un error si el producto ya existe.
// - removeProduct
//   - debería eliminar un producto
//   - debería lanzar un error si el producto no existe.
// - getProduct
//   - debería devolver un producto por su id.
//   - debería lanzar un error si el producto no existe.
// - updateProduct
//   - debería actualizar un producto por su id.
//   - debería lanzar un error si el producto no existe.
// afterEach(() => {
//     resetProducts();
// });

const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

describe('addProduct', () => {
    afterEach(() => {
        resetProducts();
    });
    
    it('Should add a product', () => {
        expect(addProduct('manzana', 2)).toEqual({id:1, name: 'manzana', price: 2})
    })
    it('Should throw an error if name is empty', () => {
        expect(() => addProduct('', 2)).toThrow('Must be a name for the product')
    })
    it('Should throw an error if price is empty', () => {
        expect(() => addProduct('manzana', null)).toThrow('Must be a price for the product')
    })
    it('Should throw an error if the product already exists', () => {
        addProduct('manzana', 2);
        expect(() => addProduct('manzana', 2)).toThrow('The product already exists');
    })
})

describe('removeProduct', () => {
    afterEach(() => {
        resetProducts();
    });
    it('Should remove a product', () => {
        addProduct('manzana', 2);
        expect(removeProduct(2)).toEqual([])
    })
    it('Should throw an error if the product couldn´t been found', () => {
        expect(() => removeProduct(10)).toThrow('This product doesn´t exist')
    })
})

describe('getProduct', () => {
    afterEach(() => {
        resetProducts();
    });
    it('Should show the product searched by id', () => {
        addProduct('manzana', 2);
        expect(getProduct(1)).toEqual({id:1, name: 'manzana', price: 2})
    })
    it('Should throw an error if the product doesn´t exist', () => {
        expect(() => getProduct(1)).toThrow('This product hasn´t been found')
    })
})

describe('updateProduct', () => {
    afterEach(() => {
        resetProducts();
    });
    it('Should update the product', () => {
        addProduct('manzana', 2);
        expect(updateProduct(1, 'pera', 3)).toEqual({id: 1, name: 'pera', price: 3})
    })
    it('Should throw an error if the product doesn´t exist', () => {
        expect(() => updateProduct(1, 'pera', 3)).toThrow('This product hasn´t been found')
    })
})