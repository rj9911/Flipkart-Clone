import { products } from "./constants/data.js"
import Product from "./model/product-schema.js";


const DefaultData = async() => {
    try {
       // To add Products data in Data base after Checking we use insert Function alse there are many other function are there as insertMany nad many more.  
       await Product.insertMany(products);
       console.log("Data imported Successfully");    
    } catch(error) {
       console.log("Error while Inserting default data" , error.message);
    }
}

// we need to export to import this in my index.js file
export default DefaultData;