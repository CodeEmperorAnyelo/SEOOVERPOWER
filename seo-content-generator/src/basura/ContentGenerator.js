import React, { useState } from 'react';

function ContentGenerator() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [content, setContent] = useState('');

  const handleGenerate = async () => {
    // Call your API to generate content
    // const generatedContent = await generateContent(topic, keywords);
    // setContent(generatedContent);
  };

  return (
    <div className="content-generator">
      <h2>Generador de contenido</h2>
      <input 
        type="text" 
        value={topic} 
        onChange={(e) => setTopic(e.target.value)} 
        placeholder="Tema del contenido"
      />
      <input 
        type="text" 
        value={keywords} 
        onChange={(e) => setKeywords(e.target.value)} 
        placeholder="Palabras clave (separadas por comas)"
      />
      <button onClick={handleGenerate}>Generar contenido</button>
      {content && (
        <div className="generated-content">
          <h3>Contenido generado:</h3>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default ContentGenerator;