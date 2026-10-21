function Portada() {
  return (
    <section className="relative overflow-hidden">
      {/* Imagen de fondo a pantalla completa */}
      <img
        src="/img/portada.webp"
        alt="Colección Caribe 2026 — Brisa Moda"
        className="h-[520px] w-full object-cover object-top sm:h-[580px] md:h-[640px] lg:h-[700px]"
      />

      {/* Capa de gradiente para que el texto sea legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Texto encima de la imagen */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <p className="mb-3 text-sm font-semibold tracking-widest text-marca-200 uppercase">
            Colección Caribe 2026
          </p>
          <h1 className="font-titulo max-w-xl text-4xl leading-tight font-bold text-white md:text-5xl">
            Ropa fresca para el calor de Cartagena
          </h1>
          <p className="mt-4 max-w-md text-stone-200">
            Lino, algodón y accesorios hechos por artesanos de la región. Haz tu pedido en
            línea y recíbelo en casa.
          </p>
          <a
            href="#catalogo"
            className="mt-6 inline-block rounded-full bg-marca-500 px-8 py-3 font-semibold
              text-white shadow-lg hover:bg-marca-600 transition-colors"
          >
            Ver catálogo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portada
