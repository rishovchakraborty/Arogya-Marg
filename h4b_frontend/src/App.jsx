import Basichc1 from "./pages/Basichc1";
import Basichc2 from "./pages/Basichc2";
import Basichc3 from "./pages/Basichc3";
import Basichc4 from "./pages/Basichc4";
import Basichc5 from "./pages/Basichc5";
import Basichc6 from "./pages/Basichc6";
import Basichc7 from "./pages/Basichc7";
import Bh1 from "./pages/Bh1";
import Bh2 from "./pages/Bh2";
import Bh3 from "./pages/Bh3";
import Bh4 from "./pages/Bh4";
import Concern1 from "./pages/Concern1";
import Diabetes1 from "./pages/Diabetes1";
import Diabetes2 from "./pages/Diabetes2";
import Diabetes3 from "./pages/Diabetes3";
import Diabetes4 from "./pages/Diabetes4";
import FingerPrint from "./pages/FingerPrint";
import FrontPage from "./pages/FrontPage";
import IrisScan from "./pages/IrisScan";
import Login from "./pages/Login";
import LoginSuccess from "./pages/LoginSuccess";
import SelectCase from "./pages/SelectCase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sh1 from "./pages/Sh1";
import Sh2 from "./pages/Sh2";
import Sh3 from "./pages/Sh3";
import Sh4 from "./pages/Sh4";
import HeartProblem from "./pages/HeartProblem";
import HeartInputs from "./pages/HeartInputs";
import Diabetes5 from "./pages/Diabetes5";
import Diabetes6 from "./pages/Diabetes6";
import Diabetes7 from "./pages/Diabetes7";
import CataractImage from "./pages/CataractImage";
import CataractDoctor from "./pages/CataractDoctor";
import Emergency from "./pages/Emergency";
import DiabetesDoctor from "./pages/DiabetesDoctor";
import DiabetesAudio from "./pages/DiabetesAudio";
import NoteState from "./context/notes/NoteState";
import Ques2 from "./pages/QuestionsBody/Ques2";
import Ques3 from "./pages/QuestionsBody/Ques3";
import Ques4 from "./pages/QuestionsBody/Ques4";
import Ques2Dia from "./pages/DiabetesBody/Ques2";
import Ques3Dia from "./pages/DiabetesBody/Ques3";
import Ques4Dia from "./pages/DiabetesBody/Ques4";
import Quess2 from "./pages/SkinBody/Quess2";
import Quess3 from "./pages/SkinBody/Quess3";
import Quess4 from "./pages/SkinBody/Quess4";
import HeartDoctor from "./pages/HeartDoctor"
function App() {
  return (
    <BrowserRouter>
    <NoteState>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/selectCase" element={<SelectCase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fingerPrint" element={<FingerPrint />} />
        <Route path="/irisScan" element={<IrisScan />} />
        <Route path="/loginSuccess" element={<LoginSuccess />} />
        <Route path="/concern1" element={<Concern1 />} />
        <Route path="/bhcInfo" element={<Basichc1 />} />
        <Route path="/bhcHeight" element={<Basichc2 />} />
        <Route path="/bhcWeight" element={<Basichc3 />} />
        <Route path="/bhcTemp" element={<Basichc4 />} />
        <Route path="/bhcHeartbeat" element={<Basichc5 />} />
        <Route path="/bhcSPO2" element={<Basichc6 />} />
        <Route path="/bhcBP" element={<Basichc7 />} />
        <Route path="/Diabetes1" element={<Diabetes1/>} />
        <Route path="/Diabetes2" element={<Diabetes2/>} />
        <Route path="/Diabetes3" element={<Diabetes3/>} />
        <Route path="/Diabetes4" element={<Diabetes4/>} />
        <Route path="/Diabetes5" element={<Diabetes5/>} />
        <Route path="/Diabetes6" element={<Diabetes6/>} />
        <Route path="/Diabetes7" element={<Diabetes7/>} />
        <Route path="/body" element={<Bh1/>} />
        <Route path="/bodyProblem" element={<Bh2/>} />
        <Route path="/bodyRecord" element={<Bh3/>} />
        <Route path="/bodyConnect" element={<Bh4/>} />
        <Route path="/skinRecord" element={<Sh1/>} />
        <Route path="/skinProblem" element={<Sh2/>} />
        <Route path="/skinAudioRecord" element={<Sh3/>} />
        <Route path="/skinDoctor" element={<Sh4/>} />
        <Route path="/healthProblem" element={<HeartProblem/>} />
        <Route path="/heartInputs" element={<HeartInputs/>} />
        <Route path="/cataractImage" element={<CataractImage/>} />
        <Route path="/cataractDoctor" element={<CataractDoctor/>} />
        <Route path="/emergency" element={<Emergency/>} />
        <Route path="/diabetesAudioRecord" element={<DiabetesAudio/>} />
        <Route path="/diabetesDoctor" element={<DiabetesDoctor/>} />
        <Route path="/bodyques2" element={<Ques2/>} />
        <Route path="/bodyques3" element={<Ques3/>} />
        <Route path="/bodyques4" element={<Ques4/>} />
        <Route path="/diaques2" element={<Ques2Dia/>} />
        <Route path="/diaques3" element={<Ques3Dia/>} />
        <Route path="/diaques4" element={<Ques4Dia/>} />
        <Route path="/skinques2" element={<Quess2/>} />
        <Route path="/skinques3" element={<Quess3/>} />
        <Route path="/skinques4" element={<Quess4/>} />
        <Route path="/heartDoctor" element={<HeartDoctor/>} />
      </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

export default App;
