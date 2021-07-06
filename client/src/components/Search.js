import React, { useState } from 'react'
import styled from 'styled-components'
import { getPostsByTitle } from '../actions/postActions';
import { useDispatch } from 'react-redux'
const Positioner = styled.div`
    max-width: 800px;
    margin: 20px auto 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 500px;
    outline: none;
    border: none;
    border-radius: 16px;
    padding-left: 12px;
`

function Search() {
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState("")
    const onChange = (e) => {
        setKeyword(e.target.value)
        console.log(keyword)
    }
    return (
        <Positioner>
          <Input type="text" value={keyword} onChange={onChange} name="keyword" placeholder="검색"
                  onKeyPress={() => {
                      dispatch(getPostsByTitle(keyword))
                  }}
                />
            
                
        </Positioner>
    )
}

export default Search