import React from "react";
import { styled } from "styled-components";
import Sun from "../../assets/img/sun.png"
import Snow from "../../assets/img/snowflake.png"

const Weather = () => {
    const Card=styled.div`
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        max-width: 800px;
        margin: 20px;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: #31A8A9;
    `
    const Content=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    `
    const Title = styled.h1`
    font-size: 45px;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    line-height: 21px;
    padding: 15px;
    border-bottom: 4px solid #31A8A9;
    `
    const TitleInfo = styled.h2`
        font-size: 30px;
        margin: 0;
        font-weight: 400;

    `
    const Info = styled.div`
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        margin: 1px;
        color: #fff;
        display: flex;
    `
    const InfoCard =styled.div`
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 10px;
    `
    const IMG = styled.img`
        width: 25px;
        box-shadow: none;
        margin-left: 5px;
    `
    return (
        <Content>
            <Title>Weather</Title>
        <Card>
            <InfoCard>
            <TitleInfo>In Summer<IMG src={Sun}/></TitleInfo>
            <Info>Usually is very hot at midnight and in the afternoon,</Info>
            <Info>but at night is very cold and you need wear coat.</Info>
            </InfoCard>
        </Card>

        <Card>
            <InfoCard>
                <TitleInfo>In Winter<IMG src={Snow}/></TitleInfo>
                <Info>Is very cold in the morning and at night.</Info>
                <Info>At midday is warm you feel relaxed</Info>
            </InfoCard>
        </Card>
        </Content>
    )
}

export default Weather