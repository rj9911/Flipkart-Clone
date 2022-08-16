import Carousel from "react-multi-carousel";
import { bannerData } from "../constants/data";
import { styled } from "@mui/material"
import 'react-multi-carousel/lib/styles.css';
import { convertLength } from "@mui/material/styles/cssUtils";

const Image = styled('img')(({theme}) => ({
    width: '100%',
    height : 280,
    [theme.breakpoints.down('md')]: {
      objectFit: 'cover',
      height: 180
    }
}))


const responsive = {
      // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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

const Banner = () => {
    return (
        <Carousel
        responsive={responsive}
        // These are props and are added to make smooth functioning of carousel working.
        swipeable={false}
        draggable={false} // Props given to make swipe and drag not works 
        infinite={true} // prop used to make infinite scrolling
        autoPlay={true} // prop used to hv autoplay true.
        autoPlaySpeed={2000} // given 4 sec
        keyBoardControl={true}
        slidesToSlide={1} // To hv how may slide to be translated on one clk.
        dotListClass="custom-dot-list-style"
        // These all four are called props used in . 
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                bannerData.map(data => (
                    <Image src={data.url} alt="" />
                ))
            }
        </Carousel>
    );
}

export default Banner;