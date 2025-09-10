import Text from '@components/Text'

import { JourneyListProps } from './types'

export default function JourneyList({ title, list }: JourneyListProps) {
  return (
    <div className="xs:p-10 xs:first:pb-0 xs:last:pb-0 border-gray-20 dark:border-gray-80 last-pr-0 flex w-full flex-col pb-0 md:last:border-0 lg:border-r-1 lg:p-12 lg:pb-0">
      <div className="xs:justify-center flex lg:justify-start">
        <Text className="text-3xl font-semibold">{title}</Text>
      </div>

      <ul className="flex w-full flex-col">
        {list.map(
          ({ institution, location_time, qualification, specialization }) => (
            <li className="xs:flex-col border-gray-20 dark:border-gray-80 flex items-center justify-between gap-3 border-b pt-10 pb-10 last:border-0 lg:flex-row">
              <div className="xs:items-center flex flex-col gap-3 lg:items-start">
                <Text className="xs:text-center xs:text-lg font-semibold lg:text-start lg:text-2xl">
                  {institution}
                </Text>

                <div className="flex items-center gap-3">
                  <div className="xs:hidden bg-gray-40 h-[12px] w-[12px] rounded-full lg:block" />

                  <Text className="xs:text-center text-gray-70 dark:text-gray-20 text-sm font-medium lg:text-left">
                    {location_time}
                  </Text>
                </div>
              </div>

              <div className="xs:text-center flex w-[200px] flex-col gap-3 lg:text-end">
                <Text className="xs:font-normal xs:text-sm lg:font-semibold">
                  {specialization}
                </Text>

                <Text className="xs:font-normal xs:text-sm lg:font-semibold">
                  {qualification}
                </Text>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}
