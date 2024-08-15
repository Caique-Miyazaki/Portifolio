import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/componentes/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/ca%C3%ADque-miyazaki?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/Caique-Miyazaki ",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/caique_zaki?igsh=ZTFsMXd2ZXd4aXpi",
  },
];
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.link}
          className="social-btn"
          id={network.name}
          key={network.name}
          target="_blank"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
