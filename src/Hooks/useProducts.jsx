import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useProducts = () => {
    const publicAxios = usePublicAxios();

    const {refetch: refetch, data: product = [], } = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await publicAxios.get('/products');
            return res.data;
        }
    })
    return [product, refetch]
};

export default useProducts;