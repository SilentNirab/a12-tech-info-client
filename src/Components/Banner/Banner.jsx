// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';

//Images
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import Container from '../Container';
const Banner = () => {
    return (
        <div className='p-4'>
            <Container>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Autoplay, Pagination,]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="h-[calc(100vh-70px)] flex flex-col-reverse md:flex-row md:justify-between items-center py-20">
                            <div className="md:w-2/4 space-y-4">
                                <p className="text-gray-400">Enhanced Technology</p>
                                <h2 className='text-6xl text-[#F36F21]'>SMART <span className='text-black'>TV</span></h2>
                                <p className='md:max-w-lg'>The ship set ground on the shore of this uncharted desert isle
                                    with Gilligan the Skipper too the millionaire and his story.</p>
                                <button className='btn text-black bg-[#F36F21] hover:bg-transparent hover:border-[#F36F21] border-2'>View Details</button>
                            </div>
                            <div className="">
                                <img className='h-56 md:h-auto' src={img1} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[calc(100vh-70px)] flex flex-col-reverse md:flex-row md:justify-between items-center py-20 space-x-4">
                            <div className="md:w-2/4 space-y-4">
                                <p className="text-gray-400">Enhanced Technology</p>
                                <h2 className='text-6xl text-[#F36F21]'>SMART <span className='text-black'>TV</span></h2>
                                <p className='md:max-w-lg'>The ship set ground on the shore of this uncharted desert isle
                                    with Gilligan the Skipper too the millionaire and his story.</p>
                                <button className='btn text-black bg-[#F36F21] hover:bg-transparent hover:border-[#F36F21] border-2'>View Details</button>
                            </div>
                            <div className="">
                                <img className='h-56 md:h-auto' src={img2} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[calc(100vh-70px)] flex flex-col-reverse md:flex-row md:justify-between items-center py-20">
                            <div className="md:w-2/4 space-y-4">
                                <p className="text-gray-400">Enhanced Technology</p>
                                <h2 className='text-6xl text-[#F36F21]'>SMART <span className='text-black'>TV</span></h2>
                                <p className='md:max-w-lg'>The ship set ground on the shore of this uncharted desert isle
                                    with Gilligan the Skipper too the millionaire and his story.</p>
                                <button className='btn text-black bg-[#F36F21] hover:bg-transparent hover:border-[#F36F21] border-2'>View Details</button>
                            </div>
                            <div className="">
                                <img className='h-56 md:h-auto' src={img3} />
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </Container>
        </div>
    );
};

export default Banner;