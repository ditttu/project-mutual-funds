import React from 'react'
import './navbar.styles.scss'

const Navigatebar = ({changeRoute}) => {
    return (
        <div className='my-navbar'>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('search')}}>Search</div>
            <div className='nav-menu-item' onClick={() =>{ changeRoute('compare')}}>Compare</div>
        </div>
    )
}

export default Navigatebar;
