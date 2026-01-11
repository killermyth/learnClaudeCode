import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClaudeCodeArchitecture from './claude_code_architecture';
import ToolEngineLayer from './tool_engine_layer';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClaudeCodeArchitecture />} />
        <Route path="/tool-engine" element={<ToolEngineLayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
