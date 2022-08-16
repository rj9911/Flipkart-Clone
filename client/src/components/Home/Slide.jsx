import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box,Typography,Button,Divider,styled } from "@mui/material";

import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
      // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component =styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`

const Deal = styled(Box) `
   padding: 15px 20px; // Top-Bottom left-right
   display: flex;
`

const Timer = styled(Box)`
   display: flex;
   margin-left: 10px;
   align-items: center;
   color: #7f7f7f;
 `

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 25px;
  line-height: 32px
` 

const ViewAllButtton = styled(Button)`
  margin-left: auto; // To hv button at ery Leftmost Point
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`
const Image = styled('img')({
  width: 'auto', // Width now managed by height
  height: 150
})

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`

const Slide = ({ products, title, timer}) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours , minutes, seconds }) => {
         return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }

    return (
        <Component>
        <Deal>
               <DealText>{title}</DealText>
               {
                  timer &&   // if timer is true then show else not
                  <Timer>
                  <img src={timerURL} alt="timer" style={{ width:24 }} />
                  <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                  </Timer>
               }
              
               <ViewAllButtton variant="contained" color="primary">View All</ViewAllButtton>
        </Deal>
        <Divider />
        <Carousel
         responsive={responsive}
         swipeable={false}
         draggable={false} // Props given to make swipe and drag not works 
         infinite={true} // prop used to make infinite scrolling
         autoPlay={true} // prop used to hv autoplay true.
         autoPlaySpeed={2000} // given 4 sec
         keyBoardControl={true}
         centerMode={true}
         slidesToSlide={1} // To hv how may slide to be translated on one clk.
         dotListClass="custom-dot-list-style"
        // These all four are called props used in . 
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container"
         >
           {
            products.map(product => (
              <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                <Box textAlign="center" style={{padding: '25px 15px'}}>
                    <Image src={product.url} alt="product" />
                    <Text style={{ fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Text>
                    <Text style={{ color: 'green'}}>{product.discount}</Text>
                    <Text style={{ color: '#212121' , opacity: '.6'}}>{product.tagline}</Text>
                </Box> 
              </Link>
            ))
           } 
        </Carousel>
        </Component>
    )
}

export default Slide;