import './App.css';
import ChatGpt from './chatgpt.png';
import Google from './google.png';
import PowerPoint from './Pp.png';

function App() {
  return (
    <div className="App">
      <div className="Proyect-box">
        <p>
        Sigue lo siguientes pasos:
        <br/>
        1) Abre ChatGPT (crea una cuenta de ser necesario) e introduce el tema que desees que genere. 
        <br/>
        2) Se recomienda utilizar oraciones como “Genera un esquema Powerpoint de X diapositivas sobre [TEMA]”
        <br/> 
        3) Abre GoogleImages e introduce la palabra clave con respecto a tu presentación y descarga las imagenes que creas útiles
        <br/>
        4) Edita e implementa tu Powerpoint
        </p>
      </div>
      <a href="https://chat.openai.com/" target="/blank">
        <img src={ChatGpt} alt="ChatGPT" width="200" height="200"></img>
      </a>
      <a href="https://images.google.com/" target="/blank">
        <img src={Google} alt="GoogleImgs" width="400" height="200"></img>
      </a>
      <img src={PowerPoint} alt="PowerPoint" width="200" height="200"></img>
    </div>
  );
}

export default App;
