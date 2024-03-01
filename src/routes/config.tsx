
import React, {ElementType, lazy} from 'react';
import { RouteProps } from 'react-router-dom';
const Home = lazy(() => import('@/pages/Home') );
const NotFound = lazy(() => import('@/pages/404') );
const About = lazy(() => import('@/pages/About') );
const AboutDetails = lazy(() => import('@/pages/About-details') );

export type ExtendedRouteProps = Omit<RouteProps, 'children'> & {children?:ExtendedRouteProps[]}

const routes : ExtendedRouteProps[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
		children:[
			{
				path: '/:id',
				element: <AboutDetails />,
			},
		]
	},

];

export default routes;