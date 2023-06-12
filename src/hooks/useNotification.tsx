import { MouseEventHandler, useState } from "react"

export type NotificationProps = {
  show: boolean,
  type: "success" | "warning" | "danger",
  title: string,
  message: string,
}

export type OpenProps = Omit<NotificationProps, "show">

const useNotification = () => {

  const [notification, setNotification] = useState<NotificationProps>({
    show: false,
    type: "warning",
    title: "Notification",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, voluptates!",
  })

  const handleNotification = {
    open: (notification: OpenProps): void => {
      setNotification({
        ...notification,
        show: true,
      })
      setTimeout(() => (close as () => void)(), 10000)
    },
    close: () => {
      setNotification({
        ...notification,
        show: false,
      })
    },
  }

  return {
    notification,
    handleNotification,
  }
}

export default useNotification;