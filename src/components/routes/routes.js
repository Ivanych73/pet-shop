import { BrowserRouter, Routes, Route } from "react-router-dom";
import {getCatalog} from "../../data/getdata";
import Catalog from "../catalog/catalog";
import { Detail } from "../catalog/goods/detail/detail";
import { Header } from "../header/header";

export const Routing = () => {
    const goods = getCatalog();
    return (  
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/detail/:goodId" element={<Detail/>} />
                <Route path="/" element={<Catalog goods={goods} />} />
            </Routes>
        </BrowserRouter>
    );
}