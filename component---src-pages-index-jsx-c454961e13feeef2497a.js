(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return h}));var n=a("mwIZ"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=a("eNIv"),s=a("6uTu"),o=a("STHm"),m=function(e){var t=e.about;return i.a.createElement(o.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},i.a.createElement("p",null,t)))},d=a("Wbzz"),u=a("hbLQ"),p=function(e){var t=e.posts;return i.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return i.a.createElement(u.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(d.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},f=function(e){var t=e.experience;return t.length?i.a.createElement(o.a,{title:"Experience"},t.map((function(e){return i.a.createElement(u.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},E=function(e){var t=e.projects;return t.length?i.a.createElement(o.a,{title:"Projects"},t.map((function(e){return i.a.createElement(u.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},g=function(e){var t=e.skills;return i.a.createElement(o.a,{title:"Skills"},t.map((function(e){return i.a.createElement(u.a,{key:e.name,name:e.name,description:e.description})})))},k=function(e){var t=e.projects;return i.a.createElement(o.a,{title:"Project Posts"},t.map((function(e){return i.a.createElement(u.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(d.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/project"},"View more projects →"))},v=a("ivnd"),h=(t.default=function(e){var t=e.data,a=r()(t,"site.siteMetadata.about",!1),n=r()(t,"site.siteMetadata.projects",!1),l=t.blogmd.edges,o=t.projmd.edges,d=r()(t,"site.siteMetadata.experience",!1),u=r()(t,"site.siteMetadata.skills",!1),h=!l||!l.length,x=!o||!o.length;return i.a.createElement(s.a,null,i.a.createElement(v.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:h}),a&&i.a.createElement(m,{about:a}),n&&n.length&&i.a.createElement(E,{projects:n}),!x&&i.a.createElement(k,{projects:o}),!h&&i.a.createElement(p,{posts:l}),d&&d.length&&i.a.createElement(f,{experience:d}),u&&u.length&&i.a.createElement(g,{skills:u}))},"484815273")},STHm:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l="block pt-12 md:flex",i="pb-6 md:w-full md:max-w-150 md:p-0",c="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",s="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return r.a.createElement("div",{className:l},r.a.createElement("div",{className:i},r.a.createElement("h2",{className:c},t)),r.a.createElement("div",{className:s},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),i="mb-6",c="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,r=e.description,o=e.link,m=void 0!==o&&o,d=e.internal;return t=void 0!==d&&d?l.a.createElement(n.Link,{to:m},a):l.a.createElement("a",{href:m},a),l.a.createElement("div",{className:i},l.a.createElement("h3",{className:c+" "+(m?"hover:underline hover:text-black":"")},m?t:a),l.a.createElement("p",{className:s},r))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c454961e13feeef2497a.js.map