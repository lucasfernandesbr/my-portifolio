import * as React from 'react'
import { CircleMinus, CirclePlus } from 'lucide-react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@lib/utils'

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group accordion-trigger flex flex-1 gap-6 text-left text-sm font-medium transition-all hover:underline',
        className,
      )}
      {...props}
    >
      <div className="relative mt-1 h-5 w-5 shrink-0">
        <CirclePlus
          size={20}
          className="accordion-icon text-muted-foreground absolute inset-0 scale-100 opacity-100 transition-all duration-300 ease-in-out group-data-[state=open]:opacity-0"
        />

        <CircleMinus
          size={20}
          className="accordion-icon text-muted-foreground absolute inset-0 scale-100 opacity-0 transition-all duration-300 ease-in-out group-data-[state=open]:opacity-100"
        />
      </div>

      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export default AccordionTrigger
