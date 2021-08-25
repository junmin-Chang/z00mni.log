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

            <h2>&lt;/Tech Stack&gt;</h2>
            
            <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
            <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?&style=for-the-badge"/>
            <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
            <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
            <img alt="Kotlin" src="https://img.shields.io/badge/kotlin-%230095D5.svg?&style=for-the-badge&logo=kotlin&logoColor=white"/>
            <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/>
            <img alt="Redux" src="https://img.shields.io/badge/redux-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/>
            <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/>

            <div style={{
                marginTop: '1rem'
            }}>
                <p>Github</p>
                <a href="https://github.com/junmin-Chang" target="blank">
                    <img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>
                </a>
            </div>
            
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
