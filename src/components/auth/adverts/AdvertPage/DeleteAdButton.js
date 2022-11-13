import classNames from "classnames"
import { useState } from "react"
import { Button, Confirmation } from "../../../commons"

const DeleteAdButton = ({ onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleClick = () => {
    setShowConfirm(true)
  }

  return (
    <>
      <Button onClick={handleClick} className="button_delete">Borrar Anuncio</Button>
      <Confirmation
        className={classNames("delete-confirm", { hidden: !showConfirm })}
        msg={"¿Borrar Anuncio?"}
        showConfirm={setShowConfirm}
        onConfirm={onDelete}
      />
    </>
  )
}

export default DeleteAdButton
