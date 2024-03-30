import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
// import './styles.css';
import BreadLemon from "../../assets/images/sliderImage/BreadLemon.jpg";
// import BreadMilk from '../../assets/images/sliderImage/Bread-with-milk.jpg'
import pizza from "../../assets/images/sliderImage/pizza.jpg";
import steak from "../../assets/images/sliderImage/Steak-Dinner.jpg";
import salmonMeal from "../../assets/images/sliderImage/meal-with-salmon.jpg";
import meatBall from "../../assets/images/sliderImage/meatBall.jpg";
import pudding from "../../assets/images/sliderImage/Carrot-Pudding.jpg";
import { useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SwiperSlider = ({allFood}) => {
  const {food_image} = allFood;
  console.log(allFood);
  useEffect(() => {
    AOS.init();
    // AOS.refresh();
  }, []);

  return (
    <div className="max-h-[500px]">
      <Swiper
      
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img className="" src={BreadLemon} />
         
          
          
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
            
            <div className="text-white font-bold lg:space-y-8 w-full pl-12 space-y-8  ">
           
              <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                data-aos="fade-up"
                className="lg:text-5xl text-4xl hover:text-blue-600"
              >
                Bread Lemon
              </motion.h1>
              {/* <p>Good Food Good Health</p> */}

              <h1 className="text-3xl" data-aos="fade-up">
                <span className="   text-secondary">Affordable</span> Price
              </h1>

              <div>
                <button
                  data-aos="fade-up"
                  className="btn bg-blue-600 border-none text-white lg:mr-5 mr-1"
                >
                 <Link to="/allFoodItems"> Order Now!!</Link>
                </button>
                <button
                  data-aos="fade-up"
                  className="btn btn-outline btn-secondary mr-1 lg:mr-5"
                >
                  <Link to="/allFoodItems">See Details</Link>
                  
                </button>
                <button
                  data-aos="fade-up"
                  className="btn btn-outline btn-success"
                >
                  <Link to="/allFoodItems">All Food</Link>
                  
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pudding} />
          <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
            <div className="text-white font-bold lg:space-y-8 w-full pl-12 space-y-8  ">
              <motion.h1
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                data-aos="fade-up"
                className="lg:text-5xl text-4xl hover:text-blue-600"
              >
                Carrot Pudding
              </motion.h1>

              <h1 className="text-3xl" data-aos="fade-up">
                <span className="text-secondary">Affordable</span> Price
              </h1>

              <div>
                <button
                  data-aos="fade-up"
                  className="btn bg-blue-600 border-none text-white lg:mr-5 mr-1"
                >
                 <Link to="/allFoodItems"> Order Now!!</Link>
                </button>
                <button
                  data-aos="fade-up"
                  className="btn btn-outline btn-secondary mr-1 lg:mr-5"
                >
                  <Link to="/allFoodItems">See Details</Link>
                  
                </button>
                <button
                  data-aos="fade-up"
                  className="btn btn-outline btn-success"
                >
                  <Link to="/allFoodItems">All Food</Link>
                  
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
