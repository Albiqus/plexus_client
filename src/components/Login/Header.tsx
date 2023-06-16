import { Div, LogButton, Logo, RegButton, Wrapper } from "./Header-styles"


export const Header = () => {

    return (
        <Div>
            <Logo />
            <Wrapper>
                <LogButton>ВОЙТИ</LogButton>
                <RegButton>РЕГИСТРАЦИЯ</RegButton>
            </Wrapper>

        </Div>
    )
}