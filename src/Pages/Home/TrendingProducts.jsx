import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FcUp } from 'react-icons/fc';
import Container from '../../Components/Container';
const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-20'>
            <Container>
                <div className="text-3xl font-bold text-center mb-10">Featured Products</div>
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
                        products.map(product => <SwiperSlide key={product.idx}>
                            <div className="card bg-base-100 shadow-xl mb-10">
                                <figure className="px-5 pt-5"><img className="h-56" src={product.product_image} alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.product_mame}</h2>
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