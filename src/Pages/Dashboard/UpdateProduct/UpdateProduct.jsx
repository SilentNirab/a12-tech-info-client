import Swal from "sweetalert2";
import Tags from "../Addproduct/Tag/Tags";
import useAuth from "../../../Hooks/useAuth";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import { useParams } from "react-router-dom";


const UpdateProduct = () => {
    const {id} = useParams()
    const { user } = useAuth()
    const [product] = useProducts()
    const publicAxios = usePublicAxios()
    const productUpdate = product.filter(items => items._id === id)

    // State for tags
    const [tags, setTags] = useState([]);

    const handelUpdateProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const product_image = form.get("image");
        const product_name = form.get("name");
        const description = form.get("description");
        const tag = tags;
        const user_name = user.displayName;
        const user_photo = user.photoURL;
        const user_email = user.email;

        const productinfo = { product_image, product_name, tag, description, user_name, user_photo, user_email };

        publicAxios.put(`/products/${id}`, productinfo)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged == true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Product added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error("Error adding product:", error);
            });
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Update Your Products</h2>
            <form onSubmit={handelUpdateProduct} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="image" placeholder="Image" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" defaultValue={productUpdate[0].product_image} required />
                <input type="text" name="name" placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" defaultValue={productUpdate[0].product_name} required />

                {/* user info */}
                <input type="text" name="user_name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.displayName} required />
                <input type="text" name="user_photo" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.photoURL} required />
                <input type="text" name="user_email" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.email} required />

                <textarea name="description" placeholder="Short description" className=" border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" defaultValue={productUpdate[0].description} ></textarea>
                <Tags tags={tags} setTags={setTags} defaultValue={productUpdate[0].tag} ></Tags>
                <div className="form-control mt-6">
                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Update Product</button>
                </div>
            </form >
        </div >
    );
};

export default UpdateProduct;