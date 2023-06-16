import { Header } from "../Login/Header";
import { Div } from "./Plexus-styles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const Plexus = () => {

    return (
        <Div>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<Header />} />
                </Routes>
            </BrowserRouter >
        </Div>
    )
}