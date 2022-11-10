import "./product.css"
import { ThemeContext } from "../../context";
import { useContext } from "react";

const Product = ({ img, link }) =>   {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="p">
      <div style={{ backgroundColor: darkMode && "#333"}} className="p-browser">
        <div className="p-circle1"></div>
        <div className="p-circle2"></div>
        <div className="p-circle3"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product