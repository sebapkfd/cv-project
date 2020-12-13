(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(10),r=n.n(s),l=n(3),o=n(4),j=n(6),b=n(5),h=function(){return Object(a.jsxs)("div",{className:"titleDiv",children:[Object(a.jsx)("h1",{children:"CV Project"}),Object(a.jsx)("a",{href:"https://github.com/sebapkfd/cv-project",target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{src:"https://img.icons8.com/fluent-systems-filled/24/ffffff/github.png",alt:"Github"})})]})},u=n(2),d=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).submitData=function(t){t.preventDefault(),e.props.onSubmit(t)},e.cancelSubmit=function(t){t.preventDefault(),e.props.onRender(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.values;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:this.submitData,id:"generalInfoForm",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"generalInput",children:"Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"name",defaultValue:e.name}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Career"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"lastname",defaultValue:e.lastname}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Phone"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"phone",defaultValue:e.phone}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Email"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"email",defaultValue:e.email})]}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{type:"submit",children:"Submit"}),Object(a.jsx)("button",{onClick:this.cancelSubmit,children:"Cancel"})]})]})})}}]),n}(c.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleSubmit=function(t){t.preventDefault();var n={name:t.target.name.value,lastname:t.target.lastname.value,phone:t.target.phone.value,email:t.target.email.value},a=!0;for(var c in n)""===n[c]&&(a=!1);a&&(e.setState({info:n}),e.setState({infoAdded:!0}),e.renderForm(t))},e.cleanInfo=function(t){t.preventDefault();e.setState({info:{name:"",lastname:"",phone:"",email:""}}),e.setState({infoAdded:!1}),e.setState({formActive:!1})},e.renderForm=function(t){t.preventDefault();var n=e.state.formActive;e.setState({formActive:!n})},e.state={info:{name:"",lastname:"",phone:"",email:""},formActive:!1,infoAdded:!1},e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e.cleanInfo=e.cleanInfo.bind(Object(u.a)(e)),e.renderForm=e.renderForm.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n,c=this.state.info,i=c.name,s=c.lastname,r=c.phone,l=c.email,o=this.state,j=o.formActive,b=o.infoAdded;return j?e=Object(a.jsx)(d,{onSubmit:this.handleSubmit,values:this.state.info,onRender:this.renderForm}):t=b?Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.renderForm,className:"sectionButton",children:"Edit Information"})}):Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.renderForm,className:"sectionButton",children:"Add Information"})}),b&&(n=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.cleanInfo,children:"Clean"})})),Object(a.jsxs)("div",{className:"GeneralDiv",children:[Object(a.jsxs)("div",{className:"sectionTitleDiv",children:[Object(a.jsx)("h2",{children:"Personal Information"}),t,n]}),e,Object(a.jsxs)("p",{children:["Name: ",i]}),Object(a.jsxs)("p",{children:["Last Name:",s]}),Object(a.jsxs)("p",{children:["Phone:",r]}),Object(a.jsxs)("p",{children:["Email: ",l]})]})}}]),n}(c.Component),O=n(8),p=n(7),v=n.n(p),f=function(e){var t=e.split(/\D/g);return[t[2],t[1],t[0]].join("-")},x=function(e){var t=e.school,n=t.schoolName,c=t.careerTitle,i=t.initialDate,s=t.endDate,r=t.id,l=f(i),o=f(s);return Object(a.jsxs)("div",{className:"schoolItemDiv",children:[Object(a.jsxs)("p",{children:["School: ",n]}),Object(a.jsxs)("p",{children:["Career: ",c]}),Object(a.jsxs)("p",{children:["From: ",l]}),Object(a.jsxs)("p",{children:["Until: ",o]}),Object(a.jsx)("button",{onClick:function(){return e.onDelete(r)},children:"Delete"})]})},D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).changeData=function(t){t.preventDefault(),e.props.onChange(t)},e.submitData=function(t){t.preventDefault(),e.props.onSubmit(t)},e.cancelSubmit=function(t){t.preventDefault(),e.props.onRender(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.school;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:this.submitData,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"schoolInput",children:"Enter School"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.schoolName,type:"text",name:"schoolName"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Enter Career"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.careerTitle,type:"text",name:"careerTitle"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Enter Initial Date"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.initialDate,type:"date",name:"initialDate"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Enter Final Date"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.endDate,type:"date",name:"endDate"})]}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{type:"submit",children:"Add School"}),Object(a.jsx)("button",{onClick:this.cancelSubmit,children:"Cancel"})]})]})})}}]),n}(c.Component),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(e){var t=Object.assign({},e.school);return t[a]=c,{school:t}}))},e.submitSchool=function(t){t.preventDefault();var n=e.state.school,a=!0;for(var c in n)""===n[c]&&(a=!1);a&&(e.setState({schools:[].concat(Object(O.a)(e.state.schools),[e.state.school])}),e.renderForm(t))},e.resetForm=function(){e.setState((function(e){var t=Object.assign({},e.school);return t.id=v()(),t.schoolName="",t.careerTitle="",t.initialDate="",t.endDate="",{school:t}}))},e.handleDelete=function(t){var n=e.state.schools.filter((function(e){return e.id!==t}));e.setState({schools:n})},e.cleanEducation=function(t){t.preventDefault(),e.setState({schools:[]})},e.renderForm=function(t){t.preventDefault();var n=e.state.formActive;e.setState({formActive:!n}),e.resetForm()},e.state={school:{id:v()(),schoolName:"",careerTitle:"",initialDate:"",endDate:""},schools:[],formActive:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.submitSchool=e.submitSchool.bind(Object(u.a)(e)),e.handleDelete=e.handleDelete.bind(Object(u.a)(e)),e.cleanEducation=e.cleanEducation.bind(Object(u.a)(e)),e.renderForm=e.renderForm.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n,c=this,i=this.state,s=i.school,r=i.schools;return i.formActive?e=Object(a.jsx)(D,{school:s,onSubmit:this.submitSchool,onChange:this.handleChange,onRender:this.renderForm}):t=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.renderForm,className:"sectionButton",children:"Add School"})}),r.length>0&&(n=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.cleanEducation,children:"Clean"})})),Object(a.jsxs)("div",{className:"EducationDiv",children:[Object(a.jsxs)("div",{className:"sectionTitleDiv",children:[Object(a.jsx)("h2",{children:"Education"}),t,n]}),e,Object(a.jsx)("div",{children:r.map((function(e){return Object(a.jsx)(x,{school:e,onDelete:c.handleDelete},e.id)}))})]})}}]),n}(c.Component),k=function(e){var t=e.company,n=t.companyName,c=t.positionTitle,i=t.mainTasks,s=t.initialDate,r=t.endDate,l=t.id,o=f(s),j=f(r);return Object(a.jsxs)("div",{className:"companyItemDiv",children:[Object(a.jsxs)("p",{children:["Company: ",n]}),Object(a.jsxs)("p",{children:["Position: ",c]}),Object(a.jsxs)("p",{children:["Description: ",i]}),Object(a.jsxs)("p",{children:["From: ",o]}),Object(a.jsxs)("p",{children:["Until: ",j]}),Object(a.jsx)("button",{onClick:function(){return e.onDelete(l)},children:"Delete"})]})},C=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).changeData=function(t){t.preventDefault(),e.props.onChange(t)},e.submitData=function(t){t.preventDefault(),e.props.onSubmit(t)},e.cancelSubmit=function(t){t.preventDefault(),e.props.onRender(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.company;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:this.submitData,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"experienceInput",children:"Company Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.companyName,type:"text",name:"companyName"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Position title"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.positionTitle,type:"text",name:"positionTitle"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Description"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.mainTasks,type:"text",name:"mainTasks"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Initial Date"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.initialDate,type:"date",name:"initialDate"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{children:"Final Date"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.endDate,type:"date",name:"endDate"})]}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{type:"submit",children:"Add Company"}),Object(a.jsx)("button",{onClick:this.cancelSubmit,children:"Cancel"})]})]})})}}]),n}(c.Component),S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(e){var t=Object.assign({},e.company);return t[a]=c,{company:t}}))},e.submitCompany=function(t){t.preventDefault();var n=e.state.company,a=!0;for(var c in n)""===n[c]&&(a=!1);a&&(e.setState({companies:[].concat(Object(O.a)(e.state.companies),[e.state.company])}),e.renderForm(t))},e.resetForm=function(){e.setState((function(e){var t=Object.assign({},e.company);return t.id=v()(),t.companyName="",t.positionTitle="",t.mainTasks="",t.initialDate="",t.endDate="",{company:t}}))},e.handleDelete=function(t){var n=e.state.companies.filter((function(e){return e.id!==t}));e.setState({companies:n})},e.cleanExperience=function(t){t.preventDefault(),e.setState({companies:[]})},e.renderForm=function(t){t.preventDefault();var n=e.state.formActive;e.setState({formActive:!n}),e.resetForm()},e.state={company:{id:v()(),companyName:"",positionTitle:"",mainTasks:"",initialDate:"",endDate:""},companies:[],formActive:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.submitCompany=e.submitCompany.bind(Object(u.a)(e)),e.handleDelete=e.handleDelete.bind(Object(u.a)(e)),e.cleanExperience=e.cleanExperience.bind(Object(u.a)(e)),e.renderForm=e.renderForm.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n,c=this,i=this.state,s=i.company,r=i.companies;return i.formActive?e=Object(a.jsx)(C,{company:s,onSubmit:this.submitCompany,onChange:this.handleChange,onRender:this.renderForm}):t=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.renderForm,className:"sectionButton",children:"Add Job"})}),r.length>0&&(n=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.cleanExperience,children:"Clean"})})),Object(a.jsxs)("div",{className:"ExperienceDiv",children:[Object(a.jsxs)("div",{className:"sectionTitleDiv",children:[Object(a.jsx)("h2",{children:"Experience"}),t,n]}),e,Object(a.jsx)("div",{children:r.map((function(e){return Object(a.jsx)(k,{company:e,onDelete:c.handleDelete},e.id)}))})]})}}]),n}(c.Component),y=function(e){var t=e.skill,n=t.skillName,c=t.id;return Object(a.jsxs)("div",{className:"skillItemDiv",children:[Object(a.jsx)("p",{children:n}),Object(a.jsx)("button",{onClick:function(){return e.onDelete(c)},children:"Delete"})]})},N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).changeData=function(t){t.preventDefault(),e.props.onChange(t)},e.submitData=function(t){t.preventDefault(),e.props.onSubmit(t)},e.cancelSubmit=function(t){t.preventDefault(),e.props.onRender(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.skill;return Object(a.jsx)("div",{className:"formDiv",children:Object(a.jsxs)("form",{onSubmit:this.submitData,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"skillInput",children:"Enter Skill"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{onChange:this.changeData,value:e.skillName,type:"text",name:"skillName"})]}),Object(a.jsxs)("div",{className:"buttonsDiv",children:[Object(a.jsx)("button",{type:"submit",children:"Add Skill"}),Object(a.jsx)("button",{onClick:this.cancelSubmit,children:"Cancel"})]})]})})}}]),n}(c.Component),F=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState((function(e){var t=Object.assign({},e.skill);return t[a]=c,{skill:t}}))},e.submitSkill=function(t){t.preventDefault();var n=e.state.skill,a=!0;for(var c in n)""===n[c]&&(a=!1);a&&(e.setState({skills:[].concat(Object(O.a)(e.state.skills),[e.state.skill])}),e.renderForm(t))},e.resetForm=function(){e.setState((function(e){var t=Object.assign({},e.skill);return t.id=v()(),t.skillName="",{skill:t}}))},e.handleDelete=function(t){var n=e.state.skills.filter((function(e){return e.id!==t}));e.setState({skills:n})},e.cleanSkills=function(t){t.preventDefault(),e.setState({skills:[]})},e.renderForm=function(t){t.preventDefault();var n=e.state.formActive;e.setState({formActive:!n}),e.resetForm()},e.state={skill:{id:v()(),skillName:""},skills:[],formActive:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.submitSkill=e.submitSkill.bind(Object(u.a)(e)),e.handleDelete=e.handleDelete.bind(Object(u.a)(e)),e.cleanSkills=e.cleanSkills.bind(Object(u.a)(e)),e.renderForm=e.renderForm.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"render",value:function(){var e,t,n,c=this,i=this.state,s=i.skill,r=i.skills;return i.formActive?e=Object(a.jsx)(N,{skill:s,onSubmit:this.submitSkill,onChange:this.handleChange,onRender:this.renderForm}):t=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.renderForm,className:"sectionButton",children:"Add Skill"})}),r.length>0&&(n=Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:this.cleanSkills,children:"Clean"})})),Object(a.jsxs)("div",{className:"SkillsDiv",children:[Object(a.jsxs)("div",{className:"sectionTitleDiv",children:[Object(a.jsx)("h2",{children:"Skills"}),t,n]}),e,Object(a.jsx)("div",{children:r.map((function(e){return Object(a.jsx)(y,{skill:e,onDelete:c.handleDelete},e.id)}))})]})}}]),n}(c.Component),A=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsx)(m,{}),Object(a.jsx)(g,{}),Object(a.jsx)(S,{}),Object(a.jsx)(F,{})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.dd536f25.chunk.js.map