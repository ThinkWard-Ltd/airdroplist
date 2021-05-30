import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import Home from './home'

export default React.memo(() => {
	return (
		<Router history={createBrowserHistory()}>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
			</Switch>
		</Router>  
	)
})