import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"


const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <h1 className="screen" max={70}  mode="single">{calc.num ? calc.num : calc.res}</h1>
  )
}

export default Screen;