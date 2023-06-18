import { Current, Div, FirText, Next, Prev, SecText, ThrText } from "./Slider-styles"
import slide1 from '../../../../images/other/welcome-slider/1.jpg'
import slide2 from '../../../../images/other/welcome-slider/2.jpg'
import slide3 from '../../../../images/other/welcome-slider/3.jpg'
import { useEffect, useState } from "react"


export const Slider = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const img = [
        slide1,
        slide2,
        slide3,
    ]
  
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const res = current === img.length - 1 ? 0 : current + 1
                return res
            })
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    console.log(activeIndex, img[activeIndex])
    return (
        <Div>
            <Prev url={img[prevImgIndex]} />
            <Current url={img[activeIndex]} />
            <Next url={img[nextImgIndex]} />
            {activeIndex === 0 && <FirText>общайся</FirText>}
            {activeIndex === 1 && <SecText>получай эмоции</SecText>}
            {activeIndex === 2 && <ThrText>работай</ThrText>}
        </Div>
    )

}