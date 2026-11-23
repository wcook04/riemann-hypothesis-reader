import{o as e}from"./site-fK-_7prr.js";import{t}from"./jsx-runtime-B0cSQ3jb.js";var n=e(),r=`.reader-shape{display:grid;grid-template-columns:minmax(0,var(--reader-measure));justify-content:center;column-gap:var(--reader-gap);align-items:start;padding-inline:var(--space-6)}
.reader-shape__outline,.reader-shape__side{display:none}
.reader-shape__strip{height:45px;margin-bottom:var(--space-5);margin-left:-22px;border-bottom:1px solid var(--rule)}
.reader-shape__text{display:flex;flex-direction:column;gap:14px}
.reader-shape__text i{display:block;height:13px;background:var(--rule);opacity:.55}
.reader-shape__text i:first-child{width:62%;height:30px;margin-bottom:var(--space-4)}
.reader-shape__words{margin:0;font-family:var(--font-sans);font-size:var(--fs-sm);color:var(--ink-3)}
.reader-shape .account-line{margin:var(--space-4) 0 var(--space-6);font-family:var(--font-sans);font-size:var(--fs-sm);line-height:var(--lh-ui);color:var(--ink-3);text-wrap:pretty}
.reader-shape .reader-hint{margin:0 0 var(--space-5);padding:var(--space-2) var(--space-3);border-left:2px solid var(--rule-control);font-family:var(--font-sans);font-size:var(--fs-ui);line-height:var(--lh-ui);color:var(--ink-2);text-wrap:pretty}
.reader-shape .paper.prose{max-width:var(--reader-measure)}
.reader-shape .part{position:relative;display:flow-root;padding-bottom:var(--space-4)}
.reader-shape .part__text{content-visibility:visible;contain-intrinsic-block-size:none}
.reader-shape .part__text>:last-child{margin-bottom:0}
@media (max-width:700px){.reader-shape{padding-inline:20px}.reader-shape__strip{margin-left:-15px}.reader-shape .account-line{margin:var(--space-3) 0 var(--space-4)}}
@media (min-width:1024px){.reader-shape{grid-template-columns:minmax(0,min(var(--reader-measure),50vw)) minmax(0,1fr);justify-content:start;column-gap:24px;padding-left:32px;padding-right:0}
.reader-shape__side{display:block;position:sticky;top:var(--topbar-h);height:calc(100vh - var(--topbar-h));border-left:1px solid var(--rule)}}
@media (min-width:1280px){.reader-shape{column-gap:var(--reader-gap)}.reader-shape__side{margin-left:16px}}
@media (min-width:1680px){.reader-shape{grid-template-columns:var(--reader-outline) minmax(0,var(--reader-measure)) minmax(600px,1fr)}
.reader-shape__outline{display:block}.reader-shape__strip{margin-bottom:var(--space-6)}}
@media (min-width:1921px){.reader-shape{--fs-read:clamp(18px,calc(18px + (100vw - 1920px)/320),20px);--reader-measure:clamp(680px,calc(680px + (100vw - 1920px)*.117),755px)}}
@media (min-width:2100px){.reader-shape{grid-template-columns:var(--reader-outline) minmax(0,var(--reader-measure)) minmax(600px,1040px);justify-content:center}}`,i=[100,96,98,92,60,0,100,94,97,88,99,45],a=(e,t)=>`<div class="reader-shape"${t}><div class="reader-shape__outline"></div><div><div class="reader-shape__strip"></div>${e}</div><div class="reader-shape__side"></div></div>`;function o(e=`Loading the paper…`){return`<style>${r}</style>${a(`<p class="reader-shape__words" role="status">${e}</p><div class="reader-shape__text"><i></i>${i.map(e=>e?`<i style="width:${e}%"></i>`:`<i style="visibility:hidden"></i>`).join(``)}</div>`,` aria-busy="true"`)}`}var s=`Select a marked phrase to see its Lean statement and how the two compare.`,c=`data-first-paper`;function l(e){return e.querySelector(`[${c}]`)?.outerHTML??null}var u=t(),d=l(document),f=window.location.pathname;function p({words:e}){let t=d&&window.location.pathname===f?d:null;return(0,u.jsx)(`div`,{style:{display:`contents`},dangerouslySetInnerHTML:{__html:t??o(e)}})}function m(){(0,n.useEffect)(()=>{d=null},[])}export{m as n,s as r,p as t};
//# sourceMappingURL=skeletonView-Dohb75yM.js.map