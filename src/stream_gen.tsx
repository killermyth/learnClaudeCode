import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Radio, Zap, Monitor, Clock, Layers, ArrowRight, Play, Pause } from 'lucide-react';

const StreamGen = () => {
  const navigate = useNavigate();
  const [streamIndex, setStreamIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const streamContent = "我来帮你重构这个函数，首先读取文件内容...";

  useEffect(() => {
    if (!isPlaying) return;
    if (streamIndex < streamContent.length) {
      const timer = setTimeout(() => setStreamIndex(i => i + 1), 80);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setStreamIndex(0), 2000);
    }
  }, [streamIndex, isPlaying]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-cyan-600 hover:text-cyan-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Radio className="text-cyan-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">流式输出生成器 StreamGen</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">实时流式响应 - 让用户看到 AI 的思考过程</p>

        {/* 核心概念 */}
        <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-cyan-800 mb-4">🌊 什么是流式输出？</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-700 mb-2">❌ 传统方式：等待完整响应</p>
                <div className="bg-white p-3 rounded font-mono text-sm">
                  <p className="text-slate-400">用户等待中...</p>
                  <p className="text-slate-400">...</p>
                  <p className="text-slate-400">...(10秒后)</p>
                  <p className="text-slate-800">完整的响应一次性显示</p>
                </div>
                <p className="text-xs text-red-600 mt-2">体验差：用户不知道在发生什么</p>
              </div>
            </div>

            <div>
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-700 mb-2">✅ 流式方式：逐字显示</p>
                <div className="bg-white p-3 rounded font-mono text-sm min-h-[80px]">
                  <span className="text-slate-800">{streamContent.slice(0, streamIndex)}</span>
                  <span className="animate-pulse text-cyan-500">|</span>
                </div>
                <p className="text-xs text-green-600 mt-2">体验好：实时看到 AI 思考过程</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-100 hover:bg-cyan-200 rounded-full text-cyan-700 text-sm mx-auto"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? '暂停演示' : '播放演示'}
          </button>
        </div>

        {/* 技术实现 */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4">⚙️ 技术实现</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-3">Server-Sent Events (SSE)</h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">// 服务端推送</p>
                <p className="text-white">event: message</p>
                <p className="text-white">data: {"{"}"text": "我"{"}"}</p>
                <p className="text-slate-500"></p>
                <p className="text-white">event: message</p>
                <p className="text-white">data: {"{"}"text": "来"{"}"}</p>
                <p className="text-slate-500"></p>
                <p className="text-white">event: message</p>
                <p className="text-white">data: {"{"}"text": "帮"{"}"}</p>
                <p className="text-slate-500">...</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700 mb-3">客户端处理</h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-green-400">// 客户端接收</p>
                <p className="text-purple-400">const</p><p className="text-white"> stream = </p>
                <p className="text-white pl-2">client.messages.stream({"{}"})</p>
                <p></p>
                <p className="text-purple-400">for await</p><p className="text-white"> (</p>
                <p className="text-purple-400 pl-2">const</p><p className="text-white"> chunk </p>
                <p className="text-purple-400">of</p><p className="text-white"> stream) {"{"}</p>
                <p className="text-white pl-4">process(chunk.text)</p>
                <p className="text-white">{"}"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 流程图 */}
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">🔄 数据流向</h2>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 mx-2">
                <Zap className="mx-auto text-purple-600 mb-2" size={28} />
                <p className="font-semibold text-purple-800">LLM</p>
                <p className="text-xs text-slate-600">生成 tokens</p>
              </div>
            </div>

            <ArrowRight className="text-slate-400" size={24} />

            <div className="flex-1 text-center">
              <div className="bg-cyan-100 border-2 border-cyan-300 rounded-lg p-4 mx-2">
                <Radio className="mx-auto text-cyan-600 mb-2" size={28} />
                <p className="font-semibold text-cyan-800">StreamGen</p>
                <p className="text-xs text-slate-600">封装为 SSE</p>
              </div>
            </div>

            <ArrowRight className="text-slate-400" size={24} />

            <div className="flex-1 text-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mx-2">
                <Layers className="mx-auto text-blue-600 mb-2" size={28} />
                <p className="font-semibold text-blue-800">缓冲层</p>
                <p className="text-xs text-slate-600">批量优化</p>
              </div>
            </div>

            <ArrowRight className="text-slate-400" size={24} />

            <div className="flex-1 text-center">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mx-2">
                <Monitor className="mx-auto text-green-600 mb-2" size={28} />
                <p className="font-semibold text-green-800">终端/UI</p>
                <p className="text-xs text-slate-600">实时渲染</p>
              </div>
            </div>
          </div>
        </div>

        {/* 关键特性 */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-cyan-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-cyan-600" size={24} />
              <h3 className="font-bold text-cyan-800">低延迟</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              首个 token 立即显示，无需等待完整响应生成
            </p>
            <div className="bg-cyan-50 p-3 rounded text-xs">
              <p className="text-cyan-700 font-semibold">TTFT (Time To First Token)</p>
              <p className="text-slate-600">~200-500ms 即可开始显示</p>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Layers className="text-blue-600" size={24} />
              <h3 className="font-bold text-blue-800">背压控制</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              当客户端处理慢时，自动调节发送速率
            </p>
            <div className="bg-blue-50 p-3 rounded text-xs">
              <p className="text-blue-700 font-semibold">流量控制</p>
              <p className="text-slate-600">防止客户端被数据淹没</p>
            </div>
          </div>

          <div className="bg-white border-2 border-indigo-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-indigo-600" size={24} />
              <h3 className="font-bold text-indigo-800">工具调用检测</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              实时解析流中的工具调用，触发执行
            </p>
            <div className="bg-indigo-50 p-3 rounded text-xs">
              <p className="text-indigo-700 font-semibold">边解析边执行</p>
              <p className="text-slate-600">检测到工具调用立即触发</p>
            </div>
          </div>
        </div>

        {/* 与主循环的关系 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">🔗 StreamGen 与主循环</h2>

          <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm">
            <p className="text-gray-500">// 在主循环中</p>
            <p><span className="text-purple-600">for await</span> (<span className="text-purple-600">const</span> chunk <span className="text-purple-600">of</span> llm.stream(history)) {"{"}</p>
            <p className="pl-4 text-gray-500">// 1. 实时输出到终端</p>
            <p className="pl-4">terminal.write(chunk.text)</p>
            <p></p>
            <p className="pl-4 text-gray-500">// 2. 累积完整响应</p>
            <p className="pl-4">fullResponse += chunk.text</p>
            <p></p>
            <p className="pl-4 text-gray-500">// 3. 检测工具调用</p>
            <p className="pl-4"><span className="text-purple-600">if</span> (chunk.toolCall) {"{"}</p>
            <p className="pl-8">pendingTools.push(chunk.toolCall)</p>
            <p className="pl-4">{"}"}</p>
            <p>{"}"}</p>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 StreamGen 设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-cyan-200">即时反馈</p>
              <p className="text-xs text-cyan-100">用户立即看到输出</p>
            </div>
            <div>
              <p className="font-semibold text-cyan-200">透明过程</p>
              <p className="text-xs text-cyan-100">思考过程可见</p>
            </div>
            <div>
              <p className="font-semibold text-cyan-200">可中断</p>
              <p className="text-xs text-cyan-100">用户可随时打断</p>
            </div>
            <div>
              <p className="font-semibold text-cyan-200">资源友好</p>
              <p className="text-xs text-cyan-100">边生成边显示，低内存</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamGen;
