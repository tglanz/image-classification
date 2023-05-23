import logo from './assets/logo.png'
import './App.css'
import UploadFileForm from './components/UploadFileForm'
import { useState } from 'react'
import Gallery from './components/Gallery';


function App() {

  const [classification, setClassification] = useState<ClassificationInfo>({
    classification: -1,
    similarities: [],
  });

  return (
    <div className="App">
      <img src={logo} width={100} height={100} />
      <h3>
        Image Classifier
      </h3>

      <div>
        <UploadFileForm onClassification={setClassification} />
      </div>

      <div>
        <h3>
          Similarities
        </h3>

        { classification.classification != -1
          ?
          <div>
            <small>Class: {classification.classification}</small>
            <Gallery images={classification.similarities} />
          </div>
          :
          <div>
            <small>No images. Upload one!</small>
          </div>}
      </div>
    </div>
  )
}

export default App
