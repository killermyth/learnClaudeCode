import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClaudeCodeArchitecture from './claude_code_architecture';
import ToolEngineLayer from './tool_engine_layer';
import RealtimeGuidance from './realtime_guidance';
import MainLoop from './main_loop';
import StreamGen from './stream_gen';
import ToolScheduler from './tool_scheduler';
import ContextManagement from './context_management';
import PlanningParallel from './planning_parallel';
import SecurityRisk from './security_risk';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClaudeCodeArchitecture />} />
        <Route path="/tool-engine" element={<ToolEngineLayer />} />
        <Route path="/realtime-guidance" element={<RealtimeGuidance />} />
        <Route path="/main-loop" element={<MainLoop />} />
        <Route path="/stream-gen" element={<StreamGen />} />
        <Route path="/tool-scheduler" element={<ToolScheduler />} />
        <Route path="/context-management" element={<ContextManagement />} />
        <Route path="/planning-parallel" element={<PlanningParallel />} />
        <Route path="/security-risk" element={<SecurityRisk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
