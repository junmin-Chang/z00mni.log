import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`
const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 1rem 1rem;
    font-size: 1.5rem;
`

const Home : React.FC = () => {
    return (
        <div className="container">
            <h1>장준민의 개발 일지</h1>
            <Rotate style={{
                fontSize: '3rem'
            }}>⚛️</Rotate>

            <hr/>
            <h3>Full stack 을 향하여</h3>
            <ul style={{
                marginTop: '2rem',
                fontWeight: 100
            }}>
                <li>2001/02/19</li>
                <li>이름: 장준민</li>
                <li>국민대학교 전자공학부 입학 (2020)</li>
                <li>Frontend(Web): ReactJS</li>
                <li>Frontend(Android, ios): Kotlin, Swift </li>
                <li>Backend: NodeJS-express, Mongoose</li>
                <li>Database: MongoDB</li>
            </ul>
          
        </div>

    )
    
}

export default withRouter(Home);
