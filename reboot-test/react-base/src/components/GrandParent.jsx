import { useState } from 'react'
import Parent from './parent'
import Modal from './Portals/Modal'

const GrandParent = () => {
  const [isOpenModal, setOpenModal] = useState(false)
  return (
    <div>
      <h1>Grand Parent:</h1>
      <Modal isOpen={isOpenModal}>
        <>
          <h2>Hello i am the Modal</h2>
          <button onClick={() => setOpenModal(false)}>Close Modal</button>
        </>
      </Modal>

      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Parent />
    </div>
  )
}

export default GrandParent
