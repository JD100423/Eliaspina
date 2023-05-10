import React from "react";
import { styled } from "styled-components";

const Weather = () => {
    const Card=styled.div`
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
        max-width: 800px;
        margin: 0 20px;
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
    border-top: 4px solid #0AAEE7;
    padding: 15px;
    border-bottom: 4px solid #0AAEE7;
    `
    const TitleInfo = styled.h2`
        font-size: 30px;
        margin: 0;
        font-weight: 400;

    `
    return (
        <Content>
            <Title>Weather</Title>
        <Card>
            <TitleInfo>In Summer</TitleInfo>
        </Card>
        </Content>
    )
}

export default Weather