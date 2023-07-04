import React, { MouseEventHandler } from 'react'
import Portal from './Portal'
import { FaXmark } from 'react-icons/fa6';

type Props = {
  show: boolean,
  type: "success" | "warning" | "danger",
  title: string,
  message: string,
  closeNotification: MouseEventHandler<HTMLButtonElement>
}

const NotificationModal = ({ show, type, title = "", message, closeNotification }: Props) => {

  const states = {
    success: "modal_green",
    warning: "modal_yellow",
    danger: "modal_red",
  }

  const modalState = type ? states[type] : ""

  return (
    <Portal type="alert">
      {
        show &&
        <div className={`NotificationModal ${modalState}`}>

          <div>
            <span>{title}</span>
            <span>{message}</span>
          </div>

          <button onClick={closeNotification}>
            <FaXmark />
          </button>

        </div>
      }
    </Portal>
  )
}

export default NotificationModal;