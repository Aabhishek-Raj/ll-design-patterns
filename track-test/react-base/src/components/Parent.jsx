import Child from "./child"
import WithHover from "./HOC/withHover"

const Parent = () => {

    const Text = ({ isHovered }) => <h3>{isHovered ? 'Hovering now': 'Hello World'}</h3>

    const HoverText = WithHover(Text)

  return (
    <div>
        <HoverText />
        <h2>Parent:</h2>
        <Child />
    </div>
  )
}

export default Parent