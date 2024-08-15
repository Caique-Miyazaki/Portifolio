import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import "../styles/componentes/information-container.sass";

const InformationContainer = () => {
  return (
    <section id="info">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3> Telefone </h3>
          <p>(55)11-958624190</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>caique@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3> Localização </h3>
          <p>São Paulo / SP</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
