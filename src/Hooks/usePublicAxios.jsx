import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://server-lovat-ten.vercel.app',
  });
const usePublicAxios = () => {
    return publicAxios ;
};

export default usePublicAxios;