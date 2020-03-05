import React,{useState, useEffect} from 'react';
import {getPokemons} from '../requests/poke';
import style from 'styled-components'
import Card from './Card';
import poke_logo from '../assets/poke_logo.png';

const Pokemon = () => {

    const [page, setPages] = useState(0);
    const [list, setList] = useState([]);

    
    useEffect(()=>{
        getPokemons(page,(list) => {
            setList(list)
            console.log(list);
        })
    }, [page])

    function nextPage (){
        setPages(page+1);
    }
    function prevPage (){
        if(page > 0){
            setPages(page-1);
        }
    }


    return(
        <MainAll>
            <Logo src={poke_logo}/>
            <ButtonGroup>
                <Button onClick={prevPage}>Prev</Button>
                <Button onClick={nextPage}>Next</Button>
            </ButtonGroup>
            <MainBox>
                {list.map((i,index) => <Card prop={i} key={i.name} numero={page*20+(index+1)}/>)}
            </MainBox>
            <ButtonGroup>
                <Button onClick={prevPage}>Prev</Button>
                <Button onClick={nextPage}>Next</Button>
            </ButtonGroup>
        </MainAll>
    )
}

const MainAll = style.div`
    background: #333;
    display: flex;
    justify-content: center;
    align-itens: center;
    text-align: center;
    flex-direction: column;
    padding-bottom: 40px;
    flex-wrap: wrap;
`

const Logo = style.img`
    width: 100vmin;
    padding-bottom: 10px;
    margin: 0 auto;
`

const MainBox = style.div`
    box-sizing: border-box;
    padding: 0px 50px;
    display: flex;
    flex-wrap: wrap;
`
const ButtonGroup = style.div`
    display: flex;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    margin-top:30px;
    margin-bottom: 30px
`

const Button = style.button`
    flex: 1;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    color: #333;
    background: #fff;
    border: 1px solid #333;
    box-shadow: 10px 5px 5px black;

    :hover{
        opacity: .8;
        cursor:pointer;
    }
`


export default Pokemon