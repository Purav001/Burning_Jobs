import { MouseEventHandler, ReactNode, forwardRef } from 'react'

interface Props {
  children?: ReactNode
  onClose: MouseEventHandler<HTMLButtonElement>
}

export type Ref = HTMLDialogElement

export default forwardRef<Ref, Props>(function Modal(
  { children, onClose },
  ref
) {
  return (
    <dialog ref={ref}>
      <button type="button" onClick={onClose}>
        &times;
      </button>
      <div>{children}</div>
    </dialog>
  )
})
