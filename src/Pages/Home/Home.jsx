import Banner from "../../Components/Banner/Banner";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Tech-info | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;