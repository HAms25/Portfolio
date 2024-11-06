import { useEffect, useState } from "react"
import { MENU_ITEMS } from "../../../constants"
import useScrollspy from "../../../hooks/useScrollspy"

interface Props {
    className: string
}

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.substr(1)

export default function NavLinks({ className }: Props) {
    const [hash, setHash] = useState(window.location.hash)
    const links = MENU_ITEMS.map((link) => link.url)
    const name = MENU_ITEMS.map((link) => link.name)
    const activeId = useScrollspy(links,270)

    useEffect(() => {
      const handleHashChange = () => setHash(window.location.hash)
      window.addEventListener("hashchange", handleHashChange)
      return () => window.removeEventListener("hashchange", handleHashChange)
    }, [hash])

  return (
    <ul className={`flex justify-center items-center ${className}`}>
      {links.map((id, index) => (
        <li key={`menu-item-${id}`}>
          <a href={links[index]}
          className={`hover:text-blue-500 duration-500 p-1 ${id === activeId ? "text-primary/80"  : "" }`}>
            {capitalize(name[index])}
          </a>
        </li>
      ))}
    </ul>
  )
}
