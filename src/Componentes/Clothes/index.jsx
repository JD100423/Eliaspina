import React from "react";
import { styled } from "styled-components";

const Clothes = () => {
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
        align-items: center;
        width: 100%;
        max-width: 800px;
        margin: 20px;
    `
    const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;
        background-color: #36B7A7;
        border-radius: 20px;
        padding-bottom: 10px;
    `
    const Title = styled.h1`
        font-size: 45px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        line-height: 21px;
        padding: 15px;
        border-bottom: 4px solid #36B7A7;
        border-top: 4px solid #36B7A7;
    `
    const TitleCard = styled.h2`
        font-size: 2rem;
        font-weight: 400;
        margin: 30px 0 20px;
        padding: 15px;
        font-family: 'Source Sans Pro', sans-serif;
        color: #fff;
    `
    const Text = styled.h3`
        font-weight: 400;
        text-align: center;
        margin: 0;
        font-family: 'Source Sans Pro', sans-serif;
        color: #fff;
    `
    return (
        <>
        <Content>
            <Title>Advice</Title>
            <Card>
                <Info>
                    <TitleCard>I give you some advice for you take when you go:</TitleCard>
                    <Text>You should⬇️</Text>
                    <Text>Wear coat and jeans at night.</Text>
                    <Text>In the afternoon</Text>
                    <Text>Wear t-shirt, shorts and sandals, because is hot.</Text>
                </Info>
            </Card>
        </Content>
        </>
    )
}

export default Clothes