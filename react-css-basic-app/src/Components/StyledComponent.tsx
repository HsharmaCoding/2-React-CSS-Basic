import * as React from 'react';
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
`;

export const StyledComponent=()=>{
    return(
        <div>
           {/* Use it like any other component. */}
           <StyledButton> Login </StyledButton>
        </div>
    )
}