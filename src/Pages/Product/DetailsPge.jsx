import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const DetailsPge = () => {
    const { id } = useParams();
    const [product, loading] = useProducts();
    const productDetails = product.find(items => items._id === id)
    if (loading) {
        return
    }
    return (
        <div>
            <div className="card md:max-w-3xl lg:max-w-5xl bg-base-100 shadow-xl mx-auto my-5">
                <figure className="w-full" ><img src={productDetails.product_image} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{productDetails.product_name}</h2>
                    <p className="text-lg font-normal">{productDetails.tags}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-gray-200"> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl m-auto">
                <h2 className="text-center text-2xl">Reviews</h2>
                <div className="flex flex-col gap-3 mt-14">
                    <div className="flex flex-col gap-4 bg-white shadow-md p-4 mb-4">
                        <div className="flex justify justify-between">
                            <div className="flex gap-2">
                                <div className="w-7 h-7 text-center rounded-full bg-yellow-500">A</div>
                                <span>Alice Banks</span>
                            </div>
                            <div className="flex p-1 gap-1 text-orange-300">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>

                            </div>
                        </div>

                        <div>
                            The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.
                        </div>

                        <div className="flex justify-between">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPge;