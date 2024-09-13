class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
      }
    displayProduct(){
        console.log('Product:' + this.name);
        console.log('Product: ' + this.price.toFixed(2));
        {}}
    
    calculateTotal(salesTax){
        return (this.price + (this.price * salesTax)).toFixed(2);
        }
    }
    const salesTax =15;
    const product1 = new Product("Adidas Samba", 6800);
    const product2 = new Product("Nike Air Force", 5495);
    const product3 = new Product("Puma Fast-R Nitro ", 13737);
   
    product1.displayProduct();
    product2.displayProduct();
    product3.displayProduct();
   