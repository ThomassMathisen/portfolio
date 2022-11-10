import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { ThemeContext } from "../../context"
import { useContext } from "react"

export const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }
  return (
    <div className="t" style={{backgroundColor: darkMode && "#1F2937"}}>
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div 
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25}}
      ></div>
    </div>
  )
}

export default Toggle