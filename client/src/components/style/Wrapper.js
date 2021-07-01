import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
    max-width: 800px;
    margin: 50px auto 0 auto;
    padding: 1rem;
`

export const NavWrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-evenly;
`

const bgShow = keyframes`
    from {
    opacity: 0;
    }
    to {
    opacity: 1;
    }
`
export const ModalWrapper= styled.div`
    display: ${props => props.open ? "flex" : "none"};
    align-items: ${props => props.open ? "center" : "none"};
    animation: ${props => props.open ? css`${bgShow} 0.3s` : "none"};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
`
