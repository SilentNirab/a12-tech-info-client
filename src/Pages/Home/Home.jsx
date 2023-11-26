import Banner from "../../Components/Banner/Banner";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <TrendingProducts></TrendingProducts>
        </div>
    );
};

export default Home;