import React, { createContext, useCallback, useContext, useState } from 'react'

import api from '../services/api'

interface IAuthState {
  token: string
  user: object
}

interface IResponse {
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
  signOut(): void
}

const AuthContext = createContext({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@RuptivaChallenge:token');
    const user = localStorage.getItem('@RuptivaChallenge:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }
    return {} as IAuthState;
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<IResponse>('/session', { email, password })

    const { token, user } = response.data

    localStorage.setItem('@RuptivaChallenge:token', token);
    localStorage.setItem('@RuptivaChallenge:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    localStorage.removeItem('@RuptivaChallenge:token');
    localStorage.removeItem('@RuptivaChallenge:user');

    setData({} as IAuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
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
