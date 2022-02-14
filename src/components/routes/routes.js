import { BrowserRouter, Routes, Route } from "react-router-dom";
import {GetCatalog} from "../../data/GetCatalog";
import Catalog from "../catalog/Catalog";
import { Detail } from "../detail/detail";
import { Header } from "../header/header";

export const Routing = () => {
    const goods = GetCatalog();
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