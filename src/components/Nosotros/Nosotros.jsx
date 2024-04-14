import React, { useEffect } from 'react'

const Nosotros = () => {

    useEffect(() =>{

      const clickear = () => {
        console.log("click");
      }

      window.addEventListener("click", clickear)

      return() => {
        window.removeEventListener("click", clickear)
      }

    }, [])




  return (
    <div>
      <div>
        <h1>holaaa</h1>
        <p>Este es el componente "Nosotros"</p>
      </div>
      
    </div>
  )
}

export default Nosotros
