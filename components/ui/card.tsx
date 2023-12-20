import { cn } from '@/lib/utils'

interface Props {
  children?: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: Props) => {
  return (
    <div className={cn('bg-primary rounded-2xl', className)}>
        {children}
    </div>)
}
