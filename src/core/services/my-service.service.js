import { api } from "@/core/api/axios.js";

const myService = async () => {
    const res = await api.instance_1.get("/character");
    return res.data;
}

export default myService; 