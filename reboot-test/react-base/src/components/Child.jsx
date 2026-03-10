import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Child = () => {
    const user = useContext(UserContext)
    console.log(user) 
  return (
    <div>
        Child name is {user.name}
    </div>
  )
}

export default Child