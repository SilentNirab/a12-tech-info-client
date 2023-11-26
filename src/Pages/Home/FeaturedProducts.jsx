import { useEffect, useState } from "react";
import Container from "../../Components/Container";
import { FcUp } from "react-icons/fc";

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 4)))
    }, [])
    console.log(products);
    return (
        <div className="my-4">
            <Container>
                <div className="text-3xl font-bold text-center mb-10">Featured Products</div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        products.map(product => <div key={product.indx} className="card bg-base-100 shadow-xl">
                            <figure className="px-5 pt-5"><img className="h-56" src={product.product_image} alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.product_mame}</h2>
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