interface ResumenCarritoProps {
    totalUnidades: number;
    subtotal: number;
}

const formateadorMoneda = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

export function ResumenCarrito({ totalUnidades, subtotal }: ResumenCarritoProps) {
    const GASTOS_ENVIO_FIJOS = 4.95;
    const UMBRAL_ENVIO_GRATIS = 50;

    const esEnvioGratis = subtotal >= UMBRAL_ENVIO_GRATIS;
    const gastosEnvio = esEnvioGratis || subtotal === 0 ? 0 : GASTOS_ENVIO_FIJOS;
    const total = subtotal + gastosEnvio;

    const faltante = UMBRAL_ENVIO_GRATIS - subtotal;
    const porcentajeProgreso = Math.min((subtotal / UMBRAL_ENVIO_GRATIS) * 100, 100);

    return (
        <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "8px", marginTop: "16px" }}>
            <h3>Resumen del pedido</h3>
            <p>Unidades totales: {totalUnidades}</p>
            <p>Subtotal: {formateadorMoneda.format(subtotal)}</p>

            {/* Envío condicional y barra de progreso */}
            <div style={{ margin: "12px 0" }}>
                {esEnvioGratis ? (
                    <p style={{ color: "green", fontWeight: "bold" }}>¡Envío gratis!</p>
                ) : (
                    <div>
                        <p style={{ fontSize: "0.9rem" }}>
                            Te faltan <strong>{formateadorMoneda.format(faltante)}</strong> para el envío gratis.
                        </p>
                        <div style={{ background: "#e0e0e0", borderRadius: "4px", height: "8px", width: "100%", overflow: "hidden" }}>
                            <div
                                style={{
                                    background: "#4caf50",
                                    height: "100%",
                                    width: `${porcentajeProgreso}%`,
                                    transition: "width 0.3s ease"
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            <p>Gastos de envío: {gastosEnvio === 0 ? "Gratis" : formateadorMoneda.format(gastosEnvio)}</p>
            <hr />
            <h4>Total: {formateadorMoneda.format(total)}</h4>
        </div>
    );
}