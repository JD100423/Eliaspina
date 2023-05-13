import React from "react";
import { styled } from "styled-components";

const Footer = () => {

    const Foo= styled.div`
        background-color: #0678A0;
        padding: 20px;
        text-align: center;
        color: #fff;
    `
    const FooText = styled.p`
        font-size: 20px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 500;
    `
    const FooAut = styled.p`
        font-weight: 700;
        font-size: 30px;
    `
    return (
        <>
        <Foo>
           <FooText> Made with ❤️ by:</FooText> 
           <FooAut>&copy;Bartolo del Rosario Marmolejos.</FooAut>
        </Foo>
        </>
    )
}

export default Footer   