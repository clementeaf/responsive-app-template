import type { ReactElement } from 'react';

/**
 * Componente de la página de landing
 * @returns Componente de landing
 */
function Landing(): ReactElement {
  return (
    <div className="bg-blue-50/60 flex flex-col items-start justify-start min-h-screen w-full p-4">
      <div className="bg-gray-200 rounded-[20px] w-full h-[20%]">Navbar</div>
    </div>
  );
}

export default Landing;

