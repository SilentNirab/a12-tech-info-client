import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";


const useReviews = () => {
    const publicAxios = usePublicAxios();

    const {refetch: refetch , data: review = []} = useQuery({
        queryKey: ['reviews'], 
        queryFn: async() =>{
            const res = await publicAxios.get('/reviews');
            return res.data;
        }
    })
    return [review, refetch]
};

export default useReviews;