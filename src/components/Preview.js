import React from 'react';

function Preview({ colors, gradientType }) {
  const gradient = gradientType === 'linear'
    ? `linear-gradient(${colors.join(', ')})`
    : `radial-gradient(${colors.join(', ')})`;

  return (
    <div className="preview" style={{ background: gradient }}>
      <p>Preview</p>
    </div>
  );
}

export default Preview;
