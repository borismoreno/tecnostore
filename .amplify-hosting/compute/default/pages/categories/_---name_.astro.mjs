import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CCyU3dUX.mjs';
import 'kleur/colors';
import { a as actions } from '../../chunks/_astro_actions_BflDQ4RQ.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Dg0YsSoL.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { name } = Astro2.params;
  const { data, error } = await Astro2.callAction(
    actions.getProductsByCategory,
    name ?? "CASE"
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": name }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div>Products</div> ${data?.products.map((product) => renderTemplate`<div> <h2>${product.name}</h2> <p>${product.price}</p> </div>`)}` })}`;
}, "/Users/borismoreno/Desktop/astro/tecnostore/src/pages/categories/[...name].astro", void 0);

const $$file = "/Users/borismoreno/Desktop/astro/tecnostore/src/pages/categories/[...name].astro";
const $$url = "/categories/[...name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
