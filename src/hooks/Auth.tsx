import React, { createContext, useCallback, useContext, useState } from 'react'

import api from '../services/api'

interface IAuthState {
  token: string
  user: object
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthContextData {
  user: object
  signIn(credentials: ISignInCredentials): Promise<void>
  // signOut(): void
}

const AuthContext = createContext({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as IAuthState)

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', { email, password })

    const { token, user } = response.data
    setData({ token, user })
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
