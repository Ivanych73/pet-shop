import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getCatalog} from "../../data/getdata";
import Catalog from "../catalog/catalog";
import { Detail } from "../catalog/goods/detail/detail";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Login } from "../user/login/login";
import { Register } from "../user/register/register";

export const Routing = () => {
    const goods = getCatalog();
    const headerLinks = {
        loginMessage: "Вы пока не авторизованы",
        loginLink: {
            text: "Войти"
        }
    }
    
    return (  
        <BrowserRouter>
            <Header headerLinks={headerLinks}/>
            <Routes>
                <Route path="/detail/:goodId" element={<Detail/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login message="Вы пока не авторизованы"/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Catalog goods={goods} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}