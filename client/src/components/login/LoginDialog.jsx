import { Dialog, Box, TextField ,Button, Typography, styled} from '@mui/material';
import { useState,useContext,useEffect } from 'react'; // useContext hook is used to make use of those States.

import { autheticationSignup, autheticationLogin } from '../service/api';

import {DataContext} from '../context/DataProvider';

const Component = styled(Box)`
height: 90vh; //70vh; // Total screen is 100vh
width : 110vh; //90vh;
`

const Image = styled(Box)`
   background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
   height : 83.2%;
   width: 30%;
   padding: 45px 35px; // Top-Bottom & Left-right
   & > h5{
    color: #FFFFFF;
    font-weight: 600;
   }  
`

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button , & > p{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB6418;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%); //Top Right left Bottom
`

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0; // Blue Colour
  font-weight: 600; // Bold
  cursor: pointer;
` 

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`
const Error = styled(Typography)`
   font-size: 10px;
   color: #ff6161;
   line-height: 0;
   margin-top: 10px;
   font-weight: 600;
`

const accountInitialValues = {
    login: { // Two objects
        view: 'login',  // if view is login
        heading: "Login",
        subHeading: 'Get access to your Orders, Wishlist and Recommendations',
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

// Initially At first State,we hv login form on screen.

const loginInitialValues = {
    username: '',
    password: ''
}


const LoginDialog = ({open,setOpen}) => {
    // Object Destructing Method is use here.
    const [account ,toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error , setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleclose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login); // To set when person open login it shows only login after closing Signup form.
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
      
    const onInputChange = (e) => {
        setSignup({...signup,[e.target.name] : e.target.value});
    }

    const signupUser = async() => {
       let response = await autheticationSignup(signup);
       if(!response) return;
        // await is put as it is asynchronous request.
       handleclose();
       setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
      let response = await autheticationLogin(login);
      if(response.status === 200) {
        
        handleclose();
        setAccount(response.data.data.firstname);
      } else {
        setError(true);
      }
    }


    return (
    <Dialog open={open} onClose={handleclose} PaperProps={{ sx: {maxWidth: 'unset'}}}>
        {/* To show that it is your dialog we use props as open = true. */}
    <Component>
     <Box style={{display: 'flex', height: "100%"}}>
      <Image>
        <Typography variant="h5">{account.heading}</Typography>
        <Typography variant="h5" style={{marginTop: 20}}>{account.subHeading}</Typography>
      </Image>
  {/*If true then login else signup btn*/}
{ 
    account.view === 'login' ?
      <Wrapper>
        <TextField variant="standard" onChange={(e) => {onValueChange(e)}} name='username' label="Enter Username/Mobile number"/>

        { error && <Error>Please enter Valid username or password</Error> }

        <TextField variant="standard" onChange={(e) => {onValueChange(e)}} name='password' label="Enter Password"/>
        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
         <LoginButton onClick={() => loginUser()}>Login</LoginButton>
         <Typography style={{textAlign: 'center'}}>OR</Typography>
         <RequestOTP>Request OTP</RequestOTP>
         <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
      </Wrapper>
      :
      <Wrapper>
      <TextField variant="standard" label="Enter Firstname" onChange={(e) => {onInputChange(e)}} name='firstname'/>
      <TextField variant="standard" label="Enter Lastname" onChange={(e) => {onInputChange(e)}} name='lastname'/>
      <TextField variant="standard"  label="Enter Username" onChange={(e) => {onInputChange(e)}} name='username'/>
      <TextField variant="standard" label="Enter Email" onChange={(e) => {onInputChange(e)}} name='email'/>
      <TextField variant="standard"  label="Enter Password" onChange={(e) => {onInputChange(e)}} name='password'/>
      <TextField variant="standard"  label="Enter Phone" onChange={(e) => {onInputChange(e)}} name='phone'/>
      <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
    </Wrapper>
}
     </Box>
    </Component>

    </Dialog>
  )
}

export default LoginDialog;

