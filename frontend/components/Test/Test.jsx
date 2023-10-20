import React from 'react';
import { Link } from 'react-router-dom';
import './Test.css';
import eth from './imagenes/eth.png';
import near from './imagenes/near.jpg';
import metapool from './imagenes/metapool.png';
import polka from './imagenes/polka.png';
import one from './imagenes/one.png';
import two from './imagenes/two.png';
import three from './imagenes/three.png';
import four from './imagenes/four.png';
import basic from './imagenes/basic.png';
import apprende from './imagenes/apprende.svg';

export default function Test({ signIn, isSignedIn }) {
  return (
    <>
    
    <header>
      <div class="logoContainer">
        <img src={apprende} class="logo"/>
      </div>

      <nav class="navbarContainer">
        <div class="searchProtocol">
          <span> PROTOCOLO </span>
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
      <div class="test-container">
        
        <div class="test-title">
          <h3> BÁSICOS DE NEAR </h3>
          <span class="course-description">
            <h4> Instrucciones: </h4>
              <p> Para seleccionar respuestas en un examen de opción múltiple con tres opciones, lee cada pregunta detenidamente. Evalúa las opciones y elige la que consideres correcta. Marca el círculo correspondiente a tu elección con cuidado y asegúrate de que esté claramente lleno para evitar confusiones en la corrección. Evita tachones o marcar múltiples opciones en una pregunta para mantener tu respuesta clara y precisa. </p>
          </span>
        </div>

        <div class="question">
                    <h6> 1.-¿Cuál es la característica principal de Near Protocol que lo hace destacar entre otras plataformas de cadenas de bloques? </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              A. Algoritmo de consenso PoW (Prueba de Trabajo).
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label class="form-caheck-label" for="flexRadioDefault2">
                              B. Baja escalabilidad.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                            <label class="form-caheck-label" for="flexRadioDefault3">
                            C. Algoritmo de consenso PoS (Prueba de Participación).
                            </label>
                        </div>
        </div>

        <div class="question">
                    <h6> 2.-¿Qué característica es clave en la tecnología blockchain? </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault4">
                              A. Centralización. 
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault5">
                              B. Descentralización e inmutabilidad. 
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault6">
                              C. Limitación en el número de transacciones.
                            </label>
                        </div>
        </div>

        <div class="question">
                    <h6> 3. ¿Cuál es el objetivo principal de NEAR Protocol? </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              A. Crear una red social descentralizada. 
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                            B. Establecer una plataforma blockchain escalable y fácil de usar. 
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                            C. Facilitar transacciones financieras tradicionales.
                            </label>
                        </div>
        </div>

        <div class="question">
                    <h6> 4. ¿Qué aspecto de la arquitectura de NEAR Protocol se analiza en el video 3?  </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              
                              A. Gestión de la red eléctrica.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              B. Gestión de transacciones y contratos inteligentes.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              C. Gestión de tráfico de internet.
                            </label>
                        </div>
        </div>

        <div class="question">
                    <h6> 5. ¿Qué se compara en el video 4?   </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              A. Recetas de cocina.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              B. NEAR Protocol con otras tecnologías blockchain.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              C. Diferentes marcas de automóviles.
                            </label>
                        </div>
          </div>

          <div class="question">
                    <h6> 6. ¿Por qué NEAR Protocol se considera único en el espacio blockchain? </h6>
                   
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              A. Porque tiene muchos emojis.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              B. Debido a su escalabilidad y facilidad de uso.
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-caheck-label" for="flexRadioDefault1">
                              C. Porque solo está disponible para un grupo selecto de personas.
                            </label>
                        </div>
          </div>
                          

          <button type="submit"> Enviar </button>


      </div>

    </div>

 
    

    </>
  );
}
