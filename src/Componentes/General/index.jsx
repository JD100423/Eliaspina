import React from "react";
import { styled } from "styled-components";
import Coat from "../../assets/img/coat.png"
import Casual from "../../assets/img/casual.png"
import Umbrella from "../../assets/img/Umbrella.png"

const General = () => {
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
        border-bottom: 3px solid #8E30F8;
        padding: 15px;
        margin-top: 10px;
    `
    const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        background-color: #8E30F8;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        padding: 20px;
    `
    const InfoTitle = styled.h2`
        font-size: 2rem;
        text-align: center;
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
    const IMG = styled.img`
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    `
    const InfoImg = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        margin-bottom: 50px;
        background-color: transparent;
        border-radius: 20px;;
        padding: 20px;
    `
    return (
        <Content>
            <Title>General Advice</Title>
            <Card>
                <Info>
                    <InfoTitle>When you want to go there you should</InfoTitle>
                        <InfoTitle>In summer</InfoTitle>
                        <InfoText>Wear coat at nigth.</InfoText>
                        <InfoImg>
                        <IMG src={Coat} />
                        </InfoImg>
                        <InfoText>In the afternoon, wear casual clothes</InfoText>
                        <InfoImg>
                            <IMG src={Casual}/>
                        </InfoImg>
                        <InfoText>And wear umbrella</InfoText>
                        <InfoImg>
                            <IMG src={Umbrella}/>
                        </InfoImg>
                </Info>
            </Card>
        </Content>
    );
};

export default General