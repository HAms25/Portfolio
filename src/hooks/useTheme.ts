import { useContext } from "react"
import { ThemeProviderContext } from "../context/theme";

export const useTheme = () => {
    const contex = useContext(ThemeProviderContext)

    if (contex === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }

    return contex
}