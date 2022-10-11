import styled from "styled-components";



export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  
`

export const SearchFormBtn = styled.button`
 display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: white;
  background-image: url("https://cdn-icons-png.flaticon.com/512/751/751463.png");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  
    &:hover {
    scale:1.1
  }
  
`
export const SearchFormBtnLabel = styled.label`
position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
 
  
    &:focus {
    border: 1px solid skyblue
  }
  &::placeholder{
    font: inherit;
  font-size: 18px;
  }
`


