import React from 'react'
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect
} from 'react-router-dom'

import { useAuth } from '../hooks/Auth'

interface IRouteProps extends ReactDomRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const Routes: React.FC<IRouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : '/dashboard',
                state: { from: location }
              }}
            />
          )
      }}
    />
  )
}

export default Routes
