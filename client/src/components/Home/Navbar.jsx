import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../constants/data";


const Component = styled(Box)(({theme}) => ({
      display: 'flex',
      margin : '55px 130px 0 130px',
      // top right bottom left margins
      justifyContent: 'space-between',
     // overflow: 'overlay', // To hv ScrollBar when screen overflow occurs.
      overflow: 'overlay', // To hv ScrollBar when screen overflow occurs.
      // Not hyphen case it's should be Camel Case
     
      [theme.breakpoints.down('lg')]: {
        margin: 0
      }
}))

const Container = styled(Box) `
      padding: 12px 8px
      //top right-left 
      text-align : center;
`

const Text = styled(Typography)`
    font-size : 14px;
    font-weight: 600; // to make bold
    font-family: inherit // parent family

`

const Navbar = () => {
   return(
    <Box style={{ background: '#fff'}}>
    <Component>
         {
            navData.map(data => (
                <Container>
                    <img src={data.url} alt="nav" style={{width: 64}}/>
                    <Typography>{data.text}</Typography>
                </Container>
            ))
         }
    </Component>
    </Box>
   )
}

export default Navbar;