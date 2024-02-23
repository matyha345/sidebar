import { useState } from "react"
import useTheme from "../../../hooks/useTheme"
import { useSpring } from "@react-spring/web"


export const useSidebar = () => {

    const [isOpened, setIsOpened] = useState(true)
    const { isDark, setIsDark } = useTheme()

    const toggleSidebar = () => {
        setIsOpened(!isOpened)
    }
    const goToRoute = path => {
        console.log(`going to "${path}"`)
    }

    const appearanceLogo = useSpring({
        from: { y: -100 },
        to: { y: 0 },
        config: { duration: 1000 }
    })

    const appearanceProfile = useSpring({
        from: { y: 100 },
        to: { y: 0 },
        config: { duration: 1000 }
    })

    return {
        isOpened,
        setIsOpened,
        isDark,
        setIsDark,
        toggleSidebar,
        goToRoute,
        appearanceLogo,
        appearanceProfile,
    }
}

