import React, { useState } from 'react'

const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  // file ne show karva mate url ma convert kari

  const reader = new FileReader();
  reader.readAsDataURL(file);    // file ne dataurl ma read karse

  reader.onload = () => {
    setPreview(reader.result);
    //reader mathi url onload ma jase nd result apse 
    // nd aey result setpreview ma set karse nd preview ma store thase
  }
  return (
    <div>
      {preview ? <img src={preview} alt="preview" width="300px" height="200px"/> : "loading..."}
    </div>
  )
}

export default PreviewImage
