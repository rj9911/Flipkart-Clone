import mongoose from "mongoose";

export const Connection = async (URL) => {
    
    try {
        await mongoose.connect(URL , { useUnifiedTopology : true, useNewUrlParser : true});
        console.log('DataBase connected successfully');

        // Mongoose hv connect function through which we connect our database.
    } catch(error){
        console.log("Error while connecting with the database" , error.message);
    }

}  
 
export default Connection;