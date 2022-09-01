import{_ as s,c as a,o as n,a as e}from"./app.ade653e8.js";const A=JSON.parse('{"title":"\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 TypeScript \u7684\u7406\u89E3\uFF1F\u4E0E JavaScript \u7684\u533A\u522B\uFF1F","description":"","frontmatter":{},"headers":[{"level":2,"title":"#\u4E00\u3001\u662F\u4EC0\u4E48","slug":"\u4E00\u3001\u662F\u4EC0\u4E48","link":"#\u4E00\u3001\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"#\u4E8C\u3001\u7279\u6027","slug":"\u4E8C\u3001\u7279\u6027","link":"#\u4E8C\u3001\u7279\u6027","children":[{"level":3,"title":"#\u7C7B\u578B\u6279\u6CE8","slug":"\u7C7B\u578B\u6279\u6CE8","link":"#\u7C7B\u578B\u6279\u6CE8","children":[]},{"level":3,"title":"#\u7C7B\u578B\u63A8\u65AD","slug":"\u7C7B\u578B\u63A8\u65AD","link":"#\u7C7B\u578B\u63A8\u65AD","children":[]},{"level":3,"title":"#\u63A5\u53E3","slug":"\u63A5\u53E3","link":"#\u63A5\u53E3","children":[]}]},{"level":2,"title":"#\u4E09\u3001\u533A\u522B","slug":"\u4E09\u3001\u533A\u522B","link":"#\u4E09\u3001\u533A\u522B","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"Interview/TypeScript/1.md"}'),l={name:"Interview/TypeScript/1.md"},p=e(`<h1 id="\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u7684\u7406\u89E3\uFF1F\u4E0E-javascript-\u7684\u533A\u522B\uFF1F" tabindex="-1">\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9 TypeScript \u7684\u7406\u89E3\uFF1F\u4E0E JavaScript \u7684\u533A\u522B\uFF1F <a class="header-anchor" href="#\u9762\u8BD5\u5B98\uFF1A\u8BF4\u8BF4\u4F60\u5BF9-typescript-\u7684\u7406\u89E3\uFF1F\u4E0E-javascript-\u7684\u533A\u522B\uFF1F" aria-hidden="true">#</a></h1><p><img src="https://static.vue-js.com/58cd3580-0950-11ec-8e64-91fdec0f05a1.png" alt="img"></p><h2 id="\u4E00\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88" target="_blank" rel="noreferrer">#</a>\u4E00\u3001\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u4E00\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>TypeScript</code> \u662F <code>JavaScript</code> \u7684\u7C7B\u578B\u7684\u8D85\u96C6\uFF0C\u652F\u6301<code>ES6</code>\u8BED\u6CD5\uFF0C\u652F\u6301\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u6982\u5FF5\uFF0C\u5982\u7C7B\u3001\u63A5\u53E3\u3001\u7EE7\u627F\u3001\u6CDB\u578B\u7B49</p><blockquote><p>\u8D85\u96C6\uFF0C\u4E0D\u5F97\u4E0D\u8BF4\u53E6\u5916\u4E00\u4E2A\u6982\u5FF5\uFF0C\u5B50\u96C6\uFF0C\u600E\u4E48\u7406\u89E3\u8FD9\u4E24\u4E2A\u5462\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u4E00\u4E2A\u96C6\u5408 A \u91CC\u9762\u7684\u7684\u6240\u6709\u5143\u7D20\u96C6\u5408 B \u91CC\u9762\u90FD\u5B58\u5728\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u96C6\u5408 B \u662F\u96C6\u5408 A \u7684\u8D85\u96C6\uFF0C\u96C6\u5408 A \u4E3A\u96C6\u5408 B \u7684\u5B50\u96C6</p></blockquote><p><img src="https://static.vue-js.com/61c2c1f0-0950-11ec-a752-75723a64e8f5.png" alt="img"></p><p>\u5176\u662F\u4E00\u79CD\u9759\u6001\u7C7B\u578B\u68C0\u67E5\u7684\u8BED\u8A00\uFF0C\u63D0\u4F9B\u4E86\u7C7B\u578B\u6CE8\u89E3\uFF0C\u5728\u4EE3\u7801\u7F16\u8BD1\u9636\u6BB5\u5C31\u53EF\u4EE5\u68C0\u67E5\u51FA\u6570\u636E\u7C7B\u578B\u7684\u9519\u8BEF</p><p>\u540C\u65F6\u6269\u5C55\u4E86<code>JavaScript</code> \u7684\u8BED\u6CD5\uFF0C\u6240\u4EE5\u4EFB\u4F55\u73B0\u6709\u7684<code>JavaScript</code> \u7A0B\u5E8F\u53EF\u4EE5\u4E0D\u52A0\u6539\u53D8\u7684\u5728 <code>TypeScript</code> \u4E0B\u5DE5\u4F5C</p><p>\u4E3A\u4E86\u4FDD\u8BC1\u517C\u5BB9\u6027\uFF0C<code>TypeScript</code> \u5728\u7F16\u8BD1\u9636\u6BB5\u9700\u8981\u7F16\u8BD1\u5668\u7F16\u8BD1\u6210\u7EAF <code>JavaScript</code> \u6765\u8FD0\u884C\uFF0C\u662F\u4E3A\u5927\u578B\u5E94\u7528\u4E4B\u5F00\u53D1\u800C\u8BBE\u8BA1\u7684\u8BED\u8A00\uFF0C\u5982\u4E0B\uFF1A</p><p><code>ts</code> \u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hello</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(hello)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8BD1\u6587\u4EF6\u540E\uFF1A</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hello </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(hello)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u7279\u6027" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E4%BA%8C%E3%80%81%E7%89%B9%E6%80%A7" target="_blank" rel="noreferrer">#</a>\u4E8C\u3001\u7279\u6027 <a class="header-anchor" href="#\u4E8C\u3001\u7279\u6027" aria-hidden="true">#</a></h2><p><code>TypeScript</code> \u7684\u7279\u6027\u4E3B\u8981\u6709\u5982\u4E0B\uFF1A</p><ul><li><strong>\u7C7B\u578B\u6279\u6CE8\u548C\u7F16\u8BD1\u65F6\u7C7B\u578B\u68C0\u67E5</strong> \uFF1A\u5728\u7F16\u8BD1\u65F6\u6279\u6CE8\u53D8\u91CF\u7C7B\u578B</li><li><strong>\u7C7B\u578B\u63A8\u65AD</strong>\uFF1Ats \u4E2D\u6CA1\u6709\u6279\u6CE8\u53D8\u91CF\u7C7B\u578B\u4F1A\u81EA\u52A8\u63A8\u65AD\u53D8\u91CF\u7684\u7C7B\u578B</li><li><strong>\u7C7B\u578B\u64E6\u9664</strong>\uFF1A\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u6279\u6CE8\u7684\u5185\u5BB9\u548C\u63A5\u53E3\u4F1A\u5728\u8FD0\u884C\u65F6\u5229\u7528\u5DE5\u5177\u64E6\u9664</li><li><strong>\u63A5\u53E3</strong>\uFF1Ats \u4E2D\u7528\u63A5\u53E3\u6765\u5B9A\u4E49\u5BF9\u8C61\u7C7B\u578B</li><li><strong>\u679A\u4E3E</strong>\uFF1A\u7528\u4E8E\u53D6\u503C\u88AB\u9650\u5B9A\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u7684\u573A\u666F</li><li><strong>Mixin</strong>\uFF1A\u53EF\u4EE5\u63A5\u53D7\u4EFB\u610F\u7C7B\u578B\u7684\u503C</li><li><strong>\u6CDB\u578B\u7F16\u7A0B</strong>\uFF1A\u5199\u4EE3\u7801\u65F6\u4F7F\u7528\u4E00\u4E9B\u4EE5\u540E\u624D\u6307\u5B9A\u7684\u7C7B\u578B</li><li><strong>\u540D\u5B57\u7A7A\u95F4</strong>\uFF1A\u540D\u5B57\u53EA\u5728\u8BE5\u533A\u57DF\u5185\u6709\u6548\uFF0C\u5176\u4ED6\u533A\u57DF\u53EF\u91CD\u590D\u4F7F\u7528\u8BE5\u540D\u5B57\u800C\u4E0D\u51B2\u7A81</li><li><strong>\u5143\u7EC4</strong>\uFF1A\u5143\u7EC4\u5408\u5E76\u4E86\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u53EF\u4EE5\u88C5\u4E0D\u540C\u7C7B\u578B\u6570\u636E\u7684\u6570\u7EC4</li><li>...</li></ul><h3 id="\u7C7B\u578B\u6279\u6CE8" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E7%B1%BB%E5%9E%8B%E6%89%B9%E6%B3%A8" target="_blank" rel="noreferrer">#</a>\u7C7B\u578B\u6279\u6CE8 <a class="header-anchor" href="#\u7C7B\u578B\u6279\u6CE8" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u7C7B\u578B\u6279\u6CE8\u63D0\u4F9B\u5728\u7F16\u8BD1\u65F6\u542F\u52A8\u7C7B\u578B\u68C0\u67E5\u7684\u9759\u6001\u7C7B\u578B\uFF0C\u8FD9\u662F\u53EF\u9009\u7684\uFF0C\u800C\u4E14\u53EF\u4EE5\u5FFD\u7565\u800C\u4F7F\u7528 <code>JavaScript</code> \u5E38\u89C4\u7684\u52A8\u6001\u7C7B\u578B</p><div class="language-tsx"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u4E8E\u57FA\u672C\u7C7B\u578B\u7684\u6279\u6CE8\u662F <code>number</code>\u3001<code>bool</code> \u548C <code>string</code>\uFF0C\u800C\u5F31\u6216\u52A8\u6001\u7C7B\u578B\u7684\u7ED3\u6784\u5219\u662F <code>any</code> \u7C7B\u578B</p><h3 id="\u7C7B\u578B\u63A8\u65AD" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E7%B1%BB%E5%9E%8B%E6%8E%A8%E6%96%AD" target="_blank" rel="noreferrer">#</a>\u7C7B\u578B\u63A8\u65AD <a class="header-anchor" href="#\u7C7B\u578B\u63A8\u65AD" aria-hidden="true">#</a></h3><p>\u5F53\u7C7B\u578B\u6CA1\u6709\u7ED9\u51FA\u65F6\uFF0CTypeScript \u7F16\u8BD1\u5668\u5229\u7528\u7C7B\u578B\u63A8\u65AD\u6765\u63A8\u65AD\u7C7B\u578B\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u53D8\u91CF <code>str</code> \u88AB\u63A8\u65AD\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8FD9\u79CD\u63A8\u65AD\u53D1\u751F\u5728\u521D\u59CB\u5316\u53D8\u91CF\u548C\u6210\u5458\uFF0C\u8BBE\u7F6E\u9ED8\u8BA4\u53C2\u6570\u503C\u548C\u51B3\u5B9A\u51FD\u6570\u8FD4\u56DE\u503C\u65F6</p><p>\u5982\u679C\u7F3A\u4E4F\u58F0\u660E\u800C\u4E0D\u80FD\u63A8\u65AD\u51FA\u7C7B\u578B\uFF0C\u90A3\u4E48\u5B83\u7684\u7C7B\u578B\u88AB\u89C6\u4F5C\u9ED8\u8BA4\u7684\u52A8\u6001 <code>any</code> \u7C7B\u578B</p><h3 id="\u63A5\u53E3" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">#</a>\u63A5\u53E3 <a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u63A5\u53E3\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u7528\u6765\u63CF\u8FF0\u5BF9\u8C61\u7684\u7C7B\u578B \u6570\u636E\u7684\u7C7B\u578B\u6709 <code>number</code>\u3001<code>null</code>\u3001<code>string</code> \u7B49\u6570\u636E\u683C\u5F0F\uFF0C\u5BF9\u8C61\u7684\u7C7B\u578B\u5C31\u662F\u7528\u63A5\u53E3\u6765\u63CF\u8FF0\u7684</p><div class="language-tsx"><button class="copy"></button><span class="lang">tsx</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> tom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Tom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E09\u3001\u533A\u522B" tabindex="-1"><a href="https://vue3js.cn/interview/typescript/typescript_javascript.html#%E4%B8%89%E3%80%81%E5%8C%BA%E5%88%AB" target="_blank" rel="noreferrer">#</a>\u4E09\u3001\u533A\u522B <a class="header-anchor" href="#\u4E09\u3001\u533A\u522B" aria-hidden="true">#</a></h2><ul><li>TypeScript \u662F JavaScript \u7684\u8D85\u96C6\uFF0C\u6269\u5C55\u4E86 JavaScript \u7684\u8BED\u6CD5</li><li>TypeScript \u53EF\u5904\u7406\u5DF2\u6709\u7684 JavaScript \u4EE3\u7801\uFF0C\u5E76\u53EA\u5BF9\u5176\u4E2D\u7684 TypeScript \u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1</li><li>TypeScript \u6587\u4EF6\u7684\u540E\u7F00\u540D .ts \uFF08.ts\uFF0C.tsx\uFF0C.dts\uFF09\uFF0CJavaScript \u6587\u4EF6\u662F .js</li><li>\u5728\u7F16\u5199 TypeScript \u7684\u6587\u4EF6\u7684\u65F6\u5019\u5C31\u4F1A\u81EA\u52A8\u7F16\u8BD1\u6210 js \u6587\u4EF6</li></ul><p>\u66F4\u591A\u7684\u533A\u522B\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static.vue-js.com/6b544040-0950-11ec-8e64-91fdec0f05a1.png" alt="img"></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,33),o=[p];function t(r,c,i,y,D,d){return n(),a("div",null,o)}const C=s(l,[["render",t]]);export{A as __pageData,C as default};
