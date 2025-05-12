# 员工信息页面

这是一个使用 Next.js、TypeScript 和 Tailwind CSS 构建的员工信息页面。

## 功能特点

- 响应式设计，适配移动端和桌面端
- 支持查看和编辑员工信息
- 平滑的动画效果
- 现代化的 UI 设计

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React
- Heroicons

## 如何运行

1. 克隆仓库：
```bash
git clone https://github.com/your-username/cloudpilot-employee-page.git
cd cloudpilot-employee-page
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 在浏览器中访问 `http://localhost:3000`

## 项目结构

```
cloudpilot-employee-page/
├── src/
│   ├── pages/          # 页面组件
│   ├── styles/         # 全局样式
│   └── types/          # TypeScript 类型定义
├── public/             # 静态资源
└── package.json        # 项目配置
```

## API 接口

项目定义了以下 API 接口：

- `getEmployee`: 获取员工信息
- `updateEmployee`: 更新员工信息
- `uploadAvatar`: 上传头像

## 贡献

欢迎提交 Pull Request 或创建 Issue。

## 许可证

MIT 