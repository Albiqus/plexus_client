import { Header } from "./Header/Header";
import { Div } from "./Plexus-styles"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from "./Welcome/Welcome";


export const Plexus = () => {

    return (
        <Div>
            <BrowserRouter >
                <Header />

            
                <Routes>
                    {/* <Route path='/registration' element={<Registration />} />
                    <Route path='/login' element={<Login />} /> */}
                    <Route path='/' element={<Welcome />} />
                </Routes>
            </BrowserRouter >
        </Div>
    )
}