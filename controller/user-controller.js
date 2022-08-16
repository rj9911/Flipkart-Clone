// In this File we put all the API's.
// API in backend server has two things -> request and response.
// Request -> Data comes from frontend to backend as request(URL, body)
// Response -> In Response data from backend is send and shown on frontend.
import User from "../model/user-schema.js";

export const userLogin = async(request,response) => {
  try{
     const username = request.body.username;
     const password = request.body.password;

    let user = await User.findOne({ username: username, password: password });
    if(user) {
        return response.status(200).json({data: user});
    } else {
        return response.status(401).json('Invalid Login');
    }
  } catch(error){
       response.status(500).json('Error ' , error.message);
       
  }
}

export const userSignup = async (request, response) => {
  try{

   const exist = await User.findOne({username: request.body.username});

   if(exist) {
      return response.status(401).json({message: 'Username already exist'})
    }

   const user  = request.body;
   const newUser = User(user);
   await newUser.save();  // To save the Data from frontend in database using save function
   
   response.status(200).json({message: user});
  } catch(error){
    response.status(500).json({ message: error.message });
  }
} 


