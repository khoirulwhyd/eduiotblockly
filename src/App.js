import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Workspace from "./Workspace";
import Workspacelv1 from "./levels/workspacelv1.js";
import Workspacelv2 from "./levels/workspacelv2.js";
import Workspacelv3 from "./levels/workspacelv3.js";
import Workspacelv4 from "./levels/workspacelv4.js";
// import Homepage from "./Homepage";
import Pubsub from "./testRabbit/Pubsub.js";

// documentationpage import
import Index from "./Documentation/index";
import Start from "./Documentation/start";
import VariasiBlock from "./Documentation/varBlock";
import Introduction from "./Documentation/introduction";
import OpLogika from "./Documentation/operasiLogikaBlockly";

// konfigurasi page
// import Konfigurasi from "./conf/indexConf";
import VideoCar from "./Documentation/VideoCarousell";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/workspace1' element={<Workspacelv1 />} />
          <Route path='/workspace2' element={<Workspacelv2 />} />
          <Route path='/workspace3' element={<Workspacelv3 />} />
          <Route path='/workspace4' element={<Workspacelv4 />} />
          <Route path='/index' element={<Index />} />
          <Route path='/start' element={<Start />} />
          <Route path='/variasiblok' element={<VariasiBlock />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/operasilogika' element={<OpLogika />} />
          {/* <Route path='/config' element={<Konfigurasi />} /> */}
          <Route path='/vid' element={<VideoCar />} />

          {/* <Route path='/homepage' element={<Homepage />} /> */}
          <Route path='/pubsub' element={<Pubsub />} />

          <Route path='*' element={<Navigate to='/index' replace />} />

          {/* <Route path='/homepage' element={<Homepage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
