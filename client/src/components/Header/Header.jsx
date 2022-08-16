import { useState } from "react";

import { AppBar, Toolbar , styled,Box, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";

import { Menu } from '@mui/icons-material';

import React from "react";
import CustomButtons from "./CustomButtons";

import { Link } from "react-router-dom";

// Component
import Search from "./Search";

// To handle the CSS we hv made these variables
const StyledHeader = styled(AppBar)`
 background : #2874f0;
 height : 55px;

`
const Component = styled(Link)`
margin-left : 12%;
line-height : 0;
text-decoration: none;
color: inherit;  // Color inherit from parent
`

const SubHeading = styled(Typography)`
font-size: 10px; 
font-style: italic;
` 
 
// DownLine Shows this is how we handle Css of HTML element Tag
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft : 4,
  // marginLeft is Given in Camel Case when html element css to be changed.

})
// when you are writing css in object then you don't need to write px as above.

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin : '0 5%',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
   display: 'none',
   [theme.breakpoints.down('md')]: {
      display: 'block',
   } 
}));

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false); // Initially drawer should be close.

  const handleOpen = () => {
     setOpen(true);
  }

  const handleClose = () => {
     setOpen(false);
  }

  const list = () => (
    <Box style={{ width: 200 }} >
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );

    return(
      <StyledHeader>
        <Toolbar style={{ minHeight:55 }}>
          <MenuButton color="inherit" onClick={handleOpen}>
            <Menu />
          </MenuButton>

          <Drawer open={open} onClose={handleClose}>
              {list()}
          </Drawer>

          <Component to='/' >
              <img src={logoURL} alt="logo" style={{width: 75}}/>
              <Box style={{display : 'flex'}}>
                {/* To Handle CSS in through object we need to add flex in single comma */}
                {/* To Add Tag */}
                <SubHeading>Explore&nbsp; 
                  {/* &nbsp gives you Space  */}
                  {/* We uses span to make plus infront of Explore only */}
                <Box component="span" style={{color : '#FFE500'}}>Plus</Box>
                </SubHeading>
                <PlusImage src={subURL} alt="sub-logo" />
              </Box>
          </Component>
          <Search />
          <CustomButtonWrapper>
          <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    );

}

export default Header