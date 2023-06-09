"use client"
import React, { FormEventHandler, useRef } from 'react'
import Input from '@/components/widgets/Input'
import Button from '@/components/widgets/Button'
import Form from '@/components/widgets/Form'

const LogIn = (): JSX.Element => {
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    alert("Qué fue chamo?")
  }
  
  return (
    <main className="LogIn">
      {/* <img src="https://i.imgur.com/hkIgVIM.png" alt="" /> */}
      <img src="https://i.imgur.com/yoGBPON.png" alt="" />

      <Form onSubmit={handleSubmit}>
        <div className="background">

          <h1>Inicio de Sesión</h1>
          <p>Carga de Productos VEMP</p>
          {/* <p>Carga de Información de Pedidos Comunicados Heinz</p> */}

          <div className="mt-8 grid gap-10">
            <Input
              title="Usuario"
              id="email"
              type="email"
              placeholder="user@kraftheinz.com"
            />
            <Input
              title="Contraseña"
              id="password"
              type="password"
              placeholder="Your Password"
            />
            <Button type="submit" color="secondary">
              Iniciar sesión
            </Button>
          </div>

        </div>
      </Form>
    </main>
  )
}

export default LogIn