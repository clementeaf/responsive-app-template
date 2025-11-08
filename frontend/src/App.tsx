import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

/**
 * Componente principal de la aplicación con enrutamiento
 * @returns Componente App con configuración de rutas
 */
function App(): ReactElement {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
