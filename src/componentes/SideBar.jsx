import Avatar from "../img/EU.jpeg";

import "../styles/componentes/sideBar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Caique Miyazaki" />
      <p className="title">Desenvolvedor </p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Download
      </a>
    </aside>
  );
};

export default SideBar;
