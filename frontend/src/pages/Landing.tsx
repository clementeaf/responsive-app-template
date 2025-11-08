import type { ReactElement } from 'react';

/**
 * Componente de la página de landing
 * @returns Componente de landing
 */
function Landing(): ReactElement {
  return (
    <div className="bg-blue-50/60 flex flex-col items-start justify-star h-full w-full p-4 gap-4">
      <div className="flex items-center bg-gray-200 rounded-[20px] w-full h-[10%] sm:h-[10%] p-4">Hero Navbar</div>
      <div className="flex flex-col bg-gray-200 rounded-[20px] w-full h-[100%] p-4 items-center justify-center">Hero Section</div>
      <div className="flex flex-col bg-gray-200 rounded-[20px] w-full h-[30%] p-4 items-center justify-center">Hero Footer</div>
    </div>
  );
}

export default Landing;

