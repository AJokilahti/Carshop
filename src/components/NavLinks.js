import { Button } from "@mui/material";
import { fontSize } from "@mui/system";

const NavLinks = () => {
    return(
        <ul>
            <li>
                <Button variant="contained"><a href="/">Trainings</a></Button>
            </li>
            <li>
                <Button variant="contained"><a href="/customer">Customers</a></Button>
            </li>
        </ul>
    )
}

export default NavLinks;
