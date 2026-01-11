import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckSquare, GitBranch, Users, Layers, Target, Clock, AlertCircle, ChevronRight } from 'lucide-react';

const PlanningParallel = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <CheckSquare className="text-indigo-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">规划与并行</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">Planning & Parallelism - 任务分解与子代理协作</p>

        {/* TODO 系统 */}
        <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">📋 TODO 系统</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                TodoWrite 工具让 Claude 能够<span className="font-bold text-indigo-600">规划和跟踪</span>复杂任务，
                把大任务分解为可管理的小步骤。
              </p>

              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-700 mb-3">任务状态</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white p-2 rounded">
                    <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                    <span className="text-sm">pending - 待处理</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-2 rounded">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">in_progress - 进行中</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-2 rounded">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">completed - 已完成</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-700 mb-3">实际示例</h3>
              <div className="bg-slate-800 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4" readOnly />
                    <span className="text-slate-400 line-through text-sm">1. 分析需求</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked className="w-4 h-4" readOnly />
                    <span className="text-slate-400 line-through text-sm">2. 读取现有代码</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-blue-500 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-white text-sm">3. 实现新功能</span>
                    <span className="text-yellow-400 text-xs">← 当前</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span className="text-slate-300 text-sm">4. 编写测试</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span className="text-slate-300 text-sm">5. 运行测试</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-indigo-600 mt-2">✓ 用户可以实时看到进度</p>
            </div>
          </div>
        </div>

        {/* Sub-Agent 系统 */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-800 mb-4">🤖 Sub-Agent "I2A"</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                当任务需要<span className="font-bold text-purple-600">深度探索或并行处理</span>时，
                主 Agent 可以启动子代理来帮忙。
              </p>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-700 mb-3">子代理特点</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="text-purple-600" size={16} />
                    <span>独立的上下文空间</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="text-purple-600" size={16} />
                    <span>可以访问相同的工具</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="text-purple-600" size={16} />
                    <span>结果汇总返回主 Agent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckSquare className="text-purple-600" size={16} />
                    <span>深度限制防止无限递归</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-purple-700 mb-3">使用场景</h3>
              <div className="space-y-3">
                <div className="bg-white border border-purple-200 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">探索任务</span>
                  </div>
                  <p className="text-xs text-slate-600">"搜索整个代码库中的 API 端点"</p>
                </div>
                <div className="bg-white border border-purple-200 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">并行分析</span>
                  </div>
                  <p className="text-xs text-slate-600">"同时分析多个模块的依赖关系"</p>
                </div>
                <div className="bg-white border border-purple-200 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <GitBranch className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">复杂调研</span>
                  </div>
                  <p className="text-xs text-slate-600">"理解这个复杂功能的完整实现"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 并行执行示意 */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4">⚡ 并行执行示意</h2>

          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex items-start gap-8">
              {/* 主 Agent */}
              <div className="flex-shrink-0">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 w-40 text-center">
                  <Users className="mx-auto text-blue-600 mb-2" size={24} />
                  <p className="font-semibold text-blue-800">主 Agent</p>
                  <p className="text-xs text-slate-500">协调者</p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4">
                <ChevronRight className="text-slate-400" size={20} />
                <ChevronRight className="text-slate-400" size={20} />
                <ChevronRight className="text-slate-400" size={20} />
              </div>

              {/* 子代理们 */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-3 flex-1">
                    <p className="font-semibold text-purple-800 text-sm">Sub-Agent 1</p>
                    <p className="text-xs text-slate-500">搜索 src/ 目录</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 bg-purple-200 rounded-full h-1">
                        <div className="w-3/4 bg-purple-500 h-1 rounded-full"></div>
                      </div>
                      <span className="text-xs text-purple-600">75%</span>
                    </div>
                  </div>
                  <Clock className="text-slate-400" size={16} />
                  <span className="text-xs text-slate-500">并行</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 flex-1">
                    <p className="font-semibold text-green-800 text-sm">Sub-Agent 2</p>
                    <p className="text-xs text-slate-500">搜索 lib/ 目录</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 bg-green-200 rounded-full h-1">
                        <div className="w-full bg-green-500 h-1 rounded-full"></div>
                      </div>
                      <span className="text-xs text-green-600">100%</span>
                    </div>
                  </div>
                  <Clock className="text-slate-400" size={16} />
                  <span className="text-xs text-slate-500">并行</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-3 flex-1">
                    <p className="font-semibold text-amber-800 text-sm">Sub-Agent 3</p>
                    <p className="text-xs text-slate-500">搜索 tests/ 目录</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 bg-amber-200 rounded-full h-1">
                        <div className="w-1/2 bg-amber-500 h-1 rounded-full"></div>
                      </div>
                      <span className="text-xs text-amber-600">50%</span>
                    </div>
                  </div>
                  <Clock className="text-slate-400" size={16} />
                  <span className="text-xs text-slate-500">并行</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 text-center">
                所有子代理完成后，结果汇总返回主 Agent 继续处理
              </p>
            </div>
          </div>
        </div>

        {/* 深度限制 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-red-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="text-red-600" size={24} />
              <h3 className="font-bold text-red-800">深度限制</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">防止子代理无限递归</p>
            <div className="bg-red-50 p-3 rounded text-sm">
              <p className="font-mono">maxDepth = 3</p>
              <div className="mt-2 text-xs space-y-1">
                <p>Level 0: 主 Agent</p>
                <p className="pl-4">Level 1: Sub-Agent</p>
                <p className="pl-8">Level 2: Sub-Sub-Agent</p>
                <p className="pl-12 text-red-600">Level 3: ❌ 禁止</p>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <CheckSquare className="text-green-600" size={24} />
              <h3 className="font-bold text-green-800">最佳实践</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 p-2 rounded">
                ✓ 明确定义子任务边界
              </div>
              <div className="bg-green-50 p-2 rounded">
                ✓ 使用 TodoWrite 跟踪进度
              </div>
              <div className="bg-green-50 p-2 rounded">
                ✓ 子代理专注单一职责
              </div>
              <div className="bg-green-50 p-2 rounded">
                ✓ 结果合并前先验证
              </div>
            </div>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 规划与并行设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-indigo-200">分而治之</p>
              <p className="text-xs text-indigo-100">大任务分解为小步骤</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-200">进度可见</p>
              <p className="text-xs text-indigo-100">用户随时知道在做什么</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-200">受控并行</p>
              <p className="text-xs text-indigo-100">深度限制防止失控</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-200">结果汇总</p>
              <p className="text-xs text-indigo-100">子任务结果统一处理</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningParallel;
