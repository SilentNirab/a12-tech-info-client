import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import Tags from "./Tag/Tags";

const AddProduct = () => {
    const { user } = useAuth()
    const publicAxios = usePublicAxios()

    // State for tags
    const [tags, setTags] = useState([]);

    const handelAddProduct = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const image = form.get("image");
        const name = form.get("name");
        const description = form.get("description");
        const tag = tags;
        const user_name = user.displayName;
        const user_photo = user.photoURL;
        const user_email = user.email;

        const product = { image, name, tag, description, user_name, user_photo, user_email };
        console.log(product);
        // send data to the server

        publicAxios.post('/products', product)
            .then(res => {
                console.log(res.data);

            })
    }
    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-4">Add Your Products</h2>
            <form onSubmit={handelAddProduct} className="card-body 2 max-w-md mx-auto">

                <input type="text" name="image" placeholder="Image" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />
                <input type="text" name="name" placeholder="Name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" required />

                {/* user info */}
                <input type="text" name="user_name" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.displayName} required />
                <input type="text" name="user_photo" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.photoURL} required />
                <input type="text" name="user_email" className="border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" disabled defaultValue={user.email} required />

                <textarea name="description" placeholder="Short description" className=" border-b-2 border-black focus-visible:outline-none p-4 bg-transparent" ></textarea>
                <Tags tags={tags} setTags={setTags}></Tags>
                <div className="form-control mt-6">

                    <button className="bg-black w-full text-white text-md font-bold px-4 py-2 rounded-md">Add Product</button>

                </div>
            </form >
        </div >
    );
};

export default AddProduct;