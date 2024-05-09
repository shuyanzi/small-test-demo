const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
var CryptoJS = require("crypto-js");

// 包含源码的产物
const code1 = `
import { G } from './index-!~{001}~.js';

(function(_0x40a7e8,_0x28ee4a){const _0x2e1152=_0x2984,_0x437bc3=_0x40a7e8();while(!![]){try{const _0x3db7ad=parseInt(_0x2e1152(0x18c))/0x1+-parseInt(_0x2e1152(0x1a8))/0x2+-parseInt(_0x2e1152(0x19e))/0x3*(-parseInt(_0x2e1152(0x19c))/0x4)+parseInt(_0x2e1152(0x1a4))/0x5+-parseInt(_0x2e1152(0x180))/0x6*(parseInt(_0x2e1152(0x191))/0x7)+-parseInt(_0x2e1152(0x1a7))/0x8+-parseInt(_0x2e1152(0x1ac))/0x9*(parseInt(_0x2e1152(0x187))/0xa);if(_0x3db7ad===_0x28ee4a)break;else _0x437bc3['push'](_0x437bc3['shift']());}catch(_0x209677){_0x437bc3['push'](_0x437bc3['shift']());}}}(_0x21f6,0xb8f0b));const _0x66ba57=(function(){let _0x19da0e=!![];return function(_0x270834,_0x9fbfa6){const _0x27a9ba=_0x19da0e?function(){const _0x1ec578=_0x2984;if(_0x9fbfa6){const _0x486abc=_0x9fbfa6[_0x1ec578(0x199)](_0x270834,arguments);return _0x9fbfa6=null,_0x486abc;}}:function(){};return _0x19da0e=![],_0x27a9ba;};}()),_0x32dcd5=_0x66ba57(globalThis,function(){const _0x49b94b=_0x2984;return _0x32dcd5[_0x49b94b(0x1a6)]()['search'](_0x49b94b(0x193)+'+$')[_0x49b94b(0x1a6)]()['constructo'+'r'](_0x32dcd5)[_0x49b94b(0x1a9)](_0x49b94b(0x193)+'+$');});_0x32dcd5();const _0x214ca3=(function(){let _0x243341=!![];return function(_0xbe8580,_0x5d902f){const _0x503c40=_0x243341?function(){const _0x184cc9=_0x2984;if(_0x5d902f){const _0x3b561f=_0x5d902f[_0x184cc9(0x199)](_0xbe8580,arguments);return _0x5d902f=null,_0x3b561f;}}:function(){};return _0x243341=![],_0x503c40;};}());function _0x21f6(){const _0x50661c=['debu','__proto__','16947HPxwEt','6VVShgz','table','exception','\x5c+\x5c+\x20*(?:[','warn','{}.constru','gger','1090EpakSA','0-9a-zA-Z_','console','livenessIn','counter','388939bVJmNP','rn\x20this\x22)(','return\x20(fu','outPage','function\x20*','1196258vJQpBQ','mobileTime','(((.+)+)+)','nction()\x20','bind','storage','a-zA-Z_$][','mobileMult','apply','it\x20hahaha','e)\x20{}','3847396opgGFZ','cessPage','3ZNNKdo','uiConfig','log','length','test','constructo','3380820eTeQex','input','toString','2914936TqWdMD','1057858cQycbh','search'];_0x21f6=function(){return _0x50661c;};return _0x21f6();}(function(){_0x214ca3(this,function(){const _0x3c3bb2=_0x2984,_0xbe8ab=new RegExp(_0x3c3bb2(0x190)+'\x5c(\x20*\x5c)'),_0x57db51=new RegExp(_0x3c3bb2(0x183)+_0x3c3bb2(0x197)+_0x3c3bb2(0x188)+'$]*)','i'),_0xc9ec26=_0x1d8d44('init');!_0xbe8ab[_0x3c3bb2(0x1a2)](_0xc9ec26+'chain')||!_0x57db51[_0x3c3bb2(0x1a2)](_0xc9ec26+_0x3c3bb2(0x1a5))?_0xc9ec26('0'):_0x1d8d44();})();}());const _0x436bed=(function(){let _0x3fb6fe=!![];return function(_0x5ee496,_0x3824d4){const _0x20f6a8=_0x3fb6fe?function(){if(_0x3824d4){const _0x31f371=_0x3824d4['apply'](_0x5ee496,arguments);return _0x3824d4=null,_0x31f371;}}:function(){};return _0x3fb6fe=![],_0x20f6a8;};}()),_0x1c8e25=_0x436bed(globalThis,function(){const _0x5c3e02=_0x2984,_0x33e9d6=function(){const _0x76583a=_0x2984;let _0x4ca1ac;try{_0x4ca1ac=Function(_0x76583a(0x18e)+_0x76583a(0x194)+(_0x76583a(0x185)+'ctor(\x22retu'+_0x76583a(0x18d)+'\x20)')+');')();}catch(_0x1ec198){_0x4ca1ac=window;}return _0x4ca1ac;},_0x459bdc=_0x33e9d6(),_0x57128c=_0x459bdc['console']=_0x459bdc[_0x5c3e02(0x189)]||{},_0x408abe=[_0x5c3e02(0x1a0),_0x5c3e02(0x184),'info','error',_0x5c3e02(0x182),_0x5c3e02(0x181),'trace'];for(let _0x4ddf89=0x0;_0x4ddf89<_0x408abe[_0x5c3e02(0x1a1)];_0x4ddf89++){const _0xcdeeb5=_0x436bed['constructo'+'r']['prototype'][_0x5c3e02(0x195)](_0x436bed),_0x214d05=_0x408abe[_0x4ddf89],_0x3126df=_0x57128c[_0x214d05]||_0xcdeeb5;_0xcdeeb5[_0x5c3e02(0x1ab)]=_0x436bed['bind'](_0x436bed),_0xcdeeb5[_0x5c3e02(0x1a6)]=_0x3126df[_0x5c3e02(0x1a6)][_0x5c3e02(0x195)](_0x3126df),_0x57128c[_0x214d05]=_0xcdeeb5;}});_0x1c8e25();function _0x2984(_0x20173a,_0x376606){const _0x33093d=_0x21f6();return _0x2984=function(_0x1c8e25,_0x436bed){_0x1c8e25=_0x1c8e25-0x180;let _0x3ae889=_0x33093d[_0x1c8e25];return _0x3ae889;},_0x2984(_0x20173a,_0x376606);}const getMultiDeviceProcessPageText=()=>{const _0x2a3dbc=_0x2984,_0x36c7b6=G['storage'][_0x2a3dbc(0x19f)],_0x4fe0cb=_0x36c7b6[_0x2a3dbc(0x198)+'iDevicePro'+_0x2a3dbc(0x19d)]||{};return _0x4fe0cb||{};};const getTimeoutPageText=()=>{const _0x4f5c6a=_0x2984,_0x54b511=G[_0x4f5c6a(0x196)]['uiConfig'],_0x40806c=_0x54b511[_0x4f5c6a(0x192)+_0x4f5c6a(0x18f)]||{};return _0x40806c||{};};const livenessInit=()=>{const _0x33e6cf=_0x2984;return console['log'](_0x33e6cf(0x18a)+_0x33e6cf(0x19a)),{};};function _0x1d8d44(_0xbc5011){function _0x45c9ab(_0x44d22e){const _0xaaa7ac=_0x2984;if(typeof _0x44d22e==='string')return function(_0x519e67){}[_0xaaa7ac(0x1a3)+'r']('while\x20(tru'+_0xaaa7ac(0x19b))['apply'](_0xaaa7ac(0x18b));else (''+_0x44d22e/_0x44d22e)[_0xaaa7ac(0x1a1)]!==0x1||_0x44d22e%0x14===0x0?function(){return !![];}['constructo'+'r'](_0xaaa7ac(0x1aa)+_0xaaa7ac(0x186))['call']('action'):function(){return ![];}['constructo'+'r']('debu'+_0xaaa7ac(0x186))[_0xaaa7ac(0x199)]('stateObjec'+'t');_0x45c9ab(++_0x44d22e);}try{if(_0xbc5011)return _0x45c9ab;else _0x45c9ab(0x0);}catch(_0x11774d){}}

export { getMultiDeviceProcessPageText as a, getTimeoutPageText as g, livenessInit as l };
`

