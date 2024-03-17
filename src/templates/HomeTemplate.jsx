// rafce
import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import { ResponsiveItem } from './ResponsiveItem'
import FooterMobile from '../components/FooterMobile'

// tach file ra cung dc nhung it qua nen de day luon 
const FooterDesktop = <div className='p-3 text-center bg-dark text-white'>
    Cần viết lại footer
</div>

const HomeTemplate = () => {
    return (
        <div>
            <Header />
            <div className='content' style={{ minHeight: 650, marginBottom: 100 }}>
                <Outlet />
            </div>
            <ResponsiveItem component={FooterDesktop} mobileComponent={<FooterMobile />} />
        </div>
    )
}

export default HomeTemplate