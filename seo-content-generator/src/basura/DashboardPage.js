import React, { useState, useEffect } from 'react';
import KeywordAnalyzer from '../components/KeywordAnalyzer';
import ContentGenerator from '../components/ContentGenerator';
import CompetitorAnalysis from '../components/CompetitorAnalysis';

function DashboardPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Simular la obtención de datos del usuario desde una API
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user'); // URL de ejemplo, cambia a la URL de tu API
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <div className="dashboard-page">
      <h1>Bienvenido, {userData.name}</h1>
      <div className="dashboard-grid">
        <KeywordAnalyzer />
        <ContentGenerator />
        <CompetitorAnalysis />
      </div>
    </div>
  );
}

export default DashboardPage;
