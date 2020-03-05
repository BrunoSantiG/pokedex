import React from 'react';
import style from 'styled-components';


const Card = ({prop: {name},numero}) => {
    return(
        <CardBox>
            <Name>{name}</Name>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}/>
        </CardBox>  
    )
}

const CardBox = style.div`
    justify-content: center;
    align-itens: center;
    text-align: center;
    height: auto;
    background: #fefefe;
    border-radius: 10px;
    border: 2px solid #eee;
    box-shadow: 10px 5px 5px black;
    transition: all 1s;
    cursor:pointer;
    width: 320px;
    margin: 0 auto;
    margin-bottom: 20px;
    :hover{
        transform: rotate(360deg) scale(1.1);
        color: #fefefe;
        background: #333;
    }
`
const Name = style.h1`
    flex: 1;
    font-size: 25px;
    font-weight: bold;
    text-transform: capitalize;
`
const Image = style.img`
    margin: 0 auto;
    width: 180px;
    height: 180px;
`

export default Card