import { Helmet } from "react-helmet-async";

import UseAuth from "../../Hooks/UseAuth";

import BookATable from "./SetAMeeting";
import SeeMore from "./SeeMore";
import Banner from "./Banner";

const Home = () => {
   
    const {loading} = UseAuth();
        if(loading){
        return <progress className="progress w-56"></progress>
    //   return  <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        
        <div>
            
            <Helmet>
            <title>TM | Home</title>
            </Helmet>
           <Banner></Banner>
           <SeeMore></SeeMore>
           {/* <SeasonalMenu></SeasonalMenu> */}
           <BookATable></BookATable>
          
        </div>
    );
};

export default Home;