import React from 'react';

const GoogleSheetViewer: React.FC<{ sheetUrl: string }> = ({ sheetUrl }) => {
  return (
    <div>
      <iframe
        title="Google Sheet"
        src={sheetUrl}
        width="100%"
        height="500"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      />
    </div>
  );
};

export default GoogleSheetViewer;
