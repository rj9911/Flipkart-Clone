
import React from 'react';
import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material';

import { LocalOffer as Badge } from '@mui/icons-material';

// Aligned vertically
const SmallText = styled(Box)`
   font-size: 14px;
   vertical-align: baseline;
   & > p {
     font-size: 14px;
     margin-top: 10px;
   }
`;
// Green Color
const StyledBadge = styled(Badge)`
   margin-right: 10px;
   color: #00CC00;
   font-size: 15px;

`;

// Table cell is actually called td. as here HTML is only used.
const ColumnText = styled(TableRow)`
   font-size: 14px;
   vertical-align: baseline;
   & > td {
       font-size: 14px;
       margin-top: 10px;
       border: none;
   }
`

const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000)); // Time convert to milisecond.
   return (
    <> 
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14}}>
            8 Ratings & 1 Reviews            
            <Box component="span"><img src={fassured} style={{width: 77, marginLeft: 20}}/></Box>            
      </Typography>
      <Typography>                  
      <Box component="span" style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;                      
      <Box component="span" style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;                     
      <Box component="span" style={{ color: '#388E3C' }}>{product.price.discount}</Box>
      </Typography>                        
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography><StyledBadge/>Get extra 12% off (price inclusive of cashback/coupon) T&C</Typography>
        <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500* Know More</Typography>
        <Typography><StyledBadge/>10% off on Citi Credit and Debit Cards, up to ₹3,000. On orders of ₹1,500 and above T&C</Typography>
        <Typography><StyledBadge/>10% off on Bank of Baroda Credit Cards, up to ₹1,500. On orders of ₹1,500 and above T&C</Typography>
        <Typography><StyledBadge/>10% off on OneCard Credit Cards, up to ₹1,500. On orders of ₹1,500 and above T&C</Typography>
        <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card T&C</Typography>
      </SmallText>
      <Table>
        <TableBody>
            <ColumnText>
                <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                <TableCell >No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                <TableCell >
                    <Box component="span" style={{ color: '#2874f0' }}>AdaniNetCom</Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell colSpan={2}>
                    <img src={adURL} style={{width: 300}} alt="Flipkartpoints" />
                </TableCell>
            </ColumnText>
            <ColumnText>
                <TableCell style={{ color: '#878787' }}>Description</TableCell>
                <TableCell >{product.description}</TableCell>
            </ColumnText>
        </TableBody>
      </Table>
    </>
  )
}

export default ProductDetail