import { defineConfig } from 'vite'


export default defineConfig({
    // base: './',
    themeConfig: {
        siteTitle: 'Roy-Blog',
        // siteTitle: false
        logo: '/.vitepress/public/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/index.md', activeMatch: '/index.html' },
            { text: '每日一题', link: '/DailyQuestion/', activeMatch: '/DailyQuestion/' },
            { text: '面试题', link: '/Interview/index.md', activeMatch: '/Interview/' },
            { text: '进阶', link: '/Improve/a.md', activeMatch: '/Improve/' },
            { text: '工具', link: '/Tools/index.md', activeMatch: '/Tools/' },
        ],

        sidebar: {
            "/DailyQuestion/": [
                {
                    text: '链表',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '反转链表', link: '/DailyQuestion/LinkedList/1.md' },
                        { text: '链表内指定区间反转', link: '/DailyQuestion/LinkedList/2.md' },
                    ]
                },
                // {
                //     text: '二分查找',
                //     collapsible: true,
                //     collapsed: true,
                //     items: [
                //         { text: '', link: '/DailyQuestion/b.md' }
                //     ]
                // },
            ],
            "/Interview/": [
                {
                    text: '1. vue',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对Vue的理解', link: '/Interview/vue/1' },
                        { text: '2. 说说你对SPA（单页应用）的理解', link: '/Interview/vue/2' },
                        { text: '3. Vue中的v_show和v-if怎么理解', link: '/Interview/vue/3' },
                        { text: '4. Vue实例挂载的过程中发生了什么？', link: '/Interview/vue/4' },
                        { text: '5. 说说你对Vue的生命周期的理解', link: '/Interview/vue/5' },
                        { text: '6. 为什么Vue中的 v-if 和 v-for 不建议一起使用？', link: '/Interview/vue/6' },
                        { text: '7. SPA（但也应用）首屏架子啊速度慢怎么解决？', link: '/Interview/vue/7' },
                        { text: '8. 为什么data属性是一个函数而不是一个对象？', link: '/Interview/vue/8' },
                        { text: '9. Vue中给对象添加新属性界面不刷新？', link: '/Interview/vue/9' },
                        { text: '10. Vue中组件和插件有什么区别', link: '/Interview/vue/10' },
                        { text: '11. Vue组件通信的方式有哪些？', link: '/Interview/vue/11' },
                        { text: '12. 说说你对双向绑定的理解？', link: '/Interview/vue/12' },
                        { text: '13. 说说你对nexttick的理解？', link: '/Interview/vue/13' },
                        { text: '14. 说说你对Vue的mixin的理解', link: '/Interview/vue/14' },
                        { text: '15. 说说你对slot的理解？ slot使用场景有哪些？', link: '/Interview/vue/15' },
                        { text: '16. Vue.observable你有了解过吗？ 说说看', link: '/Interview/vue/16' },
                        { text: '17. 你知道Vue中key的原理吗？', link: '/Interview/vue/17' },
                        { text: '18说说你对keep-alive的理解是什么？', link: '/Interview/vue/18' },
                        { text: '19. Vue常用的修饰符有哪些？ 有什么应用场景？', link: '/Interview/vue/19' },
                        { text: '20. 你写过自定义指令吗？ 自定义指令的应用场景有哪些？', link: '/Interview/vue/20' },
                        { text: '21. Vue中的过滤器有了解吗？ 过滤器的应用场景有哪些？', link: '/Interview/vue/21' },
                        { text: '22. 什么是虚拟DOM？如何实现一个虚拟DOM？说说你的思路', link: '/Interview/vue/22' },
                        { text: '23. 你了解Vue的diff算法吗？说说看', link: '/Interview/vue/23' },
                        { text: '24. Vue项目中有封装过axios吗？主要是封装哪方面的？', link: '/Interview/vue/24' },
                        { text: '25. 你了解axios的原理吗？有看过它的源码吗？', link: '/Interview/vue/25' },
                        { text: '26. SSR解决了什么问题？ 有做过SSR吗？ 你是怎么做的？', link: '/Interview/vue/26' },
                        { text: '27. 说下你的Vue项目目录结构， 若果是大型项目你该怎么划分结构和划分组件呢？', link: '/Interview/vue/27' },
                        { text: '28. Vue要做权限管理该怎么做？如果控制要到按钮级别的权限怎么做？', link: '/Interview/vue/28' },
                        { text: '29. Vue项目中你是如何解决跨域的呢？', link: '/Interview/vue/29' },
                        { text: '30. Vue羡慕本地开发完成后部署到服务器后报404是什么原因呢？', link: '/Interview/vue/30' },
                        { text: '31. 你是怎么处理Vue项目中的错误的？', link: '/Interview/vue/31' },
                        { text: '32. Vue有了解过吗？ 能说说跟Vue2的区别吗', link: '/Interview/vue/32' }
                    ]
                },
                {
                    text: '2.vue3',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                        { text: '2. Vue3.0 性能提升主要是通过那几个方面体现的', link: '/Interview/vue3/2' },
                        { text: '3. Vue3.0里为什么要永Peoxy API 替代 defineProperty API？', link: '/Interview/vue3/3' },
                        { text: '4. Vue3.0 所采用的 Composition Api 与Vue2.x 使用的 Opitions Api 有什么不同？', link: '/Interview/vue3/4' },
                        { text: '5. 说说Vue3.0 中的Treeshaking特性？ 举例说明一下', link: '/Interview/vue3/5' },
                        { text: '6. 用Vue3.0 写过组件吗？ 如果想实现一个Modal你会怎么设计？', link: '/Interview/vue3/6' },
                    ]
                },
                {
                    text: '3.ES6',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说 Var let const之间的区别', link: '/Interview/ES6/1' },
                        { text: '2. ES6 中数组新增了哪些扩展', link: '/Interview/ES6/2' },
                        { text: '3. ES6 中对象新增了哪些扩展', link: '/Interview/ES6/3' },
                        { text: '4. ES6 中函数新增了哪些 扩展', link: '/Interview/ES6/4' },
                        { text: '5. ES6 中新增的 Set、Map两种数据结构怎么理解？', link: '/Interview/ES6/5' },
                        { text: '6. 你怎么理解ES6 中的Promise的？ 使用场景', link: '/Interview/ES6/6' },
                        { text: '7. 怎么理解ES6 中的Generator的？ 使用场景？', link: '/Interview/ES6/7' },
                        { text: '8. 你是怎么理解ES6 中的Proxy的？ 使用场景？', link: '/Interview/ES6/8' },
                        { text: '9. 你式怎么理解ES6 中的Module的？ 使用场景', link: '/Interview/ES6/9' },
                        { text: '10. 你是怎么理解ES6 中 Decorator？ 使用场景', link: '/Interview/ES6/10' },
                    ]
                },
                {
                    text: '4.javaScript',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说JavaScript中的数据类型？ 存储上的差别？', link: '/Interview/JavaScript/1' },
                        { text: '2. 数组的常用方法', link: '/Interview/JavaScript/2' },
                        { text: '3. JavaScript字符长的常用方法有哪些？', link: '/Interview/JavaScript/3' },
                        { text: '4. 谈谈 JavaScript中的类型转换机制', link: '/Interview/JavaScript/4' },
                        { text: '5. == 和 ===区别， 分别在什么情况下使用', link: '/Interview/JavaScript/5' },
                        { text: '6. 深拷贝和浅拷贝的区别？ 如何实现一个深拷贝', link: '/Interview/JavaScript/6' },
                        { text: '7. 说说你对闭包的理解？闭包的使用场景', link: '/Interview/JavaScript/7' },
                        { text: '8. 说说你对作用域链的理解', link: '/Interview/JavaScript/8' },
                        { text: '9. JavaScript原型，原型链？ 有什么特点？', link: '/Interview/JavaScript/9' },
                        { text: '10. Javascript如何实现继承？', link: '/Interview/JavaScript/10' },
                        { text: '11. 谈谈this对象的理解', link: '/Interview/JavaScript/11' },
                        { text: '12. JavaScript中执行上下文和执行栈是什么？', link: '/Interview/JavaScript/12' },
                        { text: '13. 说说JavaScript中的事件模型', link: '/Interview/JavaScript/13' },
                        { text: '14. typeof和instanceof的区别', link: '/Interview/JavaScript/14' },
                        { text: '15. 解释先什么是事件代理？应用场景', link: '/Interview/JavaScript/15' },
                        { text: '16. 说说new操作符具体干了什么', link: '/Interview/JavaScript/16' },
                        { text: '17. ajax原理是什么？如何实现', link: '/Interview/JavaScript/17' },
                        { text: '18. bind， call, apply 区别 如何使爱惜你一个bind？', link: '/Interview/JavaScript/18' },
                        { text: '19. 说说你对正则表达式的理解？ 应用场景？', link: '/Interview/JavaScript/19' },
                        { text: '20. 说说你对事件循环的理解', link: '/Interview/JavaScript/20' },
                        { text: '21. DOM常见的操作有哪些？', link: '/Interview/JavaScript/21' },
                        { text: '22. 说说你对BOM的理解， 有哪些应用场景', link: '/Interview/JavaScript/22' },
                        { text: '23. 举例说明你对尾递归的理解，有哪些应用场景', link: '/Interview/JavaScript/23' },
                        { text: '24. 说说JavaScript 中内存泄漏的几种情况？', link: '/Interview/JavaScript/24' },
                        { text: '25. JavaScript本地存储的方式有哪些？ 区别及应用场景？', link: '/Interview/JavaScript/25' },
                        { text: '26. 说说你对函数式编程的理解？优缺点？', link: '/Interview/JavaScript/26' },
                        { text: '27. JacaScript中如何实现函数缓存？函数缓存有哪些应用场景？', link: '/Interview/JavaScript/27' },
                        { text: '28. 说说JavaScript数字精度丢失的问题， 如何解决？', link: '/Interview/JavaScript/28' },
                        { text: '29. 什么式防抖和节流？ 有什么区别？ 如何实现？', link: '/Interview/JavaScript/29' },
                        { text: '30. 如何判断一个元素是否在可视区域中？', link: '/Interview/JavaScript/30' },
                        { text: '31. 大文件上传如何做断电续传？', link: '/Interview/JavaScript/31' },
                        { text: '32. 如何制作上拉加载， 下拉刷新', link: '/Interview/JavaScript/32' },
                        { text: '33. 什么是单点登录？ 如何实现', link: '/Interview/JavaScript/33' },
                        { text: '34. web常见的攻击方式有哪些？ 如何防御', link: '/Interview/JavaScript/34' },
                    ]
                },
                {
                    text: '5. CSS',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对盒子模型的理解？', link: '/Interview/CSS/1' },
                        { text: '2. CSS选择器有哪些？优先级？哪些属性可以继承', link: '/Interview/CSS/2' },
                        { text: '3. 说说emremvhvw区别？', link: '/Interview/CSS/3' },
                        { text: '4. 说说设备像素， css像素、 设备独立像素， dpr， ppi之间的区别', link: '/Interview/CSS/4' },
                        { text: '5. Css中，有哪些方式可以影厂页面元素？ 区别？', link: '/Interview/CSS/5' },
                        { text: '6. 谈谈你对BFC的理解？', link: '/Interview/CSS/6' },
                        { text: '7. 元素水平垂直居中的方法有哪些？ 如果元素补丁宽高呢？', link: '/Interview/CSS/7' },
                        { text: '8. 如何实现两栏布局，右侧自适应？三栏布局中间自适应呢？', link: '/Interview/CSS/8' },
                        { text: '9. 说说flexbox（弹性盒布局模型）以及使用场景', link: '/Interview/CSS/9' },
                        { text: '10. 介绍一下grid网格布局', link: '/Interview/CSS/10' },
                        { text: '11. css新增了哪些新特性？', link: '/Interview/CSS/11' },
                        { text: '12. css 动画有哪些？', link: '/Interview/CSS/12' },
                        { text: '13. 怎么理解回流跟重绘？什么场景下会触发', link: '/Interview/CSS/13' },
                        { text: '14. 什么是响应式设计？ 响应式设计的基本原理是什么？ 如何做？', link: '/Interview/CSS/14' },
                        { text: '15. 如何实现单行多行文本溢出的省略样式？', link: '/Interview/CSS/15' },
                        { text: '16. 如何使用css完成视差滚动效果', link: '/Interview/CSS/16' },
                        { text: '17. css如何画一个三角形？原理是什么？', link: '/Interview/CSS/17' },
                        { text: '18. 让Chrome支持小于12px的文字方式有哪些', link: '/Interview/CSS/18' },
                        { text: '19. 说说对Css预编译语言的理解？ 有哪些区别？', link: '/Interview/CSS/19' }
                    ]
                },
                {
                    text: '6.WebPack',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对webpack的理解？ 解决了什么问题', link: '/Interview/Webpack/1' },
                        { text: '2. 说说webpack的构建流程', link: '/Interview/Webpack/2' },
                        { text: '3. 说说webpack中常见的Loader？解决了什么问题', link: '/Interview/Webpack/3' },
                        { text: '4. 说说webpack中常见的Plugin？ 解决了什么问题？', link: '/Interview/Webpack/4' },
                        { text: '5. 说说Loader和Plugin的区别？ 编写Loader， Plugin的思路', link: '/Interview/Webpack/5' },
                        { text: '6. 说说webpack的热更新是如何做到的？ 原理是什么', link: '/Interview/Webpack/6' },
                        { text: '7. 说说webpack proxy工作原理？ 为什么能解决跨域问题', link: '/Interview/Webpack/7' },
                        { text: '8. 说说如何借助webpack来优化前端性能？', link: '/Interview/Webpack/8' },
                        { text: '9. 如何提高webpack的构建速度', link: '/Interview/Webpack/9' },
                        { text: '10. 与webpack类似的工具还有那些', link: '/Interview/Webpack/10' },
                    ]
                },
                {
                    text: '7.HTTP',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 什么是HTTP？ HTTP 和 HTTPS的区别？', link: '/Interview/HTTP/1' },
                        { text: '2. 为什么说HTTPS比HTTP安全？ HTTPS是如何保证安全的？', link: '/Interview/HTTP/2' },
                        { text: '3. 如何理解UDP和TCP？ 区别？ 应用场景？', link: '/Interview/HTTP/3' },
                        { text: '4. 如何理解OSI七层模型？', link: '/Interview/HTTP/4' },
                        { text: '5. 如何理解TCPIP协议', link: '/Interview/HTTP/5' },
                        { text: '6. DNS协议是什么？ 说说DNS完整的查询过程', link: '/Interview/HTTP/6' },
                        { text: '7. 如何理解CDN？ 说说实现原理', link: '/Interview/HTTP/7' },
                        { text: '8. 说说HTTP1.01.12.0 的区别', link: '/Interview/HTTP/8' },
                        { text: '9. 说说HTTP常见的状态码有哪些，适用场景', link: '/Interview/HTTP/9' },
                        { text: '10. 说一下GET和POST的区别？', link: '/Interview/HTTP/10' },
                        { text: '11. 说说HTTP 常见的请求头有哪些？作用？', link: '/Interview/HTTP/11' },
                        { text: '12. 说说地址栏输入 URL 敲下回车后发生了什么', link: '/Interview/HTTP/11' },
                        { text: '13. 说说TCP为什么需要三次握手和四次挥手？', link: '/Interview/HTTP/13' },
                        { text: '14. 说说对WebSocket的理解？应用场景？', link: '/Interview/HTTP/14' },
                    ]
                },
                {
                    text: '8. NodeJS',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对Node.js 的理解？优缺点？应用场景？', link: '/Interview/NodeJS/1' },
                        { text: '2. 说说 Node. js 有哪些全局对象？', link: '/Interview/NodeJS/2' },
                        { text: '3. 说说对 Node 中的 process 的理解？有哪些常用方法？', link: '/Interview/NodeJS/3' },
                        { text: '4. 说说对 Node 中的 fs模块的理解 有哪些常用方法', link: '/Interview/NodeJS/4' },
                        { text: '5. 说说对 Node 中的 Buffer 的理解？应用场景？', link: '/Interview/NodeJS/5' },
                        { text: '6. 说说对 Node 中的 Stream 的理解？应用场景？', link: '/Interview/NodeJS/6' },
                        { text: '7. 说说Node中的EventEmitter 如何实现一个EventEmitter', link: '/Interview/NodeJS/7' },
                        { text: '8. 说说对Nodejs中的事件循环机制理解', link: '/Interview/NodeJS/8' },
                        { text: '9. 说说 Node 文件查找的优先级以及 Require 方法的文件查找策', link: '/Interview/NodeJS/9' },
                        { text: '10. 说说对中间件概念的理解，如何封装 node 中间件？', link: '/Interview/NodeJS/10' },
                        { text: '11. 如何实现jwt鉴权机制？说说你的思路', link: '/Interview/NodeJS/11' },
                        { text: '12. 如何实现文件上传？说说你的思路', link: '/Interview/NodeJS/12' },
                        { text: '13. 如果让你来设计一个分页功能, 你会怎么设计 前后端如何交互', link: '/Interview/NodeJS/13' },
                        { text: '14. Node性能如何进行监控以及优化？', link: '/Interview/NodeJS/14' }
                    ]
                },
                {
                    text: '9. React',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说对 React 的理解？有哪些特性？', link: '/Interview/React/1' },
                        { text: '2. 说说 Real DOM 和 Virtual DOM 的区别？优缺点？', link: '/Interview/React/2' },
                        { text: '3. 说说 React 生命周期有哪些不同阶段？每个阶段对应的方法是？', link: '/Interview/React/3' },
                        { text: '4. state 和 props 有什么区别？', link: '/Interview/React/4' },
                        { text: '5. super() 和 super(props) 有什么区别？', link: '/Interview/React/5' },
                        { text: '6. 说说 React中的setState执行机制', link: '/Interview/React/6' },
                        { text: '7. 说说React的事件机制？', link: '/Interview/React/7' },
                        { text: '8. React事件绑定的方式有哪些？区别？', link: '/Interview/React/8' },
                        { text: '9. React构建组件的方式有哪些？区别？', link: '/Interview/React/9' },
                        { text: '10. React中组件之间如何通信？', link: '/Interview/React/10' },
                        { text: '11. React中的key有什么作用？', link: '/Interview/React/11' },
                        { text: '12. 说说对React refs 的理解？应用场景？', link: '/Interview/React/12' },
                        { text: '13. 说说对React中类组件和函数组件的理解？有什么区别？', link: '/Interview/React/13' },
                        { text: '14. 说说对受控组件和非受控组件的理解？应用场景？', link: '/Interview/React/14' },
                        { text: '15. 说说对高阶组件的理解？应用场景', link: '/Interview/React/15' },
                        { text: '16. 说说对React Hooks的理解？解决了什么问题？', link: '/Interview/React/16' },
                        { text: '17. 说说react中引入css的方式有哪几种？区别？', link: '/Interview/React/17' },
                        { text: '18. 在react中组件间过渡动画如何实现？', link: '/Interview/React/18' },
                        { text: '19. 说说你对Redux的理解？其工作原理？', link: '/Interview/React/19' },
                        { text: '20. 说说对Redux中间件的理解？常用的中间件有哪些？实现原理？', link: '/Interview/React/20' },
                        { text: '21. 你在React项目中是如何使用Redux的 项目结构是如何划分的？', link: '/Interview/React/21' },
                        { text: '22. 说说你对React Router的理解？常用的Router组件有哪些？', link: '/Interview/React/22' },
                        { text: '23. 说说React Router有几种模式？实现原理？', link: '/Interview/React/23' },
                        { text: '24. 说说你对immutable的理解？如何应用在react项目中', link: '/Interview/React/24' },
                        { text: '25. 说说React render方法的原理？在什么时候会被触发？', link: '/Interview/React/25' },
                        { text: '26. 说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？', link: '/Interview/React/26' },
                        { text: '27. 说说React diff的原理是什么？', link: '/Interview/React/27' },
                        { text: '28. 说说对Fiber架构的理解？解决了什么问题？', link: '/Interview/React/28' },
                        { text: '29. 说说React Jsx转换成真实DOM过程？', link: '/Interview/React/29' },
                        { text: '30. 说说 React 性能优化的手段有哪些？', link: '/Interview/React/30' },
                        { text: '31. 说说你在React项目是如何捕获错误的？', link: '/Interview/React/31' },
                        { text: '32. 说说React服务端渲染怎么做？原理是什么？', link: '/Interview/React/32' },
                        { text: '33. 说说你在使用React 过程中遇到的常见问题？如何解决', link: '/Interview/React/33' },
                    ]
                },
                {
                    text: '10. 版本控制',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对版本管理的理解？常用的版本管理工具有哪些？', link: '/Interview/VersionControl/1' },
                        { text: '2. 说说你对Git的理解？', link: '/Interview/VersionControl/2' },
                        { text: '3. 说说Git中 fork, clone,branch这三个概念，有什么区别', link: '/Interview/VersionControl/3' },
                        { text: '4. 说说Git常用的命令有哪些？', link: '/Interview/VersionControl/4' },
                        { text: '5. 说说Git 中 HEAD、工作树和索引之间的区别？', link: '/Interview/VersionControl/5' },
                        { text: '6. 说说对git pull 和 git fetch 的理解？有什么区别？', link: '/Interview/VersionControl/6' },
                        { text: '7. 说说你对git stash 的理解？应用场景？', link: '/Interview/VersionControl/7' },
                        { text: '8. 说说你对git rebase 和 git merge的理解？区别？', link: '/Interview/VersionControl/8' },
                        { text: '9. 说说 git 发生冲突的场景？如何解决？', link: '/Interview/VersionControl/9' },
                        { text: '10. 说说你对git reset 和 git revert 的理解？区别？', link: '/Interview/VersionControl/10' }
                    ]
                },
                {
                    text: '11. 操作系统',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对操作系统的理解？核心概念有哪些？', link: '/Interview/OperatingSystem/1' },
                        { text: '2. 说说什么是进程？什么是线程？区别？', link: '/Interview/OperatingSystem/2' },
                        { text: '3. 说说 linux系统下 文件操作常用的命令有哪些？', link: '/Interview/OperatingSystem/3' },
                        { text: '4. 说说 linux 系统下 文本编辑常用的命令有哪些？', link: '/Interview/OperatingSystem/4' },
                        { text: '5. 说说你对 linux 用户管理的理解？相关的命令有哪些？', link: '/Interview/OperatingSystem/5' },
                        { text: '6. 说说你对输入输出重定向和管道的理解？应用场景？', link: '/Interview/OperatingSystem/6' },
                        { text: '7. 说说你对 shell 的理解？常见的命令？', link: '/Interview/OperatingSystem/7' },
                    ]
                },
                {
                    text: '12. TypeScript',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对 TypeScript 的理解？与 JavaScript 的区别？', link: '/Interview/TypeScript/1' },
                        { text: '2. 说说 typescript 的数据类型有哪些？', link: '/Interview/TypeScript/2' },
                        { text: '3. 说说你对 TypeScript 中枚举类型的理解？应用场景？', link: '/Interview/TypeScript/3' },
                        { text: '4. 说说你对 TypeScript 中接口的理解？应用场景？', link: '/Interview/TypeScript/4' },
                        { text: '5. 说说你对 TypeScript 中类的理解？应用场景？', link: '/Interview/TypeScript/5' },
                        { text: '6. 说说你对 TypeScript 中函数的理解？与 JavaScript 函数的区别？', link: '/Interview/TypeScript/6' },
                        { text: '7. 说说你对 TypeScript 中泛型的理解？应用场景？', link: '/Interview/TypeScript/7' },
                        { text: '8. 说说你对 TypeScript 中高级类型的理解？有哪些？', link: '/Interview/TypeScript/8' },
                        { text: '9. 说说你对 TypeScript 装饰器的理解？应用场景？', link: '/Interview/TypeScript/9' },
                        { text: '10. 说说对 TypeScript 中命名空间与模块的理解？区别？', link: '/Interview/TypeScript/10' },
                        { text: '11. 说说如何在 React 项目中应用 TypeScript？', link: '/Interview/TypeScript/11' },
                        { text: '12. 说说如何在Vue项目中应用TypeScript？', link: '/Interview/TypeScript/12' },
                    ]
                },
                {
                    text: '13. 算法与数据结构',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对算法的理解？应用场景？', link: '/Interview/DataStructure/1' },
                        { text: '2. 说说你对算法中时间复杂度，空间复杂度的理解？如何计算？', link: '/Interview/DataStructure/2' },
                        { text: '3. 说说你对数据结构的理解？有哪些？区别？', link: '/Interview/DataStructure/3' },
                        { text: '4. 说说你对栈、队列的理解？应用场景？', link: '/Interview/DataStructure/4' },
                        { text: '5. 说说你对链表的理解？常见的操作有哪些？', link: '/Interview/DataStructure/5' },
                        { text: '6. 说说你对集合的理解？常见的操作有哪些？', link: '/Interview/DataStructure/6' },
                        { text: '7. 说说你对树的理解？相关的操作有哪些？', link: '/Interview/DataStructure/7' },
                        { text: '8. 说说你对堆的理解？如何实现？应用场景？', link: '/Interview/DataStructure/8' },
                        { text: '9. 说说你对图的理解？相关操作有哪些？', link: '/Interview/DataStructure/9' },
                        { text: '10. 说说常见的排序算法有哪些？区别？', link: '/Interview/DataStructure/10' },
                        { text: '11. 说说你对冒泡排序的理解？如何实现？应用场景？', link: '/Interview/DataStructure/11' },
                        { text: '12 说说你对选择排序的理解？如何实现？应用场景？', link: '/Interview/DataStructure/12' },
                        { text: '13. 说说你对插入排序的理解？如何实现？应用场景？', link: '/Interview/DataStructure/13' },
                        { text: '14. 说说你对归并排序的理解？如何实现？应用场景？', link: '/Interview/DataStructure/14' },
                        { text: '15. 说说你对快速排序的理解？如何实现？应用场景？', link: '/Interview/DataStructure/15' },
                        { text: '16. 说说你对二分查找的理解？如何实现？应用场景？', link: '/Interview/DataStructure/16' },
                        { text: '17. 说说你对分而治之、动态规划的理解？区别？', link: '/Interview/DataStructure/17' },
                        { text: '18. 说说你对贪心算法、回溯算法的理解？应用场景？', link: '/Interview/DataStructure/18' },
                    ]
                },
                {
                    text: '14. 小程序系列',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说你对微信小程序的理解？优缺点？', link: '/Interview/Applets/1' },
                        { text: '2. 说说微信小程序的生命周期函数有哪些？', link: '/Interview/Applets/2' },
                        { text: '3. 说说微信小程序中路由跳转的方式有哪些？区别？', link: '/Interview/Applets/3' },
                        { text: '4. 说说提高微信小程序的应用速度的手段有哪些？', link: '/Interview/Applets/4' },
                        { text: '5. 说说微信小程序的登录流程？', link: '/Interview/Applets/5' },
                        { text: '6. 说说微信小程序的发布流程？', link: '/Interview/Applets/6' },
                        { text: '7. 说说微信小程序的支付流程？', link: '/Interview/Applets/7' },
                        { text: '8. 说说微信小程序的实现原理？', link: '/Interview/Applets/8' },
                    ]
                },
                {
                    text: '15. 设计模式',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. 说说对设计模式的理解？常见的设计模式有哪些？', link: '/Interview/DesignPatterns/9' },
                        { text: '2. 说说你对单例模式的理解？如何实现？', link: '/Interview/DesignPatterns/2' },
                        { text: '3. 说说你对工厂模式的理解？应用场景？', link: '/Interview/DesignPatterns/3' },
                        { text: '4. 说说你对策略模式的理解？应用场景？', link: '/Interview/DesignPatterns/4' },
                        { text: '5. 说说你对代理模式的理解？应用场景？', link: '/Interview/DesignPatterns/5' },
                        { text: '6. 说说你对发布订阅、观察者模式的理解？区别？', link: '/Interview/DesignPatterns/6' },
                    ]
                },
            ],
            // "/Improve/": [
            //     {
            //         text: 'section 1',
            //         collapsible: true,
            //         collapsed: true,
            //         items: [
            //             { text: 'a', link: '/Improve/a.md' }
            //         ]
            //     },
            // ],
            // "/Tools/": [
            //     {
            //         text: 'section 1',
            //         collapsible: true,
            //         collapsed: true,
            //         items: [
            //             { text: 'a', link: '/Tools/a.md' }
            //         ]
            //     },
            // ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/RoyHong0' },
            { icon: 'twitter', link: '...' },
            // You can also add custom icons by passing SVG as string:
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
                },
                link: '...'
            }
        ]
    }
})
