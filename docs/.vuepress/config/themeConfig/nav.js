// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/back_end/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Java基础篇',
        link: '/pages/6d04efbdfa185c88916a6edec2b5bec9/',
      },
      {
        text: 'Java框架篇',
        link: '/pages/6b89cf0a450c5012bb4bdc12eea6bf40/',
      },
      {
        text: 'CVS版本控制',
        link: '/pages/bd16e5/',
      },
      {
        text: '数据库和缓存',
        link: '/pages/2581bd/',
        items: [
          
        ]
      },
      {
        text: '设计模式和架构',
        link: '/pages/94a3fd/',
      },
      {
        text: '容器化和中间件',
        link: '/pages/e743f9/',
      },
      {
        text: 'Linux运维和测试',
        link: '/pages/c6b417/',
      },
      {
        text: '大数据和云计算',
        link: '/pages/8e8a14/',
      },
      {
        text: '工具和环境',
        link: '/pages/3f5458/',
      },
    ],
  },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端基础',
        link: '/pages/of4wa5/',
      },
      {
        text: '前端框架',
        link: '/pages/9f15c1a281d8bedb/',
      },
      {
        text: '可视化',
        link: '/pages/a73ae6/',
      },
      {
        text: 'UI设计和产品',
        link: '/pages/d4d63f/',
      },
    ],
  },
  {
    text: '工作',
    link: '/work/',
    items: [
      { text: '个人', link: '/pages/236765/',},
      { text: '公司', link: '/pages/962ae8/',},
    
    ],
  },
  {
    text: '工具箱',
    link: '/tool/',
    items: [
      {
        text: '在线工具',
        link: '/pages/70eb9b/',
      },
      {
        text: '后端工具',
        link: '/pages/2fe766/',
      },
      {
        text: '前端工具',
        link: '/pages/f205c2/',
      },
    ],
  },
  {
    text: '导航',
    link: '/navigation/',
    items: [
      {
        text: '后端学习',
        link: '/pages/a0fb53/',
      },
      {
        text: '前端学习',
        link: '/pages/c0ac49/',
      },
      {
        text: '软件资源',
        link: '/pages/3b13c4/',
      },
      
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '友情链接', link: '/friends/' },
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '关于', link: '/about/' },
]
