import { Button, Confirmation } from "../../commons"
import { useState } from "react"
import classNames from "classnames"
import { logout } from "../dataService"
import { useNavigate } from "react-router"

import { useContext } from "react"
import AuthContext from "../context"
import "./NavBar.css"
import React from "react"

const Logout = () => {
  const [showConfirm, setShowConfirm] = useState(false)
  const navigate = useNavigate()
  const {handleLoginState} = useContext(AuthContext)

  const handleClick = () => {
    setShowConfirm(true)
  }

  const onLogout = ()=>{
    console.log('logout')
    logout()
    handleLoginState(false)
    navigate("/", { replace: true })
  }

  return (
    <React.Fragment>
      <Button onClick={handleClick}>Logout</Button>
      <Confirmation
        className={classNames("logout-confirm", { hidden: !showConfirm })}
        msg={'¿Cerrar sesión?'}
        showConfirm={setShowConfirm}
        onConfirm={onLogout}
      />
    </React.Fragment>
  )
}

export default Logout
