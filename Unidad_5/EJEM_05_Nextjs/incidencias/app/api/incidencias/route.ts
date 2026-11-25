import { NextResponse } from "next/server";
import { obtenerIncidencias } from "@/lib/datos";
import { esEstado } from "@/lib/tipos";

// GET /api/incidencias            → todas
// GET /api/incidencias?estado=abierta → solo las abiertas
export async function GET(peticion: Request) {
  const { searchParams } = new URL(peticion.url);
  const estado = searchParams.get("estado");

  if (estado !== null && !esEstado(estado)) {
    return NextResponse.json(
      { error: `Estado no válido: ${estado}` },
      { status: 400 },
    );
  }

  const incidencias = await obtenerIncidencias(estado ?? undefined);
  return NextResponse.json(incidencias);
}
