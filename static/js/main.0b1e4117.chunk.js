(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),a=n.n(i),l=n(10),s=n.n(l),j=n(11),r=n(12),o=n(14),b=n(13),u=function(){return Object(c.jsxs)("div",{className:"titleDiv",children:[Object(c.jsx)("h1",{children:"CV Project"}),Object(c.jsx)("a",{href:"https://github.com/sebapkfd/cv-project",target:"_blank",rel:"noreferrer",children:Object(c.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png",alt:"Github"})})]})},d=n(2),O=function(e){var t=e.values;return Object(c.jsx)("div",{className:"formDiv",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(t)},id:"generalInfoForm",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"generalInput",children:"Name"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"name",defaultValue:t.name}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Career"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"lastname",defaultValue:t.lastname}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Phone"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"phone",defaultValue:t.phone}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",name:"email",defaultValue:t.email})]}),Object(c.jsxs)("div",{className:"buttonsDiv",children:[Object(c.jsx)("button",{type:"submit",children:"Submit"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),e.onRender(t)},children:"Cancel"})]})]})})},x=function(){var e,t,n,a=Object(i.useState)({name:"",lastname:"",phone:"",email:""}),l=Object(d.a)(a,2),s=l[0],j=l[1],r=Object(i.useState)(!1),o=Object(d.a)(r,2),b=o[0],u=o[1],x=Object(i.useState)(!1),m=Object(d.a)(x,2),h=m[0],v=m[1],p=function(e){e.preventDefault(),u(!b)},f=s.name,D=s.lastname,N=s.phone,C=s.email;return b?e=Object(c.jsx)(O,{onSubmit:function(e){e.preventDefault();var t={name:e.target.name.value,lastname:e.target.lastname.value,phone:e.target.phone.value,email:e.target.email.value},n=!0;for(var c in t)""===t[c]&&(n=!1);n&&(j(t),v(!0),p(e))},values:s,onRender:p}):t=h?Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:p,className:"sectionButton",children:"Edit Information"})}):Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:p,className:"sectionButton",children:"Add Information"})}),h&&(n=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),j({name:"",lastname:"",phone:"",email:""}),v(!1),u(!1)},children:"Clean"})})),Object(c.jsxs)("div",{className:"GeneralDiv",children:[Object(c.jsxs)("div",{className:"sectionTitleDiv",children:[Object(c.jsx)("h2",{children:"Personal Information"}),t,n]}),e,Object(c.jsxs)("p",{children:["Name: ",f]}),Object(c.jsxs)("p",{children:["Last Name:",D]}),Object(c.jsxs)("p",{children:["Phone:",N]}),Object(c.jsxs)("p",{children:["Email: ",C]})]})},m=n(6),h=n(5),v=n(3),p=n(4),f=n.n(p),D=function(e){var t=e.split(/\D/g);return[t[2],t[1],t[0]].join("-")},N=function(e){var t=e.school,n=t.schoolName,i=t.careerTitle,a=t.initialDate,l=t.endDate,s=t.id,j=D(a),r=D(l);return Object(c.jsxs)("div",{className:"schoolItemDiv",children:[Object(c.jsxs)("p",{children:["School: ",n]}),Object(c.jsxs)("p",{children:["Career: ",i]}),Object(c.jsxs)("p",{children:["From: ",j]}),Object(c.jsxs)("p",{children:["Until: ",r]}),Object(c.jsx)("button",{onClick:function(){return e.onDelete(s)},children:"Delete"})]})},C=function(e){var t=function(t){t.preventDefault(),e.onChange(t)},n=e.school;return Object(c.jsx)("div",{className:"formDiv",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(t)},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"schoolInput",children:"Enter School"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.schoolName,type:"text",name:"schoolName"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Enter Career"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.careerTitle,type:"text",name:"careerTitle"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Enter Initial Date"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.initialDate,type:"date",name:"initialDate"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Enter Final Date"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.endDate,type:"date",name:"endDate"})]}),Object(c.jsxs)("div",{className:"buttonsDiv",children:[Object(c.jsx)("button",{type:"submit",children:"Add School"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),e.onRender(t)},children:"Cancel"})]})]})})},k=function(){var e,t,n,a=Object(i.useState)({id:f()(),schoolName:"",careerTitle:"",initialDate:"",endDate:""}),l=Object(d.a)(a,2),s=l[0],j=l[1],r=Object(i.useState)([]),o=Object(d.a)(r,2),b=o[0],u=o[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),p=x[0],D=x[1],k=function(e){var t=b.filter((function(t){return t.id!==e}));u(t)},g=function(e){e.preventDefault(),D(!p),j({id:f()(),schoolName:"",careerTitle:"",initialDate:"",endDate:""})};return p?e=Object(c.jsx)(C,{school:s,onSubmit:function(e){e.preventDefault();var t=!0;for(var n in s)""===s[n]&&(t=!1);t&&(u([].concat(Object(m.a)(b),[s])),g(e))},onChange:function(e){var t=e.target,n=t.name,c=t.value;j(Object(v.a)(Object(v.a)({},s),{},Object(h.a)({},n,c)))},onRender:g}):t=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:g,className:"sectionButton",children:"Add School"})}),b.length>0&&(n=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),u([])},children:"Clean"})})),Object(c.jsxs)("div",{className:"EducationDiv",children:[Object(c.jsxs)("div",{className:"sectionTitleDiv",children:[Object(c.jsx)("h2",{children:"Education"}),t,n]}),e,Object(c.jsx)("div",{children:b.map((function(e){return Object(c.jsx)(N,{school:e,onDelete:k},e.id)}))})]})},g=function(e){var t=e.company,n=t.companyName,i=t.positionTitle,a=t.mainTasks,l=t.initialDate,s=t.endDate,j=t.id,r=D(l),o=D(s);return Object(c.jsxs)("div",{className:"companyItemDiv",children:[Object(c.jsxs)("p",{children:["Company: ",n]}),Object(c.jsxs)("p",{children:["Position: ",i]}),Object(c.jsxs)("p",{children:["Description: ",a]}),Object(c.jsxs)("p",{children:["From: ",r]}),Object(c.jsxs)("p",{children:["Until: ",o]}),Object(c.jsx)("button",{onClick:function(){return e.onDelete(j)},children:"Delete"})]})},y=function(e){var t=function(t){t.preventDefault(),e.onChange(t)},n=e.company;return Object(c.jsx)("div",{className:"formDiv",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(t)},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"experienceInput",children:"Company Name"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.companyName,type:"text",name:"companyName"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Position title"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.positionTitle,type:"text",name:"positionTitle"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Description"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.mainTasks,type:"text",name:"mainTasks"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Initial Date"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.initialDate,type:"date",name:"initialDate"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Final Date"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:t,value:n.endDate,type:"date",name:"endDate"})]}),Object(c.jsxs)("div",{className:"buttonsDiv",children:[Object(c.jsx)("button",{type:"submit",children:"Add Company"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),e.onRender(t)},children:"Cancel"})]})]})})},S=function(){var e,t,n,a=Object(i.useState)({id:f()(),companyName:"",positionTitle:"",mainTasks:"",initialDate:"",endDate:""}),l=Object(d.a)(a,2),s=l[0],j=l[1],r=Object(i.useState)([]),o=Object(d.a)(r,2),b=o[0],u=o[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),p=x[0],D=x[1],N=function(e){var t=b.filter((function(t){return t.id!==e}));u(t)},C=function(e){e.preventDefault(),D(!p),j({id:f()(),companyName:"",positionTitle:"",mainTasks:"",initialDate:"",endDate:""})};return p?e=Object(c.jsx)(y,{company:s,onSubmit:function(e){e.preventDefault();var t=!0;for(var n in s)""===s[n]&&(t=!1);t&&(u([].concat(Object(m.a)(b),[s])),C(e))},onChange:function(e){var t=e.target,n=t.name,c=t.value;j(Object(v.a)(Object(v.a)({},s),{},Object(h.a)({},n,c)))},onRender:C}):t=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:C,className:"sectionButton",children:"Add Job"})}),b.length>0&&(n=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),u([])},children:"Clean"})})),Object(c.jsxs)("div",{className:"ExperienceDiv",children:[Object(c.jsxs)("div",{className:"sectionTitleDiv",children:[Object(c.jsx)("h2",{children:"Experience"}),t,n]}),e,Object(c.jsx)("div",{children:b.map((function(e){return Object(c.jsx)(g,{company:e,onDelete:N},e.id)}))})]})},T=function(e){var t=e.skill,n=t.skillName,i=t.id;return Object(c.jsxs)("div",{className:"skillItemDiv",children:[Object(c.jsx)("p",{children:n}),Object(c.jsx)("button",{onClick:function(){return e.onDelete(i)},children:"Delete"})]})},I=function(e){var t=e.skill;return Object(c.jsx)("div",{className:"formDiv",children:Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSubmit(t)},children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"skillInput",children:"Enter Skill"}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{onChange:function(t){t.preventDefault(),e.onChange(t)},value:t.skillName,type:"text",name:"skillName"})]}),Object(c.jsxs)("div",{className:"buttonsDiv",children:[Object(c.jsx)("button",{type:"submit",children:"Add Skill"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),e.onRender(t)},children:"Cancel"})]})]})})},E=function(){var e,t,n,a=Object(i.useState)({id:f()(),skillName:""}),l=Object(d.a)(a,2),s=l[0],j=l[1],r=Object(i.useState)([]),o=Object(d.a)(r,2),b=o[0],u=o[1],O=Object(i.useState)(!1),x=Object(d.a)(O,2),p=x[0],D=x[1],N=function(e){var t=b.filter((function(t){return t.id!==e}));u(t)},C=function(e){e.preventDefault(),D(!p),j({id:f()(),skillName:""})};return p?e=Object(c.jsx)(I,{skill:s,onSubmit:function(e){e.preventDefault();var t=!0;for(var n in s)""===s[n]&&(t=!1);t&&(u([].concat(Object(m.a)(b),[s])),C(e))},onChange:function(e){var t=e.target,n=t.name,c=t.value;j(Object(v.a)(Object(v.a)({},s),{},Object(h.a)({},n,c)))},onRender:C}):t=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:C,className:"sectionButton",children:"Add Skill"})}),b.length>0&&(n=Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),u([])},children:"Clean"})})),Object(c.jsxs)("div",{className:"SkillsDiv",children:[Object(c.jsxs)("div",{className:"sectionTitleDiv",children:[Object(c.jsx)("h2",{children:"Skills"}),t,n]}),e,Object(c.jsx)("div",{children:b.map((function(e){return Object(c.jsx)(T,{skill:e,onDelete:N},e.id)}))})]})},F=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{}),Object(c.jsx)(x,{}),Object(c.jsx)(k,{}),Object(c.jsx)(S,{}),Object(c.jsx)(E,{})]})}}]),n}(i.Component);s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0b1e4117.chunk.js.map