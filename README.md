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
├── config.json         # 敏感配置
├── config.example.json # 配置文件示例
├── data/
│   └── data.json       # 数据配置文件
├── img/                # 背景图片
├── music/
│   └── bgm.mp3         # 背景音乐
├── .gitignore      
└── README.md      
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

1. **背景音乐**：推荐使用 MP3 格式，文件大小控制在 5MB 以内
2. **密码保护**：仅前端验证，不适合存放敏感数据
3. **自动播放**：部分浏览器会阻止音频自动播放，需要用户交互后才会播放

## 许可证

[MIT License](LICENSE)

## 致谢

- [Swiper](https://swiperjs.com/) - 现代化的触摸滑块
- [ECharts](https://echarts.apache.org/) - 强大的数据可视化库
