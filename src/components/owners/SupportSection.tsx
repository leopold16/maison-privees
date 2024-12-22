import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export function SupportSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-green-950 mb-12">
            Support Personnalisé
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-barnes-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-barnes-green" />
              </div>
              <h3 className="font-serif text-xl text-green-950 mb-4">Chat en Direct</h3>
              <p className="text-gray-600 mb-6">
                Discutez instantanément avec votre conseiller dédié
              </p>
              <button className="btn-primary w-full">
                Démarrer le chat
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-barnes-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-barnes-green" />
              </div>
              <h3 className="font-serif text-xl text-green-950 mb-4">Ligne Dédiée</h3>
              <p className="text-gray-600 mb-6">
                Une équipe disponible 24/7 pour vous accompagner
              </p>
              <button className="btn-primary w-full">
                +33 1 86 70 58 59
              </button>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-barnes-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-barnes-green" />
              </div>
              <h3 className="font-serif text-xl text-green-950 mb-4">Email</h3>
              <p className="text-gray-600 mb-6">
                Contactez-nous pour toute demande spécifique
              </p>
              <button className="btn-primary w-full">
                Envoyer un email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}