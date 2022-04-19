import { Button } from "@mui/material";
import classes from "../App.css";
import { fontSize } from "@mui/system";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <a href="/">Cars</a>
      </li>
      <li>
        <a href="/customer">Customers</a>
      </li>
    </ul>
  );
};

export default NavLinks;
