(()=>{"use strict";var e={592:function(e,t,n){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(87));function o(e,t,n){const r=new u(e,t,n);process.stdout.write(r.toString()+i.EOL)}t.issueCommand=o,t.issue=function(e,t=""){o(e,{},t)};class u{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e="::"+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let n=!0;for(const r in this.properties)if(this.properties.hasOwnProperty(r)){const i=this.properties[r];i&&(n?n=!1:e+=",",e+=`${r}=${t=i,s(t).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}`)}}var t;return e+=`::${function(e){return s(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}(this.message)}`,e}}function s(e){return null==e?"":"string"==typeof e||e instanceof String?e:JSON.stringify(e)}t.toCommandValue=s},516:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{a(r.next(e))}catch(e){o(e)}}function s(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,s)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const o=n(592),u=i(n(87)),s=i(n(622));var a;function c(e){o.issue("error",e instanceof Error?e.toString():e)}function f(e){o.issue("group",e)}function l(){o.issue("endgroup")}!function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"}(a=t.ExitCode||(t.ExitCode={})),t.exportVariable=function(e,t){const n=o.toCommandValue(t);process.env[e]=n,o.issueCommand("set-env",{name:e},n)},t.setSecret=function(e){o.issueCommand("add-mask",{},e)},t.addPath=function(e){o.issueCommand("add-path",{},e),process.env.PATH=`${e}${s.delimiter}${process.env.PATH}`},t.getInput=function(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n)throw new Error(`Input required and not supplied: ${e}`);return n.trim()},t.setOutput=function(e,t){o.issueCommand("set-output",{name:e},t)},t.setCommandEcho=function(e){o.issue("echo",e?"on":"off")},t.setFailed=function(e){process.exitCode=a.Failure,c(e)},t.isDebug=function(){return"1"===process.env.RUNNER_DEBUG},t.debug=function(e){o.issueCommand("debug",{},e)},t.error=c,t.warning=function(e){o.issue("warning",e instanceof Error?e.toString():e)},t.info=function(e){process.stdout.write(e+u.EOL)},t.startGroup=f,t.endGroup=l,t.group=function(e,t){return r(this,void 0,void 0,(function*(){let n;f(e);try{n=yield t()}finally{l()}return n}))},t.saveState=function(e,t){o.issueCommand("save-state",{name:e},t)},t.getState=function(e){return process.env[`STATE_${e}`]||""}},460:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(516));n(251).main().catch((function(e){u.setFailed(e),process.exit(1)}))},251:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.main=void 0;var u=o(n(516));t.main=function(){var e=u.getInput("event");return u.debug(e),Promise.resolve()}},87:e=>{e.exports=require("os")},622:e=>{e.exports=require("path")}},t={};!function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}(460)})();