import mongoose from "mongoose";

// We hv used function Schema in Mongoose for validation of data.
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        // to Avoid duplicates of Products,id should be unique.
        // That helps in adding unique products in Database. 
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
}); 

const Product = mongoose.model('product' , productSchema);// collection of Product of type productSchema

export default Product;
