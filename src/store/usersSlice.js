
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import authService from "./authService";

// const user = JSON.parse(localStorage.getItem("user"));
// const initialState = {
//     user: user ?user: null,
//     isError: false,
//     isLoading: false,
//     isSuccess: false,
//     message: ""
// }
// //REGISTER USER
// export const signup = createAsyncThunk("users/signup",
//     async (user, thunkAPI) => {
//         try {

//             return await authService.register(user)
//         }
//         catch (err) {
//             const message = (err.response && err.response.data && err.response.data.message)
//                 || err.message || err.toString()
//             return thunkAPI.rejectWithValue(message)
//         }
//     })
// // export const signin = createAsyncThunk("users/signin",
// //     async (body) => {
// //         try {
// //             const response = await axios.post("http://localhost/MoviesApis/userApi/login.php", {
// //                 body
// //             })
// //             return response
// //         }
// //         catch (ex) {

// //         }
// //     })

// export const usersSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {
//         reset: (state) => {
//             state.isError = false
//             state.isLoading = false
//             state.isSuccess = false
//             state.message = ""
//         },
//         userLogin(state) {
//             state.user = localStorage.getItem("user");
//         },
//         addToken(state) {
//             state.token = localStorage.getItem("token");
//         },
//         userLogout(state) {
//             state.token = null;
//             localStorage.clear();
//         },
//     },
//     extraReducers: {
//         [signup.pending]: (state) => {
//             state.isLoading = true
//         },
//         [signup.fulfilled]: (state, action) => {
         
//             state.isLoading = false
//             state.isSuccess = true
//             state.user = action.payload
          
//         },
//         [signup.rejected]: (state) => {
//             state.isError = true
//             state.isLoading = false
//             state.user=null
//             state.message = action.payload 
//         },
//         // [signin.pending]: (state) => {
          
//         //     state.isError = true
//         //     state.isLoading = false
//         //     state.user=null
//         //     state.message = action.payload          

//         // },
//         // [signin.fulfilled]: (state, { payload: { error, msg, token, user } }) => {
//         //     state.loading = false
//         //     if (error) {
//         //         state.error = error;
//         //     } else {
//         //         state.msg = msg;
//         //         state.token = token;
//         //         state.user = user;
//         //         localStorage.setItem("token", token);
//         //         localStorage.setItem("user", JSON.stringify(user));
//         //         localStorage.setItem("msg", msg);

//         //     }
//         // },
//         // [signin.rejected]: (state) => {
//         //     state.loading = true
//         // }
//     }
// });

// export default usersSlice.reducer;
// export const { reset, userLogout, userLogin, addToken } = usersSlice.actions;