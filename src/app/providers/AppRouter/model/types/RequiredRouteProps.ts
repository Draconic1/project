import type { RouteProps } from 'react-router-dom';
import type { Required } from 'utility-types';

export type RequiredRouteProps = Required<RouteProps, 'path' | 'element'>;
