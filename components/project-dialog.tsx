import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog'

interface Props {
  open: boolean
  setOpen: () => void
}

export function ProjectDialog ({ open, setOpen, children }: React.PropsWithChildren<Props>) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[80%] h-[80%] bg-primary" >
        {children}
      </DialogContent>
    </Dialog>
  )
}
