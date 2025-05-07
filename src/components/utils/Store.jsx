import { configureStore} from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const store=configureStore({
    reducer :{
        AppSlice:AppSlice
    }
});
export default store;