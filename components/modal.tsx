import * as React from 'react'
import { createPortal } from 'react-dom'

interface Props {
  children: React.ReactNode

}

export default function Modal ({ children }: Props): React.ReactNode {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => { setMounted(true) }, [])

  return mounted ? createPortal(< >{children}</>, document.body) : null
}
