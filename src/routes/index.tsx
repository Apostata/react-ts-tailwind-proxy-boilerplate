import React, { Suspense, Fragment, ElementType } from 'react';
import { BrowserRouter, Link, Route, RouteProps, Routes } from 'react-router-dom';
import routes, {ExtendedRouteProps} from './config';


const renderRoutes = (currRoutes:ExtendedRouteProps[], parentPath:string) => {
	return currRoutes.map((route) => {
		const path = `${parentPath}${route.path}`;
		console.log('path', path);

		return (
			<Fragment key={path}>
				<Route path={path} element={route.element} />
				{route.children && route.children.length > 0 ? renderRoutes(route.children, path) : null}
			</Fragment>
				
		);
	});

}


const AppRouter = () => {
	return (
		<BrowserRouter>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/about/1">About 1</Link></li>
				<li><Link to="/about/2">About 2</Link></li>
				<li><Link to="/about/3">About 3</Link></li>
			</ul>
			<Suspense fallback={<Fragment>...loading<>{console.log('...loading')}</></Fragment>}>
				<Routes>
					{renderRoutes(routes, '')}
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default AppRouter;