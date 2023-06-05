import React from 'react'
import styles from "./styles/_Loader.module.scss"

const { small, normal, } = styles

type Props = {
  size: "small" | "normal" | "large"
}

const Loader = ({ size }: Props) => {
  return (
    <div className={`${styles.Loader} ${styles[size]}`}></div>
  )
}

export default Loader