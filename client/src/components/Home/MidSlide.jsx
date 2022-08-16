import { Box,styled } from "@mui/material";

import Slide from './Slide';

const Component = styled(Box) `
  display: flex;
`
const LeftComponent = styled(Box)(({theme}) => ({
  width: '83%',
  [theme.breakpoints.down('md')]:{
     width: '100%',
  }
}))
const RightComponent = styled(Box)(({theme}) => ({
  background: '#FFFFFF', // White
  padding: 5,
  marginTop: 10,
  marginLeft: 10,
  width: '17%',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const MidSlide = ({products, title, timer}) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
     <Component>
        <LeftComponent>
            {/* Slider */}
            <Slide 
                 products={products} 
                 title={title}
                 timer={timer}/>
        </LeftComponent>
        <RightComponent>
            {/* Advertisement */}
            <img src={adURL} alt="ad" style={{width: 217 }}/> 
        </RightComponent>
     </Component>
   )
}