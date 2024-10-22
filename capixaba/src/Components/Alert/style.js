import styled from "styled-components";
import Alert from 'react-bootstrap/Alert';

export const MyAlert = styled(Alert)`
    position: fixed;  
    top: 20px;        
    right: 5px;      
    font-size: 15px;
    z-index: 9999;    
    text-align: center; 
    width: 250px;     
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6); 
    border-radius: 5px;
`;
