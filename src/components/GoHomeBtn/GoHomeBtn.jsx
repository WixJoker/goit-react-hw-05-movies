import { useLocation } from "react-router-dom";
import { BackBtn, HomeIcon } from "./GoHomeBtn.styled"

export default function GoHomeBtn() {

    const location = useLocation()
    console.log(location)

    return (
        <BackBtn to={location.state?.from ?? "/notFound"}><HomeIcon/>go Home</BackBtn>
    );
};
