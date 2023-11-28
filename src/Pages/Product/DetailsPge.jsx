import { Link, useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const DetailsPge = () => {
    const { id } = useParams();
    const [product] = useProducts();
    const productDetails = product.find(items => items._id === id)
    const {product_image , product_name} = productDetails;


    return (
        <div>
            <div className="card md:max-w-3xl lg:max-w-5xl bg-base-100 shadow-xl mx-auto my-5">
                <figure className="w-full" ><img src={product_image} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{product_name}</h2>
                    <h3 className="text-lg font-medium"><span className='text-xl font-bold'>Price: </span>{} $</h3>
                    <p className="text-lg font-normal"><span className='text-xl font-bold'>Discription: </span>{}</p>
                    <p><span className='text-xl font-bold'>Rating: </span>{}</p>
                    <div className="card-actions justify-end">
                        <Link ><button className="btn bg-gray-200"> Add to Cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPge;