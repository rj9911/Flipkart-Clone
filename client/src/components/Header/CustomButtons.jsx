import { Box, Button, Typography ,styled, Badge} from "@mui/material";

import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from "../login/LoginDialog";

import React from "react";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Profile from './Profile';

// we hv imported from Shopping Cart in icons-material

import { DataContext } from "../context/DataProvider";
import CartItem from "../cart/CartItem";

const Wrapper = styled(Box)(({ theme }) => ({
  display : 'flex',
  // To hv space between Login and others
  margin: '0 3% 0 auto',
  // Left Right Bottom (To Align left side)
  '& > *' :{ // Effect on all parent components 
    marginRight : '40px !important',
    fontSize : 16,
    alignItems : 'center',
   // There will be space from the right side of 40px
  },
  // By default Box gives div, typography gives p.
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}));

const Container = styled(Link)(({ theme }) => ({ 
  textDecoration: 'none',
  color: 'inherit',
  display : 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  }
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  // text Color
  background : #fff;
  text-transform : none;
  // As by default texttransform is in UpperCase.
  padding : 5px 40px;
  // top-bottom -> 5px, left-right -> 40px so that width increases
  border-radius : 2px;
  box-shadow: none;
  font-weight: 600; // bold
  height: 32px;
`
  
const CustomButtons = () => {
  
  const [open,setOpen] = useState(false);
  // This will toggle the state of Login btn. initial value is False.
  const {account , setAccount} = useContext(DataContext);

  const { cartItems } = useSelector(state => state.cart);

  const openDialog = () =>{
        setOpen(true);
        // setOpen value gets True.
  }

  return(
    <Wrapper>
       {
           account ? <Profile account={account} setAccount={setAccount} /> :
          <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>     
       }
         
         <Typography style={{marginTop: 3,width:135, marginLeft: 3}}>Become a Seller</Typography>
         <Typography style={{marginTop :3, }}>More</Typography>

         <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
               <ShoppingCart />
            </Badge>
            <Typography style={{ marginLeft: 10}}>Cart</Typography>
         </Container>
         <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons;