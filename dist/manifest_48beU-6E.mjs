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

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_assets/hoisted.aUee-YjG.js"}],"styles":[{"type":"external","src":"/_assets/index.GIlqfHbp.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://catherineknepper.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/nikhil/Programming/cat/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index__L9gk8f6.mjs","\u0000@astrojs-manifest":"manifest_48beU-6E.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/bloomsbury.png":"chunks/bloomsbury_mVkM1Bk7.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/crown.png":"chunks/crown_20sQEWqv.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/hachette.png":"chunks/hachette_YIOLe6a7.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/harpercollins.png":"chunks/harpercollins_xnSn19BC.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/hbr.png":"chunks/hbr_5uxRCqS0.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/oreilly.png":"chunks/oreilly_Su-OGYal.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/ou.png":"chunks/ou_8BROqmiv.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/penguin.png":"chunks/penguin_RYSWq1ek.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/posthill.png":"chunks/posthill_Lta3Bnbf.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/rodale.png":"chunks/rodale_-_fRVsjY.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/schiffer.png":"chunks/schiffer_jM5-FyM4.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/seal.png":"chunks/seal_g-uCvFgm.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/simon.png":"chunks/simon_tfFRy5W1.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/sourcebooks.png":"chunks/sourcebooks_gCJYbLZN.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/spiegel.png":"chunks/spiegel_rqbWnNg3.mjs","/Users/nikhil/Programming/cat/src/components/assets/publishers/stmartin.png":"chunks/stmartin_mogCtmTL.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/adaosdance.jpeg":"chunks/adaosdance_4EQtggKW.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/adversity.jpeg":"chunks/adversity_QTyW6ERz.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/anxious.jpeg":"chunks/anxious_cSjxnlzH.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/beach.jpeg":"chunks/beach_4sr86EtM.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/bluebox.jpeg":"chunks/bluebox_MNTZt6fX.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/burnout.jpeg":"chunks/burnout_GgGbyWo5.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/cloud.jpeg":"chunks/cloud_BMIFyZWy.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/coaching-workbook.jpeg":"chunks/coaching-workbook_JZvpZP2Q.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/coaching.jpeg":"chunks/coaching_Hr_0YrHv.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/consumption.jpeg":"chunks/consumption_CiFUGnXt.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/countess.jpeg":"chunks/countess_llzIFMlc.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/death.jpeg":"chunks/death_bEct4jLr.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/deceived.jpeg":"chunks/deceived_fsTUNh2G.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/design.jpeg":"chunks/design_nUjhv4aI.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/dome.jpeg":"chunks/dome_tsedVjSs.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/dontknow.jpeg":"chunks/dontknow_gOErOH9Z.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/eat.jpeg":"chunks/eat_gwdb52ji.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/fearfaith.jpeg":"chunks/fearfaith_bAmPY22A.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/fitting.jpeg":"chunks/fitting_Fvl1-b-f.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/fun.jpeg":"chunks/fun_1wrFexPB.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/grammar.jpeg":"chunks/grammar_o9tn1BQ3.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/heal.jpeg":"chunks/heal_T_pd9Aae.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/leader.jpeg":"chunks/leader_iW5lEhd9.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/leader.png":"chunks/leader_a0LCVkvh.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/mars.jpeg":"chunks/mars_H-HKqTyb.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/memory.jpeg":"chunks/memory_QRrfrSEW.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/miscarriage.jpeg":"chunks/miscarriage_d78tWu6i.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/paris.jpeg":"chunks/paris_raQTKrh0.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/parthenon.jpeg":"chunks/parthenon_W1LfP0OT.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/queenbreaker.jpeg":"chunks/queenbreaker_-UJd-UTz.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/skytrain.jpeg":"chunks/skytrain_dVlzTHMa.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/sleepwalker.jpeg":"chunks/sleepwalker_gLc1oAIS.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/spirit.jpeg":"chunks/spirit_rzQC0o_j.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/stop.jpeg":"chunks/stop_X2pbThp6.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/superhuman.jpeg":"chunks/superhuman_tw2N3bfL.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/timberhill.jpeg":"chunks/timberhill_EGGYa_mn.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/unblocked.jpeg":"chunks/unblocked_Qgku5KAW.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/waitress.jpeg":"chunks/waitress_P0z0NemV.mjs","/Users/nikhil/Programming/cat/src/components/assets/books/wholebody.jpeg":"chunks/wholebody_vRZhu1yk.mjs","/astro/hoisted.js?q=0":"_assets/hoisted.aUee-YjG.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
