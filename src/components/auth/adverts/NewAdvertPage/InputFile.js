const InputFile = ({...props}) => {
  return (
    <>
      <label className="ad_name">
        Foto <input className="foto_ad" name="photo" type="file"{...props} />

      </label>
    </>
  )
}

export default InputFile
