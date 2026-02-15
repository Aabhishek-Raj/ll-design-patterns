import { useState } from 'react'

const WithHover = (Component) => {

    return (props) => {
        const [isHovered, setHovered] = useState(false)

        return (
            <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{backgroundColor: isHovered ? 'yellowgreen': 'transparent'}}
            >
                <Component {...props} isHovered={isHovered}/>
            </div>
        )
    }
}

export default WithHover