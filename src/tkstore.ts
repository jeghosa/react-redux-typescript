import { configureStore} from  "@reduxjs/toolkit"
import uReducer from "./slice/uslice"
import apis from "./slice/api"
import contapi from "./slice/contapi"
import iReducer from "./slice/itemsl"
const store= configureStore({reducer:{user:uReducer,items:iReducer, [apis.reducerPath]:apis.reducer, [contapi.reducerPath]:contapi.reducer},
 middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([apis.middleware, contapi.middleware])})

 export default store