//Based on this implementation, it seems that the SRP is being followed.The Product class has a 
//single responsibility of representing a product, and the ProductPurchase class has a single 
//responsibility of performing a purchase of a product.
// solution
namespace SrpSimpleSolution{
    class Product {
        public name: string;
        public description: string;
        public price: number;
    }
    
    class ProductPurchase {
        public purchase(product: Product) {
            //implementation
        }
    }
    
    class InovoiceGenerator{
        public generateInovoice(product: Product) {
            
        }
    }
}





