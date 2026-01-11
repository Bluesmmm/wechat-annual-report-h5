# 微信年度聊天记录报告 H5

一个精美的年度聊天记录可视化报告页面，展示一年中的聊天统计数据。

![Preview](https://img.shields.io/badge/Status-Production-success)
![License](https://img.shields.io/badge/License-MIT-blue)

> **在线演示**: https://bluesmmm.github.io/wechat-annual-report-h5/

## 特性

- 密码保护访问
- 背景音乐播放（支持自动播放和手动控制）
- 流畅的滑页动画（基于 Swiper）
- 词云可视化（基于 ECharts WordCloud）
- 响应式设计，完美适配手机和电脑
- 精美的模糊背景效果
- 数据动画（计数器、进度条、柱状图）
- 可拖拽的音乐控制按钮

## 项目结构

```
wechat-annual-report-h5/
├── index.html          # 主页面文件
├── config.json         # 敏感配置（密码等，不提交到 Git）
├── config.example.json # 配置文件示例
├── data/
│   └── data.json       # 数据配置文件
├── img/                # 背景图片
├── music/
│   └── bgm.mp3         # 背景音乐
├── .gitignore          # Git 忽略文件
└── README.md           # 项目说明
```

## 快速开始

1. 克隆项目：
```bash
git clone https://github.com/bluesmmm/wechat-annual-report-h5.git
cd wechat-annual-report-h5
```

2. 创建配置文件：
```bash
cp config.example.json config.json
```

3. 编辑 `config.json` 设置密码：
```json
{
  "password": "你的密码"
}
```

4. 启动本地服务器：
```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Node.js (需安装 http-server)
npx http-server
```

5. 在浏览器中打开 `http://localhost:8000`

## 数据配置

编辑 `data/data.json` 来自定义你的报告内容：

```json
{
  "meta": {
    "title": "兔妈和八爸的年度聊天记录报告",
    "yearLabel": "2025",
    "roles": ["兔妈", "八爸"],
    "dateRange": "2025-05-20 ～ 2025-12-27"
  },
  "pages": [
    {
      "id": 1,
      "type": "cover",
      "title": "属于兔妈和八爸的年度报告来啦",
      "subtitle": "向左轻滑，开始回忆这一年吧 ～",
      "kv": [
        { "k": "统计时间范围", "v": "2025-05-20 ～ 2025-12-31" },
        { "k": "统计对象", "v": "兔妈 & 八爸" }
      ]
    }
    // ... 更多页面
  ]
}
```

### 页面类型支持

| 类型 | 说明 | 支持的数据字段 |
|------|------|----------------|
| `cover` | 封面页 | title, subtitle, kv |
| `first_chat` | 首次聊天 | title, subtitle, kv |
| `share_media` | 媒体分享 | title, subtitle, kv |
| `year_total_peak` | 年度总量 | title, subtitle, kv, counters |
| `ratio_breakdown` | 占比分析 | title, subtitle, kv, bars |
| `hour_distribution` | 小时分布 | title, subtitle, kv, hourTop |
| `day_peak` | 日峰值 | title, subtitle, kv |
| `month_peak_avg` | 月峰值 | title, subtitle, kv |
| `late_night` | 深夜聊天 | title, subtitle, kv |
| `streak_emoji` | 表情统计 | title, subtitle, kv |
| `top_words` | 热词排行 | title, subtitle, kv, topWords |
| `wordcloud` | 词云 | title, subtitle, words |
| `summary` | 总结页 | title, subtitle, kv |

## 自定义配置

### 修改密码

编辑 `config.json` 文件：

```json
{
  "password": "你的密码"
}
```

> **注意**：`config.json` 已加入 `.gitignore`，不会被提交到 Git 仓库，可以安全存放密码。

### 调整背景模糊程度

在 `index.html` 的 CSS 中修改：

```css
/* 普通页面 */
.bg {
  filter: blur(3px) brightness(0.5);
}

/* 第一页（封面） */
.page-cover .bg {
  filter: blur(1px) brightness(0.45);
}
```

| 效果 | 模糊值 |
|------|--------|
| 无模糊 | `blur(0px)` |
| 轻微模糊 | `blur(1-3px)` |
| 中等模糊 | `blur(4-8px)` |
| 强模糊 | `blur(10px+)` |

### 调整字体大小

在 `index.html` 的 CSS 中修改第一页字体：

```css
.page-cover .title {
  font-size: clamp(24px, 5vw, 36px);  /* 最小24px，最大36px */
}
.page-cover .subtitle {
  font-size: clamp(14px, 3vw, 20px);
}
```

## 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库

2. 在仓库设置中启用 GitHub Pages：
   - Settings → Pages
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main` / `root`
   - 点击 Save

3. 访问 `https://yourusername.github.io/wechat-annual-report-h5/`

**重要提示**：部署时需要在服务器上创建 `config.json` 文件，或者修改代码使用其他方式存储密码。

## 技术栈

- **Swiper 11** - 滑页交互
- **ECharts 5** - 词云可视化
- **原生 JavaScript** - 无框架依赖
- **CSS3** - 动画和响应式设计

## 浏览器兼容性

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 90+ |
| Safari | 14+ |
| Firefox | 88+ |
| Edge | 90+ |
| 微信内置浏览器 | 支持 |

## 注意事项

1. **背景图片**：需要准备 13 张图片（p01.jpg ~ p13.jpg），建议尺寸 1080x1920
2. **背景音乐**：推荐使用 MP3 格式，文件大小控制在 5MB 以内
3. **密码保护**：仅前端验证，不适合存放敏感数据
4. **自动播放**：部分浏览器会阻止音频自动播放，需要用户交互后才会播放

## 许可证

[MIT License](LICENSE)

## 致谢

- [Swiper](https://swiperjs.com/) - 现代化的触摸滑块
- [ECharts](https://echarts.apache.org/) - 强大的数据可视化库
