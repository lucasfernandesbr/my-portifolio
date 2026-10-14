import Icon from '@components/Icon'

import { JourneyListProps } from './types'

type DotVariant = 'active' | 'past' | 'completed'

function TimelineDot({ variant }: { variant: DotVariant }) {
  if (variant === 'active') {
    return (
      <span className="absolute top-1.5 left-0 flex h-4 w-4 items-center justify-center">
        <span className="bg-support-02 absolute inline-flex h-full w-full animate-ping rounded-full opacity-50" />
        <span className="bg-support-02 ring-brand-white dark:ring-brand-black relative inline-flex h-3 w-3 rounded-full ring-2" />
      </span>
    )
  }

  if (variant === 'completed') {
    return (
      <span className="border-border-ui bg-brand-white dark:bg-brand-black text-muted-fg absolute top-1.5 left-0 flex h-4 w-4 items-center justify-center rounded-full border">
        <Icon type="Check" className="h-2.5 w-2.5" strokeWidth={3} />
      </span>
    )
  }

  return (
    <span className="absolute top-1.5 left-0 flex h-4 w-4 items-center justify-center">
      <span className="bg-muted-fg ring-brand-white dark:ring-brand-black inline-flex h-3 w-3 rounded-full ring-2" />
    </span>
  )
}

export default function JourneyList({ kind, title, list }: JourneyListProps) {
  const dotVariant = (current?: boolean): DotVariant => {
    if (kind === 'academic') return 'completed'

    return current ? 'active' : 'past'
  }

  return (
    <div className="xs:p-8 border-border-ui flex w-full flex-col gap-8 lg:border-r-1 lg:p-12 lg:last:border-r-0">
      <p className="xs:text-center font-display text-2xl font-semibold tracking-tight lg:text-start">
        {title}
      </p>

      <ol className="relative flex flex-col gap-0">
        <div className="bg-border-ui absolute top-2 bottom-2 left-[7px] w-[2px]" />

        {list.map(
          ({
            institution,
            location_time,
            qualification,
            specialization,
            description,
            stack,
            current,
          }) => (
            <li
              key={institution}
              className="relative flex flex-col pb-10 pl-7 last:pb-0"
            >
              <TimelineDot variant={dotVariant(current)} />

              <div className="-mx-3 flex flex-col gap-1 rounded-lg px-3 py-2 transition-transform duration-200 hover:translate-x-0.5">
                <p className="text-base leading-snug font-semibold">
                  {institution}
                </p>

                <p className="text-muted-fg text-xs font-medium">
                  {location_time}
                </p>

                {description && (
                  <p className="text-muted-fg mt-1 text-sm leading-relaxed">
                    {description}
                  </p>
                )}

                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                  <span className="border-border-ui text-muted-fg rounded-full border px-2.5 py-0.5 text-xs">
                    {qualification}
                  </span>
                  <span className="border-border-ui text-muted-fg rounded-full border px-2.5 py-0.5 text-xs">
                    {specialization}
                  </span>
                </div>

                {stack.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                    {stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted-fg/10 text-muted-fg rounded-full px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ),
        )}
      </ol>
    </div>
  )
}
