import { useNavigate } from "react-router-dom";
import { Div, LogButton, Logo, RegButton, Wrapper } from "./Header-styles"


export const Header = () => {

    const navigate = useNavigate();

    const onRegButtonClick = () => {
        navigate('/registration')
    }


    const onLogButtonClick = () => {
        navigate('/login')
    }

    return (
        <Div>
            <Logo />
            <Wrapper>
                <LogButton onClick={onLogButtonClick}>ВОЙТИ</LogButton>
                <RegButton onClick={onRegButtonClick}>РЕГИСТРАЦИЯ</RegButton>
            </Wrapper>

        </Div>
    )
}