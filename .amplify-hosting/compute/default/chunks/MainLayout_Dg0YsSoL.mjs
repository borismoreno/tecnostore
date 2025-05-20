import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, l as renderSlot, k as renderComponent, r as renderTemplate, n as renderHead } from './astro/server_CCyU3dUX.mjs';
import 'kleur/colors';
/* empty css                          */
import { a as actions } from './_astro_actions_BflDQ4RQ.mjs';

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/borismoreno/Desktop/astro/tecnostore/node_modules/@lucide/astro/src/Icon.astro", void 0);

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const Laptop = createLucideIcon("laptop", [["path", { "d": "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" }], ["path", { "d": "M20.054 15.987H3.946" }]]);

const SearchCheck = createLucideIcon("search-check", [["path", { "d": "m8 11 2 2 4-4" }], ["circle", { "cx": "11", "cy": "11", "r": "8" }], ["path", { "d": "m21 21-4.3-4.3" }]]);

const ShoppingCart = createLucideIcon("shopping-cart", [["circle", { "cx": "8", "cy": "21", "r": "1" }], ["circle", { "cx": "19", "cy": "21", "r": "1" }], ["path", { "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }]]);

const User = createLucideIcon("user", [["path", { "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }], ["circle", { "cx": "12", "cy": "7", "r": "4" }]]);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { data, error } = await Astro2.callAction(actions.getCategories, {});
  let categories = [];
  if (!error && data && data.categories) {
    categories = data.categories;
  } else {
    console.error(error);
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="flex items-center justify-center bg-[#f0f2f3] w-full h-[104px] md:h-[84px]"> <div class="lg:container grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0 px-4 md:px-0"> <div class="navbar-center avatar"> <a href="/" class="text-2xl md:text-3xl font-inter text-black font-medium capitalize flex items-center gap-2">', 'TecnoStore</a> </div> <div class="hidden md:block"> <form action="#" class="max-w-full md:max-w-[443px] h-[44px] relative"> <input type="text" placeholder="Buscar..." class="w-full h-full bg-white rounded-lg pl-4 outline-none max-w-[443px]"> <button class="absolute to-50% right-4 translate-y-1/2"> ', ' </button> </form> </div> <div class="flex items-center gap-4"> <button class="btn capitalize"> ', ' carrito<div class="badge badge-sm bg-[#029fae]">\n2\n</div> </button> <!-- <button class="btn capitalize">\n                <Heart />\n            </button> --> ', ' </div> </div> </div> <div class="navbar_bottom flex flex-col md:flex-row items-center justify-between md:justify-center w-full h-auto md:h-[75px] bg-white border-b-[1px] border-[#e1e3e5] px-4 md:px-0 py-4 md:py-0"> <div class="lg:container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0"> <div class="navbar_bottom_left flex flex-wrap items-center gap-4 md:gap-8"> <!-- <div class="dropdown dropdown-start">\n                <div\n                    tabindex={0}\n                    role="button"\n                    class="btn m-1 flex items-center gap-5 capitalize"\n                >\n                    <Menu /> all categories\n                </div>\n                <ul\n                    tabindex={0}\n                    class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"\n                >\n                    <li><a>Chair</a></li>\n                    <li><a>Pant</a></li>\n                    <li><a>Shirt</a></li>\n                    <li><a>T-Shirt</a></li>\n                    <li><a>T-Shirt</a></li>\n                </ul>\n            </div> --> <nav class="flex flex-wrap items-center gap-4 md:gap-8"> ', ' <!-- <a\n                    href="/"\n                    class="text-sm text-[#029fae] font-inter font-medium capitalize"\n                    >Home</a\n                >\n                <a\n                    class="text-sm text-[#636270] font-inter font-medium capitalize"\n                    >shop</a\n                >\n                <a\n                    class="text-sm text-[#636270] font-inter font-medium capitalize"\n                    >product</a\n                >\n                <a\n                    class="text-sm text-[#636270] font-inter font-medium capitalize"\n                    >pages</a\n                >\n                <a\n                    class="text-sm text-[#636270] font-inter font-medium capitalize"\n                    >about</a\n                > --> </nav> </div> <div class="navbar_bottom_right w-auto"> <p class="text-sm text-[#636270] font-inter font-normal capitalize">\ncontacto: <span class="text-[#272343]">(099)270-3156</span> </p> </div> </div> </div> <!-- <script>\n    import { actions } from "astro:actions";\n\n    document.addEventListener("DOMContentLoaded", async () => {\n        const { data, error } = await actions.getCategories();\n        if (!error) {\n            window.categories = data.categories;\n        }\n        else console.error(error);\n    });\n<\/script> -->'])), maybeRenderHead(), renderComponent($$result, "LaptopIcon", Laptop, { "color": "#029fae", "size": "2rem" }), renderComponent($$result, "SearchCheckIcon", SearchCheck, { "color": "#272343", "size": "22px" }), renderComponent($$result, "ShoppingCartIcon", ShoppingCart, {}), renderTemplate`<div class="dropdown"> <div tabindex="0" role="button" class="btn m-1"> ${renderComponent($$result, "UserIcon", User, {})} </div> <ul tabindex="0" class="dropdown-content left menu bg-base-100 rounded-box z-1 w-26 p-2 shadow-sm"> <li> <a>Profile</a> </li> <li> <a>Logout</a> </li> </ul> </div>` , categories.map((category) => renderTemplate`<a${addAttribute(`/categories/${category.category}`, "href")} class="text-sm text-[#636270] font-inter font-medium capitalize flex items-center gap-2"> ${category.category} </a>`));
}, "/Users/borismoreno/Desktop/astro/tecnostore/src/components/shared/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Tecno Store", description = "Tienda" } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Meta tags --><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><!-- <meta property="og:image" content={image} /> --><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><!-- <meta property="twitter:image" content={image} /> -->${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/borismoreno/Desktop/astro/tecnostore/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
