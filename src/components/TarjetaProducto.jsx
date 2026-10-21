import { pesos } from '../utils/formato.js'

function TarjetaProducto({ producto, onVerDetalle }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow hover:shadow-md transition-shadow">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        {producto.nuevo && (
          <span className="w-fit rounded-full bg-marca-100 px-2 py-0.5 text-xs font-semibold text-marca-600">
            Nuevo
          </span>
        )}
        <h3 className="font-titulo font-bold text-mar-900">{producto.nombre}</h3>
        <p className="text-sm text-stone-500 capitalize">{producto.categoria}</p>
        <p className="mt-auto text-lg font-bold text-marca-600">{pesos(producto.precio)}</p>
        <button
          onClick={() => onVerDetalle(producto)}
          className="mt-2 rounded-full border border-mar-700 py-2 text-sm font-semibold text-mar-700 hover:bg-mar-700 hover:text-white transition-colors"
        >
          Ver detalle
        </button>
      </div>
    </article>
  )
}

export default TarjetaProducto
