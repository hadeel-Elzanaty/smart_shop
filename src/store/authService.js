import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const register = async(userData)=>{
    const response = await axios.post("http://localhost/MoviesApis/userApi/register.php", userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data
}
const authService ={register,}
export default authService;