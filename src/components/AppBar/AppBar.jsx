import { Heder } from "components/Layout/Layout.styled"
import { LinkStyled } from "pages/Home/Home.styled";


const navItems = [
  { href: "/", text: "Home" },
  { href: "/movies", text: "Movies" }
];


export default function AppBar() {
    return (
        <Heder>
            <nav>
                {navItems.map(({ href, text }) => <LinkStyled to={href} key={href} end>{text}</LinkStyled>)}
            </nav>
        </Heder>
    );
};
