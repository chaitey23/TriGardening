import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ProductsPage from "../pages/ProductsPage";
import BlogPage from "../pages/BlogPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import BlogDetails from "../pages/BlogDetails";
import AboutPage from "../pages/AboutPage";
import AIChatbotPage from "../pages/AIChatbotPage";
import CartPage from "../pages/CartPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckOutPage from "../pages/CheckOutpage";
import OrderConfirmationPage from "../pages/OrderConfrim";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [{
            index: true,
            element: <Home></Home>
        },
        {
            path: "/products",
            element: <ProductsPage></ProductsPage>
        },
        {
            path: '/products/:id',
            element: <ProductDetailsPage></ProductDetailsPage>
        },
        {
            path: "/blogs",
            element: <BlogPage></BlogPage>
        },
        {
            path: "/blogs/:id",
            element: <BlogDetails></BlogDetails>
        },
        {
            path: "/about",
            element: <AboutPage></AboutPage>
        },
        {
            path: "/botPage",
            element: <AIChatbotPage></AIChatbotPage>
        },
        {
            path: "/cart",
            element: <CartPage></CartPage>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/checkout",
            element: <CheckOutPage></CheckOutPage>
        },
        {
            path: "/confirm",
            element: <OrderConfirmationPage></OrderConfirmationPage>
        }


        ]
    },
]);