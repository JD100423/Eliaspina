import React from "react";
import { styled } from "styled-components";
import Municipal from "../../assets/img/Parque.jpg"
import Viewpoint from "../../assets/img/Logo.jpg"
import Mountain from "../../assets/img/Mountain.jpg"
import Obelisk from "../../assets/img/obelisk.jpg"
import Imagene from "../../assets/img/Limpio.jpg"
import IMG from "../../assets/img/Rio.jpg"
import Salto from "../../assets/img/Salto.jpg"

const Places = () => {
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    `
    const Card = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 800px;
        margin: 0 20px;
    `
    const Title = styled.h1`
        font-size: 45px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        border-top: 4px solid #0AAEE7;
        padding: 15px;
        border-bottom: 4px solid #0AAEE7;
        margin-top: 10px;
    `
    const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        background-color: #042D3B;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        padding: 20px;
    `
    const InfoTitle = styled.h2`
        font-size: 2rem;
        font-weight: 400;
        margin: 30px 0 20px;
        color: #ffff;
        font-family: 'Source Sans Pro', sans-serif;
    `
    const InfoInfo = styled.h4`
        margin: 0;
        padding: 3px;
        font-size: 20px;
        color: #fff;
    `
    const Img = styled.img`
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    `
    return(
        <Content>
            <Title>Places to visit</Title>
            <Card>
                <Info>
                    <InfoTitle>Municipal park</InfoTitle>
                    <Img src={Municipal}/>
                    <InfoInfo>Is located in the center of the municipality Comendador. </InfoInfo>
                </Info>

                <Info>
                    <InfoTitle>Viewpoint of city</InfoTitle>
                    <Img src={Viewpoint}/>
                    <InfoInfo>Is located in the head of the province.</InfoInfo>
                </Info>

                <Info>
                    <InfoTitle>The hill of San Francisco</InfoTitle>
                    <Img src={Mountain}/>
                    <InfoInfo>Is located in the munipality Banica of the province</InfoInfo>
                </Info>
                <Info>
                    <InfoTitle>The Obelisk</InfoTitle>
                    <Img src={Obelisk}/>
                    <InfoInfo>Is located next to bus station of the province, and it is very famous.</InfoInfo>
                </Info>
                <Info>
                    <InfoTitle>More Places</InfoTitle>
                    <Img src={Imagene}/>
                    <InfoInfo>Colonia clean river</InfoInfo>
                </Info>
                <Info>
                    <Img src={IMG}/>
                    <InfoInfo>River Artibonito</InfoInfo>
                </Info>
                <Info>
                    <Img src={Salto}/>
                    <InfoInfo>Manuel Falls</InfoInfo>
                </Info>
            </Card>
        </Content>
    );
};

export default Places