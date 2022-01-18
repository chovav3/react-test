import React, { FC } from 'react'
import '../../styles/loader.css'
export interface LoaderProps{
    show: boolean  
}

const Loader : FC<LoaderProps> = ({ show }) => {
    return show ? <div className="loader-center"><span className="loader"></span></div> : null
}

export default Loader