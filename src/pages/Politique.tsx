const Politique = () => {
  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-6 max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Politique de Confidentialité</h2>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-6">
          Chez <strong>Webrands Agency</strong>, nous nous engageons à protéger vos informations personnelles et votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos données.
        </p>

        {/* 1. Collecte des données */}
        <h3 className="text-2xl font-semibold text-primary mb-2">1. Collecte des données</h3>
        <p className="text-gray-700 mb-4">
          Nous collectons des informations personnelles lorsque vous :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Remplissez notre formulaire de contact</li>
          <li>Vous abonnez à notre newsletter</li>
          <li>Utilisez nos services</li>
        </ul>

        {/* 2. Utilisation des données */}
        <h3 className="text-2xl font-semibold text-primary mb-2">2. Utilisation des données</h3>
        <p className="text-gray-700 mb-6">
          Les informations collectées sont utilisées pour :
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Améliorer nos services</li>
          <li>Répondre à vos demandes</li>
          <li>Envoyer des communications marketing (avec votre consentement)</li>
        </ul>

        {/* 3. Protection des données */}
        <h3 className="text-2xl font-semibold text-primary mb-2">3. Protection des données</h3>
        <p className="text-gray-700 mb-6">
          Nous mettons en place des mesures de sécurité pour protéger vos informations contre l'accès non autorisé.
        </p>

        {/* 4. Cookies */}
        <h3 className="text-2xl font-semibold text-primary mb-2">4. Cookies</h3>
        <p className="text-gray-700 mb-6">
          Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez les désactiver dans les paramètres de votre navigateur.
        </p>

        {/* 5. Partage des données */}
        <h3 className="text-2xl font-semibold text-primary mb-2">5. Partage des données</h3>
        <p className="text-gray-700 mb-6">
          Nous ne vendons, n’échangeons ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf si la loi l’exige.
        </p>

        {/* 6. Vos droits */}
        <h3 className="text-2xl font-semibold text-primary mb-2">6. Vos droits</h3>
        <p className="text-gray-700 mb-6">
          Conformément au RGPD, vous avez le droit d'accéder, de modifier ou de supprimer vos informations personnelles.
        </p>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Dernière mise à jour : Février 2025
        </p>
      </div>
    </section>
  );
};

export default Politique;
