import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useProducts = () => {
    const publicAxios = usePublicAxios();

    const {data: product = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await publicAxios.get('/products');
            return res.data;
        }
    })
    return [product, loading, refetch]
};

export default useProducts;