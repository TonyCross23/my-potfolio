import React from 'react';

const DownloadCv = () => {
  const handleDownload = () => {
    // The link to your CV file
    const link = document.createElement('a');
    link.href = "./src/assets/Aung_Ko_Oo.pdf";
    link.download = 'Aung_ko.Oo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md
    text-white bg-green-500 hover:bg-green-600 md:text-md">
      Download CV
    </button>
  );
};

export default DownloadCv;
