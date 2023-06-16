import { Components } from "../Component/Components";
import { Header } from "../Header/Header";
import { Div } from "./Plexus-styles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const Plexus = () => {

    return (
        <Div>
            <Header />
            <Components/>



            <BrowserRouter >
                <Routes>
                    {/* <Route path='/' element={<Header />} /> */}
                </Routes>
            </BrowserRouter >
        </Div>
    )
}