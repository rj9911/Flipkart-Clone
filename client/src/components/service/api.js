import axios from 'axios';

const URL = '';

export const autheticationSignup = async (data) => {
    try{
       return await axios.post(`${URL}/signup`, data)
    } catch(error) {
      console.log('Error while calling signup api' , error);
    }
}

export const autheticationLogin = async (data) => {
    try{
       return await axios.post(`${URL}/login`, data);
    } catch(error) {
      console.log('Error while calling login api' , error);
      //return error.response;
    }
}

export const payUsingPaytm = async (data) => {
   try{
      let response = await axios.post(`${URL}/payment`, data);
      return response.data;
      // Post API basically sends the data to backend while making a hit on API, 
   }catch(error) {
      console.log('Error while calling payment API', error);
   }
}