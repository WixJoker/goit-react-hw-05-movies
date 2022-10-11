import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const BackBtn = styled(NavLink)`
display: inline-block;
margin-bottom: 10px;
text-decoration: none;
color: black;
border: none;
outline: none;
background-color: white;
border: 1px solid gray;
:hover {
    color: red;
    scale: 1.1;
    margin-right: 5px
}
`

export const HomeIcon = styled(MdHome)`

    margin-right: 5px

`