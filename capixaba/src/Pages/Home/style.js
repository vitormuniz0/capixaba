import styled from 'styled-components';
// import image from '../../Assets/image/padaria.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${require('../../Assets/image/backgroundPadaria.jpg')});
        background-position: center;
        background-size: cover;
        filter: blur(3px);
        overflow: hidden;
        z-index: -1;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: transparent;
`

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px ;
`
