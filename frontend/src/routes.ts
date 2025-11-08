import { ReactElement } from 'react';
import Landing from './pages/Landing';

/**
 * Interfaz que define la estructura de una ruta
 */
export interface RouteConfig {
  path: string;
  name: string;
  element: ReactElement;
}

/**
 * Objeto que contiene todas las rutas de la aplicación
 */
export const routes: RouteConfig[] = [
  {
    path: '/landing',
    name: 'landing',
    element: <Landing />,
  },
];

/**
 * Obtiene una ruta por su path
 * @param path - Path de la ruta a buscar
 * @returns Configuración de la ruta o undefined si no existe
 */
export function getRouteByPath(path: string): RouteConfig | undefined {
  return routes.find((route) => route.path === path);
}

/**
 * Obtiene una ruta por su nombre
 * @param name - Nombre de la ruta a buscar
 * @returns Configuración de la ruta o undefined si no existe
 */
export function getRouteByName(name: string): RouteConfig | undefined {
  return routes.find((route) => route.name === name);
}

