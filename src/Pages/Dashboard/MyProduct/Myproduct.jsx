import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useProducts from "../../../Hooks/useProducts";
import usePublicAxios from "../../../Hooks/usePublicAxios";
import Swal from "sweetalert2";

const Myproduct = () => {
    const { user } = useAuth();
    const [product, refetch] = useProducts();
    const publicAxios = usePublicAxios();
    const myproduct = product.filter(item => item.user_email === user.email)
    console.log(myproduct);

    const handelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                publicAxios.delete(`/product/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-center font-bold text-3xl">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Product Name</th>
                            <th>Vote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproduct.map((product, index) => <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.product_name}</td>
                                <td>{product?.vote}</td>
                                <td><Link to={`${product._id}`}><button className="bg-green-600 hover:bg-green-700 px-2 md:px-5 py-2 text-white font-semibold text-md lg:text-lg rounded-md">Update</button></Link></td>
                                <td><button onClick={() => handelDelete(product._id)} className="bg-red-600 hover:bg-red-700 px-2 md:px-5 py-2 text-white font-semibold text-md lg:text-lg rounded-md">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myproduct;