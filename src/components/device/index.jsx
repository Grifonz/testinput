import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
//import { FaBars } from 'react-icons/fa'

const ContainerWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

const MobileWrap = styled.div`
    background-color: #68d368;
    opacity: 0.8;
`;

const LaptopWrap = styled.div`
    background-color: #fdd44c;
    opacity: 0.9;
`;

const DesktopWrap = styled.div`
    background-color: #4fd3ab;
    opacity: 0.8;
`;

const DeviceHeader = ({ children }) => {

    const [device, setDevice] = useState();

    useEffect(()=>{
        let kind = 'desktop';
        const screenWidth = document.getElementById('main').clientWidth;
        switch(true){
            case (screenWidth < 576): kind ='mobile'; break;
            case (screenWidth < 1024): kind ='tablet'; break;
                default: break;
        }
        setDevice(kind);
    }, [device])

    return(
        <ContainerWrap>
            {(() => {
                switch (device) {
                    case 'mobile': 
                        return  <MobileWrap> {children} </MobileWrap>;
                    case 'tablet': return <LaptopWrap>{children}</LaptopWrap>;
                        default: return <DesktopWrap>{children}</DesktopWrap>;
                }
            })()}
        </ContainerWrap>
    );
}

export default DeviceHeader;