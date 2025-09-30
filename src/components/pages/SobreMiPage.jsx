"use client"; // 👈 necesario si estás en /app/

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function SobreMiPage({ data, lang }) {
  const textos = {
    es: {
      subtitulo: "Nutrición especializada para el rendimiento deportivo",
      parrafo: `Dietista-Nutricionista Colegiada nºEUS00316.
      Graduada en Nutrición Humana y Dietética por la Universidad del País Vasco.
      \nMás de 15 años aprendiendo, enseñando y acompañando en nutrición preventiva.
      \nHe desarrollado mi práctica profesional, en el departamento de Endocrinología-Nutrición del Hospital Universitario de Cruces y el Hospital Universitario de Araba (Txagorritxu y Santiago), estando en contacto directo con pacientes de perfiles muy variados.
      \nApasionada de la nutrición e investigadora constante en mantenimiento y recuperación de la salud a través de métodos no invasivos.
      \nDisfruto acompañando a las personas en el proceso de reencontrar el equilibrio de su cuerpo y optimizar su estado físico-emocional a través de la alimentación consciente.

`,
      leerMas: "Leer más",
      leerMenos: "Leer menos",
    },
    eu: {
      subtitulo: "Kirol errendimendura zuzendutako nutrizio espezializatua",
      parrafo: `Hau testu luzea da, zentroaren filosofia azaltzen duena, 
      nutrizioaren ikuspegia eta pertsonak nola laguntzen diren prozesuan. 
      Nahikoa luzea da "gehiago irakurri" botoi bat behar izateko.`,
      leerMas: "Gehiago irakurri",
      leerMenos: "Gutxiago irakurri",
    },
  };

  const [expanded, setExpanded] = useState(false); // 👈 ahora funciona

  return (
    <>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#dde3c6]">
        {/* Texto columna izquierda */}
        <div className="flex flex-col justify-between">
          {/* Texto arriba */}
          <h1 className="text-6xl font-black text-gray-600">
            MIKAL SAN MIGUEL
          </h1>
          <h1 className="text-xl font-black text-gray-600">
            Dietista-Nutricionista Colegiada nºEUS00316.
          </h1>
          {/* Texto abajo con "leer más" */}
          <div className="text-lg w-3/4">
            <p
              className={
                !expanded
                  ? "line-clamp-2 whitespace-pre-line"
                  : "whitespace-pre-line"
              }
            >
              {textos[lang]?.parrafo}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="mb-12 text-lg   hover:underline"
            >
              {expanded
                ? textos[lang]?.leerMenos + " −"
                : textos[lang]?.leerMas + " +"}{" "}
            </button>
          </div>
        </div>

        {/* Imagen columna derecha */}
        <div className="flex items-center justify-center">
          <Image
            src="/images/mikal_1.webp"
            alt="Imagen"
            width={600}
            height={200}
            className="justify-center object-cover"
            style={{ maxHeight: "90vh" }}
          />
        </div>
      </div>
      {/* Curriculum */}

      <div className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          Formación Académica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Columna 1 */}
          <div className="flex flex-col">
            {[
              "Graduada en Nutrición Humana y Dietética por la Universidad del País Vasco",
              "Máster en Nutrición Deportiva y Cineantropometría por la Universitat de Valencia",
              "Técnico Superior en Dietética",
              "Curso Nutrición Clínica",
              "Curso Nutrición Clínica específica por patologías",
            ].map((item, idx) => (
              <div key={idx} className="pb-12 w-full max-w-2xl">
                <p className="font-sans font-semibold text-2xl line-clamp-2">
                  {item}
                </p>
                <div className="border-b-2 border-gray-500 mt-1 w-full"></div>
              </div>
            ))}
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col">
            {[
              "Curso Nutrición Artificial",
              "Curso Errores Innatos del Metabolismo",
              "Curso Diagnóstico nutricional y métodos educativos en intervenciones nutricionales",
              "Curso Microbiota y su modulación en los diferentes perfiles de paciente",
              "Naturopatía y Fitoterapia Superior",
            ].map((item, idx) => (
              <div key={idx} className="pb-12 w-full max-w-2xl">
                <p className="font-sans font-semibold text-2xl">{item}</p>
                <div className="border-b-2 border-gray-500 mt-1 w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
