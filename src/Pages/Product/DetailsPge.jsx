import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";
import useReviews from "../../Hooks/useReviews";
import Votebutton from "../../Components/Votebutton";

const DetailsPge = () => {
    const { user } = useAuth();
    const publicAxios = usePublicAxios()
    const { id } = useParams();
    const [product, loading] = useProducts();
    const productDetails = product.find(items => items._id === id)
    const [rating, setRating] = useState(0);
    const [review, refetch] = useReviews();
    const reviews = review.filter(item => item.product_id === id)
    if (loading) {
        return
    }

    const handleReview = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const comment = form.get('comment');
        const ratings = rating;
        const user_displayName = user.displayName;
        const user_photo = user.photoURL;
        const product_id = id;
        const review = { comment, ratings, user_displayName, user_photo, product_id }
        console.log(review);
        publicAxios.post('/reviews', review)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Post successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                
            })
    }
    return (
        <div>
            <div className="card md:max-w-3xl lg:max-w-5xl bg-base-100 shadow-xl mx-auto my-5">
                <figure className="w-full" ><img src={productDetails.product_image} alt="car" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{productDetails.product_name}</h2>
                    <p className="text-lg font-normal">{productDetails.tag.map(obj => <span className="" key={obj.id}>{obj.text}</span>)}</p>
                    <p>{productDetails.description}</p>
                    <div className="card-actions justify-end">
                        <Votebutton id={productDetails._id} vote={productDetails.upvote_button}></Votebutton>
                    </div>
                    
                </div>
            </div>
            <div className="max-w-4xl m-auto">
                <h2 className="text-center text-2xl">Reviews</h2>
                <div className="flex flex-col gap-3 mt-14">
                    {
                        reviews.map(review => <div key={review._id} className="flex flex-col gap-4 bg-white shadow-md p-4 mb-4">
                            <div className="flex justify justify-between">
                                <div className="flex gap-2">
                                    <div className="w-7 h-7 text-center rounded-full bg-yellow-500"><img className="rounded-full" src={review?.user_photo} alt="" /></div>
                                    <span>{review.user_displayName}</span>
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
                                <p>{review.comment}</p>
                            </div>

                            <div className="flex justify-between">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.ratings}
                                    readOnly
                                />
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="max-w-4xl m-auto my-8">
                <div className="">
                    <form onSubmit={handleReview} className="w-full bg-white shadow-md rounded-lg p-4 pt-2">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new review</h2>
                            <div className="w-full md:w-full px-3 mb-2 mt-2">
                                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="comment" placeholder='Type Your Comment'></textarea>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                    isRequired
                                />
                            </div>
                            <div className="w-full md:w-full flex items-start px-3">
                                <div className="-mr-1">
                                    <input type='submit' className="btn text-black bg-[#F36F21] hover:bg-[#ff833c]" value='Post Review' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DetailsPge;