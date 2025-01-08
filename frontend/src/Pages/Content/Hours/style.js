import styled from "styled-components";

export const Hours = styled.div`

    text-align: center;
    color: white;
    font-family: "Lucida Console", "Courier New", monospace;
    justify-content: center;
    border-radius: 1px;
    display: flex;
    margin-bottom: 5px;

    h5{
        font-size: 14px;
    }

    &.oppen{
        background-color: green;
    }

    &.closed{
        background-color: red;
    }
`