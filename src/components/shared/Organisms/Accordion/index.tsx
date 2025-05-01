import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'
import { MinusCircle, PlusCircle } from 'react-feather'

import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
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
        <PlusCircle
          size={20}
          className="accordion-icon text-muted-foreground absolute inset-0 scale-100 opacity-100 transition-all duration-300 ease-in-out group-data-[state=open]:opacity-0"
        />

        <MinusCircle
          size={20}
          className="accordion-icon text-muted-foreground absolute inset-0 scale-100 opacity-0 transition-all duration-300 ease-in-out group-data-[state=open]:opacity-100"
        />
      </div>

      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="accordion-content pl-10 text-sm"
    {...props}
  >
    <div className={cn('pt-4 pb-4', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionItem.displayName = 'AccordionItem'
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
