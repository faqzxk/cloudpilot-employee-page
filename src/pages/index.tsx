import { useState, useEffect } from 'react';
import { PencilIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  skills: string[];
  avatar: string;
}

export default function EmployeePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [employee, setEmployee] = useState<Employee>({
    id: '1',
    name: '张三',
    title: '高级前端工程师',
    department: '研发部',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    bio: '热爱技术，专注于前端开发，有5年React开发经验。',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=张三',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSave = async () => {
    // TODO: 实现保存逻辑
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className={`bg-white rounded-lg shadow-sm p-6 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src={employee.avatar}
                  alt={employee.name}
                  className="w-16 h-16 rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                {isEditing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PencilIcon className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <div className={`transform transition-all duration-1000 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <h1 className="text-2xl font-bold text-gray-900">{employee.name}</h1>
                <p className="text-gray-600">{employee.title}</p>
                <p className="text-gray-500">{employee.department}</p>
              </div>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary flex items-center space-x-2 transform transition-all duration-300 hover:scale-105"
              >
                <PencilIcon className="w-5 h-5" />
                <span>编辑</span>
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="btn btn-primary flex items-center space-x-2 transform transition-all duration-300 hover:scale-105"
                >
                  <CheckIcon className="w-5 h-5" />
                  <span>保存</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center space-x-2 transform transition-all duration-300 hover:scale-105"
                >
                  <XMarkIcon className="w-5 h-5" />
                  <span>取消</span>
                </button>
              </div>
            )}
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div>
              <h2 className="text-lg font-semibold mb-4">基本信息</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">邮箱</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={employee.email}
                      onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
                      className="input mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{employee.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">电话</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={employee.phone}
                      onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
                      className="input mt-1"
                    />
                  ) : (
                    <p className="mt-1 text-gray-900">{employee.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">个人简介</h2>
              {isEditing ? (
                <textarea
                  value={employee.bio}
                  onChange={(e) => setEmployee({ ...employee, bio: e.target.value })}
                  className="input h-32"
                />
              ) : (
                <p className="text-gray-900">{employee.bio}</p>
              )}
            </div>
          </div>

          <div className={`mt-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-lg font-semibold mb-4">技能</h2>
            {isEditing ? (
              <input
                type="text"
                value={employee.skills.join(', ')}
                onChange={(e) => setEmployee({ ...employee, skills: e.target.value.split(', ') })}
                className="input"
                placeholder="输入技能，用逗号分隔"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {employee.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transform transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 