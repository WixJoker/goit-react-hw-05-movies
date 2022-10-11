import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DetailsLinks = styled(NavLink)`
text-decoration: none; 
color: black;
&:hover {
    color: blue;
    scale: 1.1
}
`

export const DetailsList = styled.ul`
li:not(:last-child) {
  margin-bottom: 12px;
}
`