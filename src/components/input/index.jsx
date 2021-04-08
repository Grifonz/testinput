import React, { useState } from 'react'
import DeviceWrapper from '../../components/device/index'
import styled from 'styled-components'

const MyBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
    height: 30em;
`;

const MyHeader = styled.form`
    display: flex;
    justify-content: space-between;
    height: 30%;
`;

const MyBody = styled.form`
    display: flex;
    flex-direction: column;
    height: 70%;
`;

const BodyAction = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BodyDetails = styled.div.attrs(props => ({
    overflow: props.items > 3 ? 'scroll' : 'hidden'
}))`
    margin: auto 0.1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5em;
    color: white;
    font-size: 2em;
    overflow-y: ${props => props.overflow};
`;

const MyInput = styled.input`
    margin: auto;
    padding-left: 1em;
    border-radius: 1em;
    border: 1px solid lightgray;
    outline: none;
`;

const MySelector = styled.select`
    margin: auto;
    border-radius: 0.5em;
    border: 1px solid lightgray;
    outline: none;
    background-color: lightblue;
    width: 10em;
   
`;

const MyOptions = styled.option`
    //add here style
`;

const MyAddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(67, 196, 89);
    border-radius: 1em;
    width: 3.5em;
    height: 2.5;
    margin: auto;
    color: rgb(66, 61, 61);

    &:hover,:focus{
        opacity:0.6;
        color: white;
    }

    &:active{
        opacity: 0.9;
    }
`;

const MyOrderButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(67, 196, 89);
    border-radius: 1em;
    width: 3.5em;
    height: 2.5em;
    margin: auto;
    color: rgb(66, 61, 61);

    &:hover,:focus{
        opacity:0.6;
        color: white;
    }

    &:active{
        opacity: 0.9;
    }
`;

const MyClearButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: rgb(67, 196, 89);
    border-radius: 1em;
    width: 3.5em;
    height: 2.5em;
    margin: auto;
    color: rgb(66, 61, 61);

    &:hover,:focus{
        opacity:0.6;
        color: white;
    }

    &:active{
        opacity: 0.9;
    }
`;


const MyComponent = () => {

    //hook which saves all entries by user
    const [ entries, setEntries ] = useState([]);

    //hook which save all input typed into the input field and the option selected by user
    const [ toggle, setToggle ] = useState({ value: '', order: '', entriesSorted: [] });

    //handle input field
    const handleInput = e => {
        setToggle({ value: e.target.value }); //save entry and reset order selection
    }

    //handle dropdown
    const handleSelect = e => {
         setToggle({ order: e.target.value }); 
    };

    //handle add button, which adds all entries into the hook array
    //removes all special char typed by user 
    //reset input field and dropdown selection
    const handleAdd = () => {
        if(toggle.value !== '' && toggle.value !== undefined){
            let listIn = entries;
            let entryNoSpecialChar = toggle.value.replace(/[^\w\s]/gi, '');
            listIn.push(entryNoSpecialChar);
            setEntries(listIn);
            setToggle({ value: '', order: '' });
        }
    }

    //handle ordering button, which sorts the entries according to the option selected by user
    const handleOrder = () => {
        let newList = [];
        switch(toggle.order){
            case 'asc': newList = entries.sort((a, b) => a.localeCompare(b)); break;
            case 'desc': newList = entries.sort((a, b) => b.localeCompare(a)); break;
                default: break;
        }
        setToggle({ entriesSorted: newList }); 
    }

    //handle clear button
    const handleClear = () => {
        setEntries([]); 
    }

    //Device Wrapper is a styling wrapper according to 3 breakpoints (Mobile, Tablet, Laptop)
    return(
        <DeviceWrapper>
            <MyBox>
                <MyHeader>
                    <MyInput 
                        type="text" 
                        value={toggle.value} 
                        placeholder="insert here.."
                        onChange={handleInput} />
                    <MyAddButton onClick={handleAdd}>Add</MyAddButton>
                    <MySelector 
                        value={toggle.order}
                        onChange={handleSelect}>
                            <MyOptions value="sel">All</MyOptions>
                            <MyOptions value="asc">Ascending</MyOptions>
                            <MyOptions value="desc">Descending</MyOptions>
                    </MySelector>
                </MyHeader>
                <MyBody>
                    {entries.length > 1 && (
                        <BodyAction>
                            <MyOrderButton onClick={handleOrder}>Order</MyOrderButton>
                            <MyClearButton onClick={handleClear}>Clear</MyClearButton>
                        </BodyAction>
                    )}
                    <BodyDetails items={entries.length}>
                        {entries.map((entry,index)=>(
                            <div key={index}>{entry}</div>
                        ))}
                    </BodyDetails>
                </MyBody>
            </MyBox>
        </DeviceWrapper>
    );
}

export default MyComponent;