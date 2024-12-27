import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer
        className="footer text-center p-3"
        style={{
          backgroundColor: '#7b98ab', // Light blue background
          color: '#003049', // Deep blue text
          fontWeight: '500',
          position: 'fixed',
          bottom: '0',
          width: '100%',
        }}
      >
        <span>All rights reserved 2024 by neptunism</span>
      </footer>
    </div>
  );
};

export default FooterComponent;
