import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './globalStyle'

import Home from './pages/home'

export default React.memo(() => {
	return (
		<Router history={createBrowserHistory()}>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</Router>  
	)
})