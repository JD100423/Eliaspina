import React from "react";
import { styled } from "styled-components";
import Market from "../../assets/img/Market.jpg"
import Patronales from "../../assets/img/patronales.jpg"
import Gagas from "../../assets/img/Gagas.jpg"

const Activities = () => {
    const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 10px;
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
        margin-bottom: 20px;
        background-color: #042D3B;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        padding: 20px;
    `
    const InfoTitle = styled.div`
        font-size: 2rem;
        font-weight: 400;
        margin: 30px 0 20px;
        color: #ffff;
        font-family: 'Source Sans Pro', sans-serif;
    `
    const InfoText = styled.h4`
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
                <Title>Activities to do there</Title>
            <Card>
                <Info>
                    <InfoTitle>There they usually do:</InfoTitle>
                    <InfoText>Binational market</InfoText>
                    <Img src={Market}/>
                </Info>
                <Info>
                    <InfoText>Patronal Fest</InfoText>
                    <Img src={Patronales}/>
                </Info>
                <Info>
                    <InfoText>Gagas fest</InfoText>
                    <Img src={Gagas}/>
                </Info>
            </Card>
        </Content>
    )
}

export default Activities