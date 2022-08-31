import { defineConfig } from 'vite'


export default defineConfig({
    // base: './',
    themeConfig: {
        siteTitle: 'Roy-Blog',
        // siteTitle: false
        logo: '/.vitepress/public/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/', activeMatch: '/index.md || /' },
            { text: '每日一题', link: '/DailyQuestion/a.md', activeMatch: '/DailyQuestion/' },
            { text: '面试题', link: '/Interview/a.md', activeMatch: '/Interview/' },
            { text: '进阶', link: '/Improve/a.md', activeMatch: '/Improve/' },
            { text: '工具', link: '/Tools/index.md', activeMatch: '/Tools/' },
        ],

        sidebar: {
            "/DailyQuestion/": [
                {
                    text: 'vue',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'a', link: '/DailyQuestion/a.md' },
                        { text: 'b', link: '/DailyQuestion/b.md' },
                        // { text: 'a', link: '/DailyQuestion/a.md' }
                    ]
                },
                {
                    text: 'section 1',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'a', link: '/DailyQuestion/b.md' }
                    ]
                },
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
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '6.WebPack',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '7.HTTP',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '8. NodeJS',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '9. React',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '10. 版本控制',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '11. 操作系统',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '12. TypeScript',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '13. 算法与数据结构',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '14. 小程序系列',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
                {
                    text: '15. 设计模式',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: '1. Vue3.0的设计目标是什么？ 做了那些优化？', link: '/Interview/vue3/1' },
                    ]
                },
            ],
            "/Improve/": [
                {
                    text: 'section 1',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'a', link: '/Improve/a.md' }
                    ]
                },
            ],
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
