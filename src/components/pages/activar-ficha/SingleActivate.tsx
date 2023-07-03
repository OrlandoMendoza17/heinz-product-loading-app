import Button from '@/components/widgets/Button'
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react'

const SingleActivate = () => {

  const [employeeID, setEmployeeID] = useState<string>("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setEmployeeID(target.value)
  }

  return (
    <form className="SingleActivate" onSubmit={handleSubmit}>
      <label htmlFor="activar-ficha" className="Input pb-8">
        <h1 className="SingleActivate__title">Activar Ficha indivual</h1>

        <div className="activation-input">
          <input id="activar-ficha" placeholder="💼 Ficha de Trabajador" type="text" value={employeeID} onChange={handleChange} />

          <Button color="info" disabled={!employeeID}>
            <span>Activar</span>
          </Button>
        </div>

      </label>
    </form>
  )
}

export default SingleActivate