import { Scan, Bell, Calendar, BarChart } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <Scan className="w-6 h-6" style={{ color: '#009688' }} />,
      title: "Scan instantané",
      description: "Scannez vos produits en un instant pour suivre automatiquement leurs dates de péremption"
    },
    {
      icon: <Bell className="w-6 h-6" style={{ color: '#009688' }} />,
      title: "Alertes intelligentes",
      description: "Recevez des notifications personnalisées avant que vos produits ne périment"
    },
    {
      icon: <Calendar className="w-6 h-6" style={{ color: '#009688' }}  />,
      title: "Suivi en temps réel",
      description: "Visualisez en un coup d'œil les dates de péremption de tous vos produits"
    },
    {
      icon: <BarChart className="w-6 h-6" style={{ color: '#009688' }}  />,
      title: "Statistiques anti-gaspillage",
      description: "Suivez et réduisez votre gaspillage alimentaire grâce aux analyses détaillées"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-3">
            {feature.icon}
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}