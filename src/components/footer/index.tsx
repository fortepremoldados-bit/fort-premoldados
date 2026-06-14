import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export const Footer = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-[#4E524F]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

        {/* Logo e descrição */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <Image
              src="/LogoCompleta.png"
              alt="Forte Pré-Moldados"
              width={280}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </div>

          <p className="text-gray-400 text-sm leading-8">
            Indústria especializada em artefatos de concreto
            <br />
            de alto desempenho para infraestrutura e
            <br />
            pavimentação.
          </p>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/fortepremoldados.oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram
                size={18}
                className="text-[#008446]"
              />
              <span>@fortepremoldados.oficial</span>
            </a>
          </div>
        </div>

        {/* Fábrica / Matriz */}
        <div>
          <h4 className="text-white font-bold uppercase mb-6 tracking-wide">
            Fábrica / Matriz
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-[#008446] shrink-0 mt-0.5"
              />
              <span>
                Rua Coronel Durval Souza, Lote 02 Quadra H - S/N°
                <br />
                Sampaio Correia
                <br />
                Saquarema - RJ
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={18}
                className="text-[#008446] shrink-0"
              />
              <span>(21) 2621-6909</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={18}
                className="text-[#008446] shrink-0"
              />
              <span>diretoria@alamotec.com.br</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Rodapé inferior */}
      <div className="pt-8 border-t border-[#4E524F] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} Forte Pré-Moldados. Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </a>

          <a
            href="#"
            className="hover:text-white transition-colors"
          >
            Termos de Uso
          </a>
        </div>
      </div>

    </div>
  </footer>
);
