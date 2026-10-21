function Encabezado({ cantidad, onAbrirCarrito }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="flex items-center gap-2 font-titulo text-2xl font-bold text-mar-900">
          <img src="/favicon.svg" alt="" className="h-7 w-7" />
          Brisa <span className="text-marca-500">Moda</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <a href="#catalogo" className="hover:text-marca-600">
            Catálogo
          </a>
          <a href="#contacto" className="hover:text-marca-600">
            Contacto
          </a>
        </nav>
        <button
          onClick={onAbrirCarrito}
          className="relative rounded-full bg-mar-700 px-5 py-2 text-sm font-semibold text-white
            hover:bg-mar-900"
        >
          Carrito
          {cantidad > 0 && (
            <span
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center
                rounded-full bg-marca-500 text-xs"
            >
              {cantidad}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

export default Encabezado
