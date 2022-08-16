import React from "react";

import { useState, useEffect } from "react";

import { InputBase , Box, styled, List, ListItem} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux'; // used to take out products from redux state
import { getProducts } from "../../redux/actions/productActions"; // helps to get products
import { Link } from "react-router-dom";

// To handle the CSS of MAterialUI components we use Down lines
const SearchContainer = styled(Box)`
    background : #fff;
    width : 38%;
    border-radius : 2px;
    margin-left: 10px;
    // To hv smallGap between the input box and explore
    display :flex;
`
// We are handling the CSS here by using styled function.
const InputSearchBase = styled(InputBase)`
  padding-left : 20px;
  width : 100%;
  font-size : unset;
//   So that it inputBox catch up the parent FontSIze
`

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding : 5px;
  display : flex;
`

// To handle CSS of List
const ListWrapper = styled(List)`
  position: absolute; // To make searches of letters visible in the list.
  background: #FFFFFF;
  color: #000;
  margin-top: 36px;
`

const Search = () => {

  // we hv here a state using useState
  const [ text, setText ] = useState('');

  const getText = (text) => {
    setText(text);
}

  // By using useSelector we are able to take out the products from the state
  const { products } = useSelector(state => state.getProducts);

  const dispatch = useDispatch();

  // By using useEffect we can directly call an API
  useEffect(() => {
      dispatch(getProducts());
  },[dispatch])

   return (
   <SearchContainer>
    <InputSearchBase
     placeholder="Search for products, brands and more"
     onChange={(e) => getText(e.target.value)}
     value={text}
     />
     <SearchIconWrapper>
        <SearchIcon />
    </SearchIconWrapper>
    {
      text && 
        <ListWrapper>
           {
               products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link to={`product/${product.id}`} onClick={() => setText('')} 
                   style={{ textDecoration: 'none', color: 'inherit'}}
                  >
                   {product.title.longTitle}
                  </Link>
                </ListItem>
               ))
           }
        </ListWrapper>
    }
   </SearchContainer>
   

   )
}

export default Search;