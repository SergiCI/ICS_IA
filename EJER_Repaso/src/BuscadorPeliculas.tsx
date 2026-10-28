import React, { useState } from 'react';

interface Pelicula {
    id: number;
    titulo: string;
    anio: number;
    genero: string;
}

const PELICULAS_INICIALES: Pelicula[] = [
    { id: 1, titulo: 'El Padrino', anio: 1972, genero: 'Drama' },
    { id: 2, titulo: 'Interstellar', anio: 2014, genero: 'Ciencia Ficción' },
    { id: 3, titulo: 'Pulp Fiction', anio: 1994, genero: 'Crimen' },
    { id: 4, titulo: 'El Caballero Oscuro', anio: 2008, genero: 'Acción' },
    { id: 5, titulo: 'Matrix', anio: 1999, genero: 'Ciencia Ficción' },
    { id: 6, titulo: 'El Señor de los Anillos: La comunidad del anillo', anio: 2001, genero: 'Fantasía Medieval' },
    { id: 7, titulo: 'Parque Jurásico', anio: 1993, genero: 'Ciencia Ficción' },
    { id: 8, titulo: 'Gladiator', anio: 2000, genero: 'Acción' },
];

export default function BuscadorPeliculas() {
    const [busqueda, setBusqueda] = useState<string>('');
    const [generoSeleccionado, setGeneroSeleccionado] = useState<string>('Todos');

    const generosDisponibles: string[] = [
        'Todos',
        ...Array.from(new Set(PELICULAS_INICIALES.map((pelicula) => pelicula.genero))),
    ];

    const manejarTeclaAbajo = (evento: React.KeyboardEvent<HTMLInputElement>): void => {
        if (evento.key === 'Escape') {
            setBusqueda('');
        }
    };

    const limpiarFiltros = (): void => {
        setBusqueda('');
        setGeneroSeleccionado('Todos');
    };

    const peliculasFiltradas: Pelicula[] = PELICULAS_INICIALES.filter((pelicula) => {
        const coincideTexto = pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
        const coincideGenero =
            generoSeleccionado === 'Todos' || pelicula.genero === generoSeleccionado;
        return coincideTexto && coincideGenero;
    });

    const totalResultados: number = peliculasFiltradas.length;

    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <h2>Ejercicio 4: Buscador de Películas</h2>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Buscar título... (Escape para borrar)"
                    value={busqueda}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
                    onKeyDown={manejarTeclaAbajo}
                />

                <select
                    value={generoSeleccionado}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setGeneroSeleccionado(e.target.value)
                    }
                >
                    {generosDisponibles.map((genero) => (
                        <option key={genero} value={genero}>
                            {genero}
                        </option>
                    ))}
                </select>

                <button onClick={limpiarFiltros}>Limpiar filtros</button>
            </div>

            <p style={{ fontWeight: 'bold' }}>{totalResultados} resultados</p>

            {totalResultados === 0 ? (
                <p style={{ fontStyle: 'italic', color: '#666' }}>Sin resultados</p>
            ) : (
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {peliculasFiltradas.map((pelicula) => (
                        <li
                            key={pelicula.id}
                            style={{
                                padding: '0.5rem',
                                borderBottom: '1px solid #eee',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                <strong>{pelicula.titulo}</strong> ({pelicula.anio})
                            </span>
                            <span style={{ fontSize: '0.85rem', color: '#555' }}>
                                {pelicula.genero}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};