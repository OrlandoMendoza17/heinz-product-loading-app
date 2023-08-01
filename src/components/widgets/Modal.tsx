import React, { ReactNode, Dispatch, SetStateAction, MouseEventHandler } from 'react'
import Portal from './Portal'
import getDataAttribute, { TargetProps } from '@/utils/getDataAttribute'
import { FaXmark } from 'react-icons/fa6'

type Props = {
  showModal: boolean,
  setModal: Dispatch<SetStateAction<boolean>>,
  closeButton?: boolean,
  transparent?: boolean,
  children: ReactNode,
}

const Modal = ({ showModal, setModal, closeButton = true, transparent = false, children }: Props) => {

  const handleClick: MouseEventHandler<HTMLDivElement> = ({ target }) => {
    const clickedOutModal = getDataAttribute(target as TargetProps, "modal")
    if (clickedOutModal) setModal(false)
  }

  const onClick = closeButton ? handleClick : undefined

  return (
    showModal ?
    <Portal type="modal">
      <div
        onClick={onClick}
        data-modal={closeButton}
        className={`Modal`}
      >
        <div className={`Modal_container ${transparent && "transparent"}`}>
          {
            closeButton &&
            <button className="close_btn" onClick={() => setModal(false)}>
              <FaXmark className="fill-black w-6 h-6"/>
            </button>
          }
          {
            children
          }
        </div>
      </div>
    </Portal>
    :
    <></>
  )
}

export default Modal