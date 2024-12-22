import React from 'react';

export default function Page() {
  return (
    <div className="grid grid-cols-4">
      <div>
        <h1>Hello World</h1>
      </div>
      <div className="col-span-2"> double size</div>
      <div>End of grid</div>
    </div>
  );
}
