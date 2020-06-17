import styled from 'styled-components';

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: none;
    min-height: 35px;
    width: 100% 
    border radius: 200px;
    color: ${props => (props.gameOver ? 'red': '#999')};
    background:#000;
    font-family: Pixel, Arial, Helvetica, san-serif;
    font-size: 1rem;
    color: white;
    background: #333;

`;




