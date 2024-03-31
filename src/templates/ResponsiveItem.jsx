// rafce
import React, { useEffect, useState } from 'react'

//  props = {
//     component, 
//     mobileComponent: neu co 
// }

export const ResponsiveItem = (props) => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [component, setComponent] = useState(props.component)

    // Xoay ngang hoac xoay doc
    const changeScreen = () => {
        const newScreenWidth = window.innerWidth;
        if (newScreenWidth < 768 && props.mobileComponent) {
            setComponent(props.mobileComponent)
        } else {
            setComponent(props.component)
        }
    // console.log(screenWidth)

    }

    // Goi lai moi khi screenWidth thay doi
    useEffect(() => {
        // CACH 1: Nhung khong tu dong reload sau khi thay doi screenSize dc
        // changeScreen()

        // khi thay doi kich thuoc man hinh thi load lai giao dien de render mobileComponent
        window.addEventListener('resize', changeScreen)
        window.addEventListener('load', changeScreen)
        return () => {
            window.removeEventListener('resize', changeScreen)
            window.removeEventListener('load', changeScreen)
        }
    }, [screenWidth])

    console.log(component)

    return (
        <>
            {component}
        </>
    )
}
