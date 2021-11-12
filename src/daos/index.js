let productosDao
let carritosDao

let per = 'json'

switch (per) {
    case 'json':
        const { default: ProductosDaoArchivo } = await import('./productos/productoDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('./carrito/carritoDaoArchivo.js')

        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('./productos/ProductoDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('./carrito/carritoDaoFirebase.js')

        productosDao = new ProductosDaoFirebase()
        carritosDao = new CarritosDaoFirebase()
        break
    case 'mongodb':
        const { default: ProductosDaoMongoDb } = await import('./productos/ProductoDaoMongoDb.js')
        const { default: CarritosDaoMongoDb } = await import('./carrito/carritoDaoMongoDb.js')

        productosDao = new ProductosDaoMongoDb()
        carritosDao = new CarritosDaoMongoDb()
        break
    default:
        const { default: ProductosDaoMem } = await import('./productos/ProductoDaoMem.js')
        const { default: CarritosDaoMem } = await import('./carrito/carritoDaoMem.js')

        productosDao = new ProductosDaoMem()
        carritosDao = new CarritosDaoMem()
        break
}

export { productosDao, carritosDao }
