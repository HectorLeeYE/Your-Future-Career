import { useState } from 'react'
import futureCareer from './assets/future_career.png'
import Swal from 'sweetalert2'
import './App.css'


function App() {
  const [file, setFile] = useState(null);
  const [showGeneratedImage, setShowGeneratedImage] = useState(false);

  function handleChange(e) {      //Display the Image
    const selectedFile = e.target.files;
    setFile(URL.createObjectURL(selectedFile[0]));
  }

  function handleSubmit(e) {
    console.log('Submit Button Pressed')
    Swal.fire({
      title: "Successful Submission",
      text: "Thank you for submitting your photo. Your future career will be generated in 5 seconds! ",
      icon: "success"
    });

    setTimeout(() => {
      setShowGeneratedImage(true);
      setFile(null);
    }, 5000);
  }


  return (
    <>
    {/* Recommit for index.html shenaniggans */}
      <h1>😎Your Future Career!😎</h1>

      <div className="card">
        <h2>😊Upload Your Current Photo: </h2>
        <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={handleChange}>

        </input>
        <img src={file} />

        {showGeneratedImage && (
          <>
            <h2>Generated Future Career Image:</h2>
            <img src={futureCareer} alt="Generated Future Career" />
          </>
        )}
      </div>
      <button onClick={handleSubmit}>🤩 Submit Your Photo! 🤩</button>
    </>
  )
}

export default App
