import { useEffect } from 'react'

const useHandleClickOutside = (refId, handler) => {
  useEffect(() => {
    const ref = document.getElementById(refId)
    const listener = (event) => {
      if (!ref || ref.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('click', listener)
    return () => {
      document.removeEventListener('click', listener)
    }
  }, [refId, handler])
}

export default useHandleClickOutside
