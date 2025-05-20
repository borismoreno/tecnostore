import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCyU3dUX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dg0YsSoL.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Tecno Store", "description": "Tienda de tecnolog\xEDa" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold">Bienvenido a Tecno Store</h1> <p class="mt-4">Tu tienda de tecnología favorita.</p> <p class="mt-4">Aquí encontrarás los mejores productos tecnológicos.</p> <p class="mt-4">
¡Explora nuestra tienda y descubre lo que tenemos para ti!
</p> <p class="mt-4">¡Gracias por visitarnos!</p> <p class="mt-4">¡Esperamos verte pronto!</p> <p class="mt-4">¡No olvides seguirnos en nuestras redes sociales!</p> <p class="mt-4">¡Estamos aquí para ayudarte!</p> ` })}`;
}, "/Users/borismoreno/Desktop/astro/tecnostore/src/pages/index.astro", void 0);

const $$file = "/Users/borismoreno/Desktop/astro/tecnostore/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
