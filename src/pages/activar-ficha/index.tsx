import React from 'react'
import Header from '@/components/widgets/Header/Header'
import MassivelyActivate from '@/components/pages/activar-ficha/MassivelyActivate'
import SingleActivate from '@/components/pages/activar-ficha/SingleActivate'
import NotificationModal from '@/components/widgets/NotificationModal'
import useNotification from '@/hooks/useNotification'

const ActivateEmployeesID = () => {

  const notificationProps = useNotification()
  const { handleNotification } = notificationProps

  const props = { handleNotification }
  
  return (
    <>
      <div className="SelectEmployees Layout">
        <Header />
        <main className="pt-10 xl:px-80">
          <section className="">

            <SingleActivate {...props} />
            <MassivelyActivate {...props} />

          </section>
        </main>
      </div>
      <NotificationModal {...notificationProps}/>
    </>
  )
}

export default ActivateEmployeesID