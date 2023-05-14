import React from "react";
import { styled } from "styled-components";
import Mi1 from "../../assets/img/mi1.jpg"
import Mi2 from "../../assets/img/mi2.jpg"
import Mi3 from "../../assets/img/mi3.jpg"
const Ideas = () => {
    const Content = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `
    const IMG = styled.img`
        width: 100%;
        max-width: 300px;
        margin: 10px;
    `
    const Title = styled.h2`
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 30px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        background-color: #f1f1f1;
        padding: 10px;
    `
    const Container = styled.div`
    display: flex;
        align-items: center;
        width: 100%;
        flex-direction: column;
        `
    const Card = styled.div`
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
    `
    const Text = styled.div`
        align-items: center;
        flex-direction: column;
    `
    return (
        <>
        <Container>
                <Title>My experience there</Title>  
            <Card>
                    <Content>
                        <IMG src={Mi1}/>
                        <IMG src={Mi2}/>
                        <IMG src={Mi3}/>
                    </Content>
            </Card>
        </Container>
        </>
        
    )
}

export default Ideas