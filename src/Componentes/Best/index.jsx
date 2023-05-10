import React from "react";
import { styled } from "styled-components";

const BestTime = () => {

    const CardBest = styled.div`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 0 20px;
    `

    const Content = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 20px;
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
        padding-bottom: 20px;
    `
    const InfoTitle = styled.h1`
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
    return(
        <>
        <Content>
        <CardBest>
            <Title>Do you wants to go?</Title>
            <Info>
                <InfoTitle>Best time of the year to visits</InfoTitle>
                <InfoInfo>The best time to visit is summer, because is hot and you can go</InfoInfo>
                <InfoInfo>to the countryside and another time is winter</InfoInfo>
                <InfoInfo>"From end of October to end March" in this season is</InfoInfo>
                <InfoInfo>very cold at night and you should wear coat.</InfoInfo>
            </Info>
        </CardBest>
        </Content>
        </>
    )
}

export default BestTime