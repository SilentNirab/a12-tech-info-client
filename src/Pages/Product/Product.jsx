import Container from "../../Components/Container";
import { FcUp } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useProducts from "../../Hooks/useProducts";


const Product = () => {
    const [product] = useProducts();
    const products = product;
    return (
        <div className="my-10">
            <Helmet>
                <title>Tech-info | Products</title>
            </Helmet>
            <Container>
                <div className="text-3xl font-bold text-center mb-10">Our Products</div>
                <div className="flex items-center max-w-md mx-auto bg-white rounded-lg">
                    <div className="w-full">
                        <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none" placeholder="search" />
                    </div>
                    <div>
                        <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-10">
                    {
                        products.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
                            <figure className="px-5 pt-5"><img className="h-56" src={product.product_image} alt="Movie" /></figure>
                            <div className="card-body">
                                <Link to={`/product/${product._id}`}><h2 className="card-title hover:text-[#ff833c]">{product.product_name}</h2></Link>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn text-black bg-[#F36F21] hover:bg-[#ff833c]">Up<FcUp></FcUp>({product.upvote_button}) </button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Container>
        </div >
    );
};

export default Product;