import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { FcUp } from 'react-icons/fc';
import Container from '../../Components/Container';
import useProducts from '../../Hooks/useProducts';
import { Link } from 'react-router-dom';
const TrendingProducts = () => {
    const [product] = useProducts();
    const products = product.slice(0, 6);
    return (
        <div className='my-20'>
            <Container>
                <div className="text-3xl font-bold text-center mb-10">Trending Products</div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        products.map(product => <SwiperSlide key={product._id}>
                            <div className="card bg-base-100 shadow-xl mb-10">
                                <figure className="px-5 pt-5"><img className="h-56" src={product.product_image} alt="Movie" /></figure>
                                <div className="card-body">
                                    <Link to={`/product/${product._id}`}><h2 className="card-title hover:text-[#ff833c]">{product.product_name}</h2></Link>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn text-black bg-[#F36F21] hover:bg-[#ff833c]">Up<FcUp></FcUp>({product.upvote_button}) </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </div>
    );
};

export default TrendingProducts;