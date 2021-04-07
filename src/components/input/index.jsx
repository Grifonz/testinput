import React, { useState } from 'react'
import DeviceWrapper from '../../components/device/index'
import styled from 'styled-components'
//import { Col, Form, Button } from 'react-bootstrap';

const MyBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30em;
    height: 30em;
`;

const MyForm = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
`;

const MyLabel = styled.label`
    margin: auto 10px auto auto;
`;

const MyInput = styled.input`
    margin: auto;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
    outline: none;
`;

const MySelector = styled.select`
    margin: auto;
    border-radius: 5px;
    border: 1px solid lightgray;
    outline: none;
    background-color: lightblue;
    width: 100px;
   
`;

const MyOptions = styled.option`
    text-align: center;
`;

const MyOutput = styled.div`
    margin: 0 auto 50px auto;
    background-color: white;
    text-align: center;
    border: 1px solid lightgrey;
    border-radius: 10px;
    height: 3em;
    width: 80%;
`;


const MyComponent = () => {

    const [toggle, setToggle] = useState({ valueIn: '', order: '', finalValue: '' });

    //GET INPUT VALUE INSERTED BY USER
    const handleInput = e => {
        setToggle({ valueIn: e.target.value, order: '' });
    }

    //GET THE ORDERING FROM DROPDOWN
    const handleSelect = e => {
        let newValueIn = toggle.valueIn.replace(/[^\w\s]/gi, '');
        switch(e.target.value){
            case 'asc':
                newValueIn = newValueIn.split('').sort((a, b) => a.localeCompare(b)).join(''); 
                break;
            case 'desc':
                newValueIn = newValueIn.split('').sort((a, b) => b.localeCompare(a)).join(''); 
                break;
            case '':
                newValueIn = ''
                break;
                default: break;
        }
        setToggle({ valueIn: newValueIn, order: e.target.value, finalValue: newValueIn });
    };

    return(
        <DeviceWrapper>
            <MyBox>
                <MyForm>
                    <MyLabel>Casual Input:</MyLabel>
                    <MyInput type="text" onChange={handleInput} />
                    <MySelector 
                        value={toggle.order}
                        onChange={handleSelect}>
                            <MyOptions value="">Select</MyOptions>
                            <MyOptions value="asc">Ascending</MyOptions>
                            <MyOptions value="desc">Descending</MyOptions>
                    </MySelector>
                </MyForm>
            </MyBox>
            <MyOutput>{toggle.finalValue}</MyOutput>
        </DeviceWrapper>
    );
}

export default MyComponent;