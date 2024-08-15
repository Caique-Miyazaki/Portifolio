import SideBar from "./componentes/SideBar";
import MainContent from "./componentes/MainContent";

import "./styles/componentes/app.sass";

function App() {
  return (
    <>
      <div id="portifolio">
        <h1>Caique Miyazaki</h1>
        <SideBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
