import React from 'react'
import InputWrapper from '../InputWrapper'

const Header = () => {
    return (
        <div className="w-100 primary-bg d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            <div className="container">
                <h1 className="text-center">Sözlük</h1>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <InputWrapper title="Kelime" placeholder="Kelime Ara..." />
                    </div>
                    <div className="col-lg-6">
                        <InputWrapper title="Atasözü ve Deyim" placeholder="Atasözü veya Deyim Ara..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
