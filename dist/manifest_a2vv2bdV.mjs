import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_E3m4F8q-.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.HQCd4Yei.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://catherineknepper.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nikhil/Downloads/vigorous-visual/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_uhHkOlk2.mjs","\u0000@astrojs-manifest":"manifest_a2vv2bdV.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/bloomsbury.png":"chunks/bloomsbury_aKxgrTNi.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/crown.png":"chunks/crown_n9I33mOv.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/hachette.png":"chunks/hachette_YzqIt7lB.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/harpercollins.png":"chunks/harpercollins_be9L6cw6.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/hbr.png":"chunks/hbr_hH3_VVWU.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/oreilly.png":"chunks/oreilly_8AVdGqcy.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/ou.png":"chunks/ou_6afDHASJ.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/penguin.png":"chunks/penguin_oCBF7Wjk.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/posthill.png":"chunks/posthill_4RYmPUO0.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/rodale.png":"chunks/rodale_plk5DiEq.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/schiffer.png":"chunks/schiffer_5RUgaumC.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/seal.png":"chunks/seal_Jr0eKrq1.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/simon.png":"chunks/simon_j_3ME-ly.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/sourcebooks.png":"chunks/sourcebooks_DYNT7oDs.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/spiegel.png":"chunks/spiegel_8oXoGKud.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/publishers/stmartin.png":"chunks/stmartin_qOGd3ViT.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/adaosdance.jpeg":"chunks/adaosdance_-3i-BE-n.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/adversity.jpeg":"chunks/adversity_ol1-MHda.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/anxious.jpeg":"chunks/anxious_sEqRKcn7.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/beach.jpeg":"chunks/beach_JzkBpP-M.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/bluebox.jpeg":"chunks/bluebox_G19ZjLeZ.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/burnout.jpeg":"chunks/burnout_XS1nAZPT.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/cloud.jpeg":"chunks/cloud_GSuLMoTq.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/coaching-workbook.jpeg":"chunks/coaching-workbook_zhjnG5Bm.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/coaching.jpeg":"chunks/coaching_yvkG4u1M.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/consumption.jpeg":"chunks/consumption_xTlvIZxw.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/countess.jpeg":"chunks/countess_T3ZxjG7T.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/death.jpeg":"chunks/death_WoKPmrzJ.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/deceived.jpeg":"chunks/deceived_Gt6os5BO.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/design.jpeg":"chunks/design_-maMWNum.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/dome.jpeg":"chunks/dome_UtkGVV6c.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/dontknow.jpeg":"chunks/dontknow_Th1BIdTX.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/eat.jpeg":"chunks/eat_Yw4F0cv0.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/fearfaith.jpeg":"chunks/fearfaith_WvafasXe.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/fitting.jpeg":"chunks/fitting_DBUfyjNz.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/fun.jpeg":"chunks/fun_lINkipmO.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/grammar.jpeg":"chunks/grammar_oGy5xO9G.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/heal.jpeg":"chunks/heal_1d6CwaLz.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/leader.jpeg":"chunks/leader_8nnUWUFg.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/leader.png":"chunks/leader_78znuOsx.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/mars.jpeg":"chunks/mars_qneb3902.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/memory.jpeg":"chunks/memory_1mh02C6M.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/miscarriage.jpeg":"chunks/miscarriage_E7rGNv-U.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/paris.jpeg":"chunks/paris_4n3GDTTl.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/parthenon.jpeg":"chunks/parthenon_emouZUcI.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/queenbreaker.jpeg":"chunks/queenbreaker_99qlqSXu.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/skytrain.jpeg":"chunks/skytrain_j7uCfmSH.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/sleepwalker.jpeg":"chunks/sleepwalker_tJ75njLn.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/spirit.jpeg":"chunks/spirit_Ld4h9RW0.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/stop.jpeg":"chunks/stop_dqsiA3LZ.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/superhuman.jpeg":"chunks/superhuman_e68vu51r.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/timberhill.jpeg":"chunks/timberhill_tW_yz-d8.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/unblocked.jpeg":"chunks/unblocked_D8iIRxb_.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/waitress.jpeg":"chunks/waitress_ZSek5g1t.mjs","/Users/nikhil/Downloads/vigorous-visual/src/components/assets/books/wholebody.jpeg":"chunks/wholebody_hyzPGKV-.mjs","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
