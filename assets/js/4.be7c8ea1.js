(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{52:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"upgrade-downgrade-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-downgrade-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Upgrade & downgrade cluster")]),a("p",[e._v("If you want to manage nodes in cluster (add / remove / change the instance type), you need to get "),a("code",[e._v("InstanceGroups")])]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kops get ig --state"),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("s3://kops-state-db2dev\n")])]),a("p",[e._v("You will get two objects of "),a("code",[e._v("InstanceGroups")]),e._v(":")]),a("ul",[a("li",[a("code",[e._v("master-<region>")])]),a("li",[a("code",[e._v("nodes")])])]),a("p",[e._v("Then you can easily edit that "),a("code",[e._v("InstanceGroups")]),e._v(" to upgrade or downgrade your cluster by running:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kops edit ig "),a("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("instance_group_name"),a("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v(" --state"),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("s3://kops-state-"),a("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("project_name_or_whatever_unique"),a("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),a("p",[e._v("Then search for:")]),a("ul",[a("li",[a("code",[e._v("machineType: t2.micro")])]),a("li",[a("code",[e._v("maxSize: 2")])]),a("li",[a("code",[e._v("minSize: 2")])])]),a("p",[e._v("Feel free to change that values and run update cluster command:")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("kops update cluster --yes --state"),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v("s3://kops-state-"),a("span",{attrs:{class:"token operator"}},[e._v("<")]),e._v("project_name_or_whatever_unique"),a("span",{attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])}],!1,null,null,null);t.default=r.exports}}]);