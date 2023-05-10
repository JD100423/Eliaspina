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
                <div className="cards">
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

                <div className="cards">
                    <h1>Country where it is</h1>

                    <div className="info">
                        <iframe style={{border: "2px solid #9CD2F8", borderRadius: "6px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10677.937864045185!2d-71.70928098389533!3d18.87726844231115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb0bb070f953767%3A0xb14c33e611e79982!2sComendador!5e0!3m2!1ses!2sdo!4v1683645899819!5m2!1ses!2sdo" title="Mapa" allowfullscreen></iframe>
                        <div className="info-mapa">   
                        <h4 className="info-info">Elias piña, is located south of Santo Domingo, D.R. is a province that is 6 hours from the capital.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Casa