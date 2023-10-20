import './NearCourse.css';

export default function NearCourse({ signIn, isSignedIn }) {
    return (
      <>
      
      <header>
        <div class="logoContainer">
          <img src={apprende} class="logo"/>
        </div>
  
        <nav class="navbarContainer">
          <div class="searchProtocol">
            <span> TESTEO </span>
            <select>
              <option value="default"> Escoge una opcion </option> 
              <option value="Ethereum"> Ethereum </option>
              <option value="Vara"> Vara </option>
              <option value="Polkadot"> Polkadot </option>
            </select>
          </div>
  
          <div class="searchTopic">
            <span> TEMA </span>
            <select>
              <option value="default"> Escoge una opcion </option> 
              <option value="Ethereum"> Contratos Inteligentes</option>
              <option value="Vara"> Tokens </option>
              <option value="Polkadot"> NFT </option>
            </select>
          </div>
  
          <div class="searchLevel">
            <span> NIVEL </span>
            <select>
              <option value="default"> Escoge una opcion </option> 
              <option value="Ethereum"> Principiante </option>
              <option value="Vara"> Intermedio </option>
              <option value="Polkadot"> Avanzado </option>
            </select>
          </div>
  
        { !isSignedIn && <button onClick={signIn}>Log In</button> }
        </nav>
      </header>
      
      <div class="content">
      <section class="protocols">
      <h3 class="title"> PROTOCOLOS </h3>
  
        <div class="previews">
        <div class="preview-container">
          <img src={near}/> Near
        </div>
  
        <div class="preview-container">
          <img src={eth}/> Ethereum
        </div>
  
        <div class="preview-container">
          <img src={metapool}/> Metapool
        </div>
  
        <div class="preview-container">
          <img src={polka}/> Polkadot
        </div>
      </div>
      </section>
  
      <section class="most-learnt">
        
        
      <h3 class="title"> MÁS APRENDIDOS </h3>
  
        <div class="previews">
        <div class="preview-container">
          <img src={one}/> NFT's en NEAR Protocol
  
        </div>
  
        <div class="preview-container">
          <img src={two}/> PARACHAINS de forma sencilla
        </div>
  
        <div class="preview-container">
          <img src={three}/> Fundamentos de ICP
        </div>
  
        <div class="preview-container">
          <img src={four}/> Introduccion a VARA Network
        </div>
      </div>
  
      </section>
  
      <section class="my-courses">
        <h3 class="title"> MIS CURSOS </h3>
  
        <div class="previews">
          <div class="preview-container">
            <img src={basic}/> Titulo generico
          </div>
  
          <div class="preview-container">
            <img src={basic}/> Titulo generico
          </div>
  
          <div class="preview-container">
            <img src={basic}/> Titulo generico
          </div>
  
          <div class="preview-container">
            <img src={basic}/> Titulo generico
          </div>
        </div>
  
      </section>
  
      </div>
  
      </>
    );
  }
  