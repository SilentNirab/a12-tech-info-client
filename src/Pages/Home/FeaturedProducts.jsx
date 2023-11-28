import Container from "../../Components/Container";
import { FcUp } from "react-icons/fc";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const [product] = useProducts();
    const products = product.slice(0, 4);
    return (
        <div className="my-4">
            <Container>
                <div className="text-3xl font-bold text-center mb-10">Featured Products</div>
                <div className="grid grid-cols-4 gap-4">
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
            </Container >
        </div >
    );
};

export default FeaturedProducts;