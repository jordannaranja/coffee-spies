import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const IconContainer = styled.div`
    margin-top: 2%; 
`; 

const TopText = styled.p`
    color: black; 
    font-weight: bold; 
    margin-left: 0.5vw;
    user-select: none; 
`;


const ProfileSelect = () => {
    

    return <IconContainer>
        <TopText>Select an Icon</TopText>
    </IconContainer>
}

IconSelect.defaultProps = {

}

export default ProfileSelect; 