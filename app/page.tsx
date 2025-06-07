"use client"

import { Heart, Clock, MapPin } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function LunchInvitation() {
  const phoneNumber = "+573173503132"
  const message = "¡Hola mi amor! Acepto tu invitación a almorzar hoy. Te espero a la 1PM 💕"

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Carta Principal */}
        <div className="bg-white rounded-3xl shadow-2xl border-8 border-gradient-to-r from-rose-200 to-pink-200 relative overflow-hidden">
          {/* Decoración superior */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300"></div>

          {/* Contenido de la carta */}
          <div className="p-12 relative">
            {/* Decoraciones florales en las esquinas */}
            <div className="absolute top-8 left-8 text-rose-200 opacity-50">
              <Heart className="w-8 h-8" />
            </div>
            <div className="absolute top-8 right-8 text-rose-200 opacity-50">
              <Heart className="w-8 h-8" />
            </div>

            {/* Encabezado */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-serif text-gray-800 mb-2">Cordial Invitación</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto rounded-full"></div>
            </div>

            {/* Contenido principal */}
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-700 font-light leading-relaxed">Mi amada y estimada futura esposa,</p>

              <p className="text-xl text-gray-800 leading-relaxed font-light">
                Tengo el honor y el placer de extenderte esta cordial invitación para que me acompañes a compartir un
                almuerzo en este hermoso día.
              </p>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 my-8">
                <div className="flex items-center justify-center space-x-8 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-rose-500" />
                    <span className="font-medium">1:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-rose-500" />
                    <span className="font-medium">Leños & Carbón</span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 font-light leading-relaxed">
                Será un honor pasar por ti y disfrutar juntos de una tarde especial. Tu compañía siempre hace que cada
                momento sea extraordinario.
              </p>

              <p className="text-base text-gray-600 italic">Con todo mi amor y respeto,</p>

              <div className="text-2xl font-serif text-gray-800 mt-4">Tu futuro esposo 💕</div>
            </div>

            {/* Botones de respuesta */}
            <div className="mt-12 space-y-4">
              <p className="text-center text-gray-600 mb-6">Por favor, confirma tu asistencia:</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-none"
                >
                  ¡Sí, acepto! 💕
                </button>

                <button
                  onClick={handleWhatsAppRedirect}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border-none"
                >
                  ¡Claro que sí! 🌹
                </button>
              </div>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-300 via-pink-300 to-rose-300"></div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-4 -left-6 w-10 h-10 bg-rose-200 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute -bottom-2 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-60 animate-pulse delay-1500"></div>
      </div>
    </div>
  )
}
