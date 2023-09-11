import { CustomButtomProps } from "@/types"
import Image from "next/image"
const CustomButtom = ({ title, containerStyles, handleClick, btnType}: CustomButtomProps) => {
  return (
    <button
        disabled = {false}
        type = {btnType || "button"}
        className = {`custom-btn `}
        onClick = {handleClick}
    >
        <span className={`custom-btn ${containerStyles}`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButtom