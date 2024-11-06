import { useTheme } from "../../../hooks/useTheme"
import { FaMoon, FaSun} from "react-icons/fa";

export default function ThemeToggle() {

    const { theme, setTheme } = useTheme();
    const currentTheme = () => setTheme(theme === "light" ? "dark" : "light")

  return (
    <>
        {theme === "light" ? (
            <button onClick={currentTheme}
            className="w-8 h-8">
                <FaMoon className="text-primary w-full h-full" />
            </button>
        ) : (
            <button onClick={currentTheme}
            className="w-8 h-8">
                <FaSun className="text-secondary-foreground w-full h-full" />
            </button>
        )}
    </>
  )
}
