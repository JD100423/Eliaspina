import React from "react";
import { styled } from "styled-components";
import Chenche from "../../assets/img/chenchen.jpg"
import Chaca from "../../assets/img/chaca.jpg"

const Food = () => {
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
        border-bottom: 3px solid #3036F8;
        padding: 15px;
        margin-top: 10px;
    `
    const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        background-color: #3036F8;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
        padding: 20px;
    `
    const InfoTitle = styled.h2 `
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
    const IMG = styled.img`
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
    `
    return(
        <Content>
                <Title>Food</Title>
            <Card>
                <Info>
                    <InfoTitle>There you can try foods like:</InfoTitle>
                    <InfoText>Chenchen con chivo</InfoText>
                    <IMG src={Chenche}/>
                </Info>
                <Info>
                    <InfoText>Chacá</InfoText>
                    <IMG src={Chaca}/>
                </Info>
            </Card>
        </Content>
    )
}

export default Food