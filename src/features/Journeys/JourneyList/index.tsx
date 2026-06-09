import { JourneyListProps } from './types'

export default function JourneyList({ title, list }: JourneyListProps) {
  return (
    <div className="xs:p-8 border-border-ui flex w-full flex-col gap-8 lg:border-r-1 lg:p-12 lg:last:border-r-0">
      <p className="xs:text-center font-display text-2xl font-semibold tracking-tight lg:text-start">
        {title}
      </p>

      <ol className="relative flex flex-col gap-0">
        {/* vertical connector line */}
        <div className="bg-border-ui absolute top-2 bottom-2 left-[7px] w-[2px]" />

        {list.map(
          ({ institution, location_time, qualification, specialization }) => (
            <li
              key={institution}
              className="relative flex flex-col gap-1 pb-10 pl-7 last:pb-0"
            >
              {/* timeline dot */}
              <div className="border-border-ui bg-brand-white dark:bg-brand-black absolute top-1.5 left-0 h-4 w-4 rounded-full border-2" />

              <p className="text-base leading-snug font-semibold">
                {institution}
              </p>

              <p className="text-muted-fg text-xs font-medium">
                {location_time}
              </p>

              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                <span className="border-border-ui text-muted-fg rounded-full border px-2.5 py-0.5 text-xs">
                  {qualification}
                </span>
                <span className="border-border-ui text-muted-fg rounded-full border px-2.5 py-0.5 text-xs">
                  {specialization}
                </span>
              </div>
            </li>
          ),
        )}
      </ol>
    </div>
  )
}
