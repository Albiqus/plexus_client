import { useNavigate } from "react-router-dom"
import { Slider } from "./Slider/Slider"
import { Div, RegButton } from "./Welcome-styles"


export const Welcome = () => {
    const navigate = useNavigate();

    const onRegButtonClick = () => {
        navigate('/registration')
    }

    return (
        <Div>
            <Slider />
            <RegButton onClick={onRegButtonClick}>НАЧАТЬ</RegButton>
        </Div>
    )
}