import React, { createContext, useContext } from 'react'

import useAlert, { UseAlertReturnType } from '@hooks/useAlert'

type WithAlertContextType = UseAlertReturnType

export const WithAlertContext = createContext<WithAlertContextType | undefined>(
  undefined
)

export function withAlert<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T & Record<string, unknown>> {
  const ComponentWithAlert: React.ComponentType<T & Record<string, unknown>> = (
    props
  ) => {
    const {
      showAlert,
      setShowAlert,
      AlertElementParams,
      setAlertElementParams,
    } = useAlert()

    const red = (
      <WithAlertContext.Provider
        value={{
          showAlert,
          setShowAlert,
          AlertElementParams,
          setAlertElementParams,
        }}
      >
        <>
          <Component {...props} />
          {showAlert && AlertElementParams?.element}
        </>
      </WithAlertContext.Provider>
    )
    return red
  }

  return ComponentWithAlert
}

export const useAlertContext = (): WithAlertContextType => {
  const context = useContext(WithAlertContext)

  if (!context) {
    throw new Error(
      'useAlertContext has to be called in WithAlertContext.Provider'
    )
  }

  return context
}
