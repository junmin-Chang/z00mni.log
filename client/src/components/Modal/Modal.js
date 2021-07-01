import React from 'react';
import { ModalWrapper } from '../style/Wrapper';
import styled, { keyframes } from 'styled-components'

const show = keyframes`
    from {
    opacity: 0;
    margin-top: -50px;
  }
    to {
    opacity: 1;
    margin-top: 0;
  }
`
const ModalSection = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;
  /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: ${show} 0.3s;
    overflow: hidden;
`
const ModalHeader = styled.header`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`

const ModalMain = styled.main`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`
const ModalFooter = styled.footer`
    padding: 12px 16px;
    text-align: right;
`
const HeaderButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
`

const FooterButton = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
`
function Modal(props) {

    return (
       <ModalWrapper open={props.open}>
        { props.open ? (  
            <ModalSection>
                <ModalHeader>
                    {props.header}
                    <HeaderButton onClick={props.close}> &times; </HeaderButton>
                </ModalHeader>
                <ModalMain>
                    {props.children}
                </ModalMain>
                <ModalFooter>
                    <FooterButton onClick={props.close}> 닫기 </FooterButton>
                </ModalFooter>
            </ModalSection>
        ) : null }
        </ModalWrapper>

    )
    
}
export default Modal;
