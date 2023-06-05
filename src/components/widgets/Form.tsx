"use client"
import React, { useRef, FormHTMLAttributes } from 'react'

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

const Form = ({ children, ...formProps }: Props) => {
  // onInvalid={() => $form.current.classList.add("validated")}
  const $form = useRef<HTMLFormElement>(null)
  
  const handleInvalid = () =>{
    console.log("Invalid from Component")
    console.log($form.current)
    $form.current?.classList.add("validated")
  }
  
  return (
    <form ref={$form} onInvalid={handleInvalid}>
      {children}
    </form>
  )
}

export default Form