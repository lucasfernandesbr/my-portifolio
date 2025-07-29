import React from 'react'

import Text from '@Atoms/Text'

import { JourneyListProps } from './types'

const JourneyList: React.FC<JourneyListProps> = ({ title, list }) => {
  return (
    <div className="border-gray-30 last-pr-0 flex w-full flex-col border-r-1 p-12 first:pl-0 last:border-0 last:pr-0">
      <div className="flex items-center">
        <Text className="text-3xl font-semibold">{title}</Text>
      </div>

      <ul className="flex w-full flex-col">
        {list.map(
          ({ institution, location_time, qualification, specialization }) => (
            <li className="border-gray-20 flex justify-between border-b pt-10 pb-10 last:border-0">
              <div className="flex flex-col gap-3">
                <Text className="text-2xl font-semibold">{institution}</Text>

                <div className="flex items-center gap-3">
                  <div className="bg-gray-20 h-[12px] w-[12px] rounded-full" />

                  <Text className="text-gray-70 text-sm font-medium">
                    {location_time}
                  </Text>
                </div>
              </div>

              <div className="flex w-[200px] flex-col justify-center gap-3 text-end">
                <Text className="text-brand-black font-semibold">
                  {qualification}
                </Text>

                <Text className="text-brand-black font-semibold">
                  {specialization}
                </Text>
              </div>
            </li>
          ),
        )}
      </ul>
    </div>
  )
}

export default JourneyList
