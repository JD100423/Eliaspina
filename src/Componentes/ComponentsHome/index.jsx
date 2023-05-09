import React from "react";
import Logo from "../../assets/img/Logo.jpg"
import Countryside from "../../assets/img/Countryside.jpg"
import Rio from "../../assets/img/Rio limpio.jpg"
import './Casa.css'
import Park from "../../assets/img/Parque.jpg"

const Casa = () => {
    return (
        <>
        <div className="container">

            <div className="content">
                <div className="content-title">
                    <h1 className="title">Welcome to Elias Piña</h1>
                    <h3>Deep south</h3>
                </div>
                <div className="content-image">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="vacation_destination">
                    <h1>Vacation destination</h1>

                    <div className="info">
                    <h2 className="info-title">Countryside Los rinconcitos</h2>
                    <img src={Countryside} alt="Countryside Los rinconcitos" />
                    <h4 className="info-info">The countryside "Los rinconcitos" is most famous in this places, all the people that visits the area goes there. </h4>
                    </div>
                    
                    <div className="info">
                        <h2 className="info-title">Countryside "Rio Limpio"</h2>
                        <img src={Rio} alt="Countryside Rio Limpio" />
                        <h4 className="info-info">The countryside "Rio Limpio" is famous also, because it's waters are fresh and beautiful</h4>
                    </div>

                    <div className="info">
                        <h2 className="info-title">Motorcyclist's Park</h2>
                        <img src={Park} alt="Motorcyclist's Park" />
                        <h4 className="info-info">That is probably the most famous park in town</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Casa