import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CakeGallary from "./CakeGallary";
import Carousel from "./Carousel";
import Conditionals from "./Conditionals";
import Error from "./Error";
import Support from "./Support";
import Support1 from "./Support1";
import Support2 from "./Support2";
import CardPage from "./CardPage";
import { Products } from "./Products";
import Users from "./Users";
import Cart from "./Cart"

const Router=createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                path:"/cakes",
                element: <CakeGallary/>
            },
            {
                path:"/carousel",
                element: <Carousel/>
            },
            {
                path:"/conditionals",
                element: <Conditionals/>
            },
            {
                path:"/products",
                element: <Products/>
            },
            {
                path:"/users",
                element: <Users/>
            },
            {
                path:"/cart",
                element: <Cart/>
            },
            {
                path:"/cakes/:id/:img",
                element: <CardPage/>
            },
            {
                path:"/support",
                element:<Support/>,
                children:[
                    {
                        path:"/support/support1",
                        element:<Support1/>
                    },
                    {
                        path:"/support/support2",
                        element:<Support2/>
                    }
                ]
            }
        ],
        errorElement:<Error/>
    },
    
])
export default Router;