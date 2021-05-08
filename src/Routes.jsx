import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter as RouterWrapper,
  Switch,
  Route,
} from 'react-router-dom'

const Home = lazy(() => import('./views/Home/App'))
const Todos = lazy(() => import('./views/Todos/Todos'))
const NoMatch = () => <>'There is nothing to see here'</>

export default function App() {
  return (
    <RouterWrapper>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Todos">
            <Todos />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Suspense>
    </RouterWrapper>
  )
}