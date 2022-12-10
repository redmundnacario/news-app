import React, { useEffect, useState } from 'react'

import { AlertPropsType } from '@components/layout/Alert'

export type AlertParams = {
  element: React.FC<AlertPropsType>
  autoDismissible?: boolean
  timeDelay?: number
}

export interface UseAlertReturnType {
  showAlert: boolean
  setShowAlert: React.Dispatch<boolean>
  AlertElementParams: AlertParams | undefined
  setAlertElementParams: React.Dispatch<AlertParams | undefined>
}

const useAlert = (): UseAlertReturnType => {
  const [showAlert, setShowAlert] = useState(false)
  const [AlertElementParams, setAlertElementParams] = useState<
    AlertParams | undefined
  >(undefined)

  useEffect(() => {
    if (!showAlert) {
      setAlertElementParams(undefined)
    } else {
      if (AlertElementParams) {
        if (AlertElementParams.autoDismissible !== undefined) {
          setTimeout(() => {
            setShowAlert(false)
          }, AlertElementParams.timeDelay)
        }
      }
    }
  }, [AlertElementParams, showAlert])

  return {
    showAlert,
    setShowAlert,
    AlertElementParams,
    setAlertElementParams,
  }
}

export default useAlert