// 解析代码为 AST
const ast = parser.parse(code1, {
    sourceType: 'module',
});
let originExportList = [];
traverse(ast, {
    ExportSpecifier(path) {
        const originName = path.node.local.name;
        const exportedName = path.node.exported.name;
        originExportList.push({ originName, exportedName });
    },
});

// 变量名重命名的产物
const code2 = `import{G as d,i as l}from"./index-b0bcfc6b.js";import"./vendor-47e24053.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x=new Error().stack;x&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[x]="ce8f21a9-fae5-4c2b-95a1-c0f80968585e",t._sentryDebugIdIdentifier="sentry-dbid-ce8f21a9-fae5-4c2b-95a1-c0f80968585e")}catch(n){}})();(function(t,x){const n=o,e=t();for(;[];)try{if(parseInt(n(451))/1+-parseInt(n(425))/2+-parseInt(n(449))/3*(-parseInt(n(409))/4)+parseInt(n(441))/5+-parseInt(n(450))/6*(-parseInt(n(439))/7)+parseInt(n(442))/8+-parseInt(n(437))/9===x)break;e.push(e.shift())}catch(r){e.push(e.shift())}})(u,450055);const g=function(){let t=!![];return function(x,n){const e=t?function(){const r=o;if(n){const c=n[r(415)](x,arguments);return n=null,c}}:function(){};return t=![],e}}(),a=g(globalThis,function(){const t=o;return a.toString().search(t(428)+"+$")[t(445)]()["constructor"](a)[t(432)](t(428)+"+$")});a();const p=function(){let t=!![];return function(x,n){const e=t?function(){const r=o;if(n){const c=n[r(415)](x,arguments);return n=null,c}}:function(){};return t=![],e}}();(function(){p(this,function(){const t=o,x=new RegExp("function *"+t(453)),n=new RegExp("\\+\\+ *(?:["+t(408)+t(422)+t(438),"i"),e=_(t(429));!x.test(e+t(452))||!n[t(448)](e+t(412))?e("0"):_()})()})();function u(){const t=["debu","toString","gger",'ctor("retu',"test","66NRfQfK","84OYChEu","741816CXYMig","chain","\\( *\\)","warn","cessPage","a-zA-Z_$][","19164UOUDGu","pcMultiDev","exception","input","mobileMult","bind","apply","log","action","nction() ","{}.constru",'rn this")(',"while (tru","0-9a-zA-Z_","uiConfig","outPage","888824TDAMjz","storage","__proto__","(((.+)+)+)","init","age","constructo","search","return (fu","pcTimeoutP","prototype","console","12234906zEWtkR","$]*)","347781MhWzmO","trace","1014160kKfTIV","4066312iPXxKo","Page"];return u=function(){return t},u()}function o(t,x){const n=u();return o=function(e,r){return e=e-407,n[e]},o(t,x)}const i=function(){let t=!![];return function(x,n){const e=t?function(){const r=o;if(n){const c=n[r(415)](x,arguments);return n=null,c}}:function(){};return t=![],e}}(),h=i(globalThis,function(){const t=o,x=function(){const c=o;let s;try{s=Function(c(433)+c(418)+(c(419)+c(447)+c(420)+" )")+");")()}catch(f){s=window}return s},n=x(),e=n[t(436)]=n.console||{},r=[t(416),t(454),"info","error",t(411),"table",t(440)];for(let c=0;c<r.length;c++){const s=i["constructor"][t(435)].bind(i),f=r[c],b=e[f]||s;s[t(427)]=i[t(414)](i),s[t(445)]=b[t(445)][t(414)](b),e[f]=s}});h();const m=()=>{const t=o,x=d[t(426)][t(423)];return l()?x[t(413)+"iDevicePro"+t(407)]||{}||{}:x[t(410)+"iceProcess"+t(443)]||{}||{}},w=()=>{const t=o,x=d[t(426)][t(423)];return l()?x["mobileTime"+t(424)]||{}||{}:x[t(434)+t(430)]||{}||{}};function _(t){function x(n){const e=o;if(typeof n=="string")return(function(r){})[e(431)+"r"](e(421)+"e) {}")[e(415)]("counter");(""+n/n).length!==1||n%20===0?(function(){return!![]})[e(431)+"r"](e(444)+"gger").call(e(417)):(function(){return![]})["constructor"](e(444)+e(446))[e(415)]("stateObject"),x(++n)}try{if(t)return x;x(0)}catch(n){}}export{m as a,w as g};
//# sourceMappingURL=common-370522e5.js.map`
// 解析代码为 AST
const ast2 = parser.parse(code2, {
    sourceType: 'module',
});
let exportList2 = [];
traverse(ast2, {
    ExportSpecifier(path) {
        const localName = path.node.local.name;
        const exportedName = path.node.exported.name;
        exportList2.push({ localName, exportedName });
    },
});
originExportList.forEach((originExport) => {
    exportList2.forEach((exportItem) => {
        if (originExport.exportedName === exportItem.exportedName) {
            originExport['localName'] = exportItem.localName;
        }
    });
});
const localNames = exportList2.map((item) => item.localName);
traverse(ast2, {
    VariableDeclaration(path) {
        path.node.declarations.forEach((declaration) => {
            const nodeName = declaration.id.name
            if (localNames.includes(nodeName)) {
                const varCode = code2.slice(declaration.start, declaration.end).replace(`${nodeName}=`, '');
                originExportList.forEach((originExport) => {
                    if (originExport.localName === nodeName) {
                        const hash = CryptoJS.SHA256(varCode);
                        const uniqueId = hash.toString(CryptoJS.enc.Hex);
                        originExport['key'] = uniqueId;
                    }
                });
            }
        });
    },
    FunctionDeclaration(path) {
        const { node } = path;
        if (localNames.includes(node.id.name)) {
            const functionCode = code2.slice(node.start, node.end);
            const hash = CryptoJS.SHA256(functionCode);
            const uniqueId = hash.toString(CryptoJS.enc.Hex);
            originExportList.forEach((originExport) => {
                if (originExport.localName === nodeName) {
                    originExport['key'] = uniqueId;
                }
            });
        }
    }
});
console.log(originExportList);