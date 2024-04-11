class ProductManager {
  constructor() {
    // cosntructor
    this.products = []; // array vacio
    this.lastId = 0;
  }

  addProduct(title, description, price, thumbnail, stock) {
    // VALIDA CAMPOS OBLIGATORIOSD
    if (!title || !description || !price || !thumbnail || !stock) {
      console.error("Todos los campos son obligatorios.");
      return;
    }

    // COMPARA EL NOMBRE DE UN PRODUCTO REVOISANDO SU TITULO
    const existingProduct = this.products.find(
      (product) => product.title === title
    );
    if (existingProduct) {
      console.error("Ya existe un producto con el mismo título.");
      return;
    }

    // Incrementar el ID autoincrementable
    this.lastId++;

    // Crear el nuevo producto
    const newProduct = {
      id: this.lastId,
      title,
      description,
      price,
      thumbnail,
      stock,
    };

    // Agregar el producto al arreglo de productos
    this.products.push(newProduct);

    //console.log("Producto agregado correctamente:", newProduct);
  }

  // retorna un listado de todos los productos en formato JSON
  getProducts() {
    return this.products;
  }

  // RETORNA UN PRODUCTO POR MEDIO DE SU ID
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.error("Producto no encontrado.");
      return;
    }
    return product;
  }

  // RETORNA EL STOCK DE UN PRODUCTO POR MEDIO DE SU ID
  getProductStockById(id) {
    const product = this.getProductById(id);
    if (!product) {
      console.error("Producto no encontrado.");
      return;
    }
    return product.stock;
  }

  removeProductById(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      console.error("Producto no encontrado.");
      return;
    }
    this.products.splice(index, 1);
    console.log(`Producto con ID ${id} eliminado correctamente.`);
  }

  updateProductById(id, updatedProduct) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      console.error("Producto no encontrado.");
      return;
    }
    this.products[index] = { ...this.products[index], ...updatedProduct };
    console.log(`Producto con ID ${id} actualizado correctamente.`);
  }
}

const productManager = new ProductManager();

productManager.addProduct(
  "Zapatilla",
  "Clasicas de cuero",
  3000,
  "url:#img",
  20
);

productManager.addProduct("Camiseta", "De algodón", 1500, "url:#img", 30);
productManager.addProduct("Pantalon", "Tela", 4000, "url:#img1", 20);
productManager.addProduct("Poleron", "Algodon", 5000, "url:#img1", 40);
productManager.addProduct("Zapatos", "Formales", 6000, "url:#img1", 40);

console.log(productManager.getProducts()); // Devuelve el listado de productos
console.log(productManager.getProductStockById(1)); // Obtener el stock del producto con ID 1
console.log(productManager.getProductById(2)); // devuelve el producto ingresando el id

productManager.removeProductById(1); // Elimina el producto con ID 1
// Modificar el producto con ID 1
productManager.updateProductById(1, {
  title: "Zapatillas deportivas",
  description: "Modelo deportivo",
  price: 3500,
});
