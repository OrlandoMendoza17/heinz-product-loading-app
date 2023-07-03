import React from 'react'
import Header from '@/components/widgets/Header'
import MassivelyActivate from '@/components/pages/activar-ficha/MassivelyActivate'
import SingleActivate from '@/components/pages/activar-ficha/SingleActivate'

const ActivateEmployeesID = () => {

  return (
    <div className="SelectEmployees px-4 md:px-24 pb-20">
      <Header />
      <main className="pt-10 xl:px-80">
        <section className="">

          <SingleActivate />
          <MassivelyActivate />

        </section>
      </main>
    </div>
  )
}

export default ActivateEmployeesID