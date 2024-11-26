import { MENU_ITEMS } from "../../../constants";
import { NavLink, useLocation } from "react-router-dom";

interface Props {
  className: string;
}

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1);

export default function NavLinks({ className }: Props) {
  const location = useLocation();

  return (
    <ul className={`flex justify-center items-center ${className}`}>
      {MENU_ITEMS.map((link, index) => {
        const isActive = location.pathname === link.url;
        return (
          <NavLink
            key={index}
            to={link.url}
            className={`hover:text-blue-500 duration-500 p-1 ${
              isActive ? "text-primary/80" : ""
            }`}
          >
            {capitalize(link.name)}
          </NavLink>
        );
      })}
    </ul>
  );
}
