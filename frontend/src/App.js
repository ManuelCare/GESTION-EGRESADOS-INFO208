
import './App.css';
import fcilogo from './fci-logo.png';
import Formulario from './component/Formulario';


function App() {

  return (
    <div className="App">
      <div className="App-Upper">
        <div className='App-Upper-Decor1'></div>
        <div className='App-Upper-Decor2'>
          <div className='App-Upper-Decor2-text'>Egresados Facultad de Ciencias de la Ingeniería</div>
          <img src={fcilogo} className="App-Upper-Decor2-logo" alt="fci-logo" />
        </div>
        <div className='App-Upper-Menu'>
          <div className='App-Upper-Menu-Button'>INTERES</div>
          <div className='App-Upper-Menu-Button'>BENEFICIOS</div>
          <div className='App-Upper-Menu-Button'>EMPLEOS</div>
          <div className='App-Upper-Menu-Button'>EGRESADOS</div>
          <div className='App-Upper-Menu-Button'>PERSONAL</div>
        </div>
      </div>
      <div id="seccion2">
          <form>
            <fieldset>
              <p><label class="label" for="identificar"> Me identifico como:</label>
                <select name="identificar" id="identificar">
                  <option value="egresado">Egresado</option>
                  <option value="admin">Administracion</option>
                </select>
                <label class="label" for="nombre"> Nombre/s:</label>
                <input type="text"></input>
                <label class="label" for="apellidos"> Apellidos:</label>
                <input type="text"></input>
                <label class="label" for="rut"> RUT:</label>
                <input type="text"></input>
                <label class="label" for="telefono"> Teléfono:</label>
                <input type="text"></input>
                <label class="label" for="E-mail">E-mail:</label>
                <input type="text"></input>
                <label class="label" for="E-mailC">Confirme e-mail:</label>
                <input type="text"></input>
                <label class="label" for="contrasenia">Contraseña:</label>
                <input type="password"></input>
                <label class="label" for="contraseniaC">Confirme contraseña:</label>
                <input type="password"></input>
                <label class="label" for="pais">País:</label>
                <input type="text"></input>
                <label class="label" for="region">Región:</label>
                <input type="text"></input>
                <label class="label" for="comuna">Comuna:</label>
                <input type="text"></input>
                <label class="label" for="situacion">Situación laboral:</label>
                <input type="text"></input>
                <label class="label" for="trabajo">Lugar de trabajo:</label>
                <input type="text"></input>
                <label class="label" for="Cargo/s">Cargos:</label>
                <input type="text"></input>
              </p>
            </fieldset>
          </form>
        </div>
        <div id="seccion3">
        <fieldset>
              <p><label class="label" for="direccion"> Direccion:</label>
                <input type="text"></input>
                <label class="label" for="carreras"> Carrera:</label>
                <select name="carreras" id="carreras">
                  <option value="acustica">Ing. Civil Acustica</option>
                  <option value="electronica">Ing. Civil Electronica</option>
                  <option value="industrial">Ing. Civil Industrial</option>
                  <option value="informatica">Ing. Civil en Informatica</option>
                  <option value="obras">Ing. Civil en Obras Civiles</option>
                  <option value="mecanica">Ing. Civil Mecanica</option>
                  <option value="construccion">Ing. Civil en Construccion</option>
                  <option value="naval">Ing. Naval</option>
                </select>
                <label class="label" for="egreso"> Anio egreso:</label>
                <input type="text"></input>
                <label class="label" for="social"> Social media:</label>
                <input type="text"></input>
                <label class="label" for="sombremi"> Sobre mi:</label>
                <textarea name="sobremi" id="sobremi" cols="20" rows="4" maxlength="255">
                  Descripcion de a lo mas 255 caracteres
                </textarea>
                <div class="submit"><input type="submit" value="Guardar datos" /></div>
              </p>
        </fieldset>
        </div>
    </div>
  );

}

export default App;
