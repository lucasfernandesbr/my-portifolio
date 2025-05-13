import React from 'react'

import Icon from '@Atoms/Icon'
import Text from '@Atoms/Text'

import { JourneyListProps } from './types'

const JourneyList: React.FC<JourneyListProps> = ({
  icon,
  title,
  list,
  button,
}) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex items-center gap-4">
        <Icon type={icon} />
        <Text className="text-3xl font-semibold">{title}</Text>
      </div>

      <ul className="flex w-full flex-col">
        {list.map(({ institution, location_time, qualification }) => (
          <li className="border-gray-20 flex justify-between border-b pt-10 pb-10 last:border-0">
            <div className="flex flex-col gap-3">
              <Text className="text-2xl font-semibold">{institution}</Text>

              <div className="flex items-center gap-3">
                <Text className="text-gray-70 font-medium">
                  {location_time}
                </Text>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Text className="text-brand-black font-semibold">
                {qualification}
              </Text>
            </div>

            <div className="flex items-center gap-3">
              <Text className="text-brand-black font-semibold">
                {button.label}
              </Text>
              <Icon type={button.icon} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default JourneyList
