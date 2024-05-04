import { CaretDown } from '@phosphor-icons/react'

import { CountrySwitchButton, Flag } from './styles'
import { CountrySwitchParams } from './types'

export default function CountrySwitch({
	content,
	locale
}: CountrySwitchParams) {
	const [selectedCountry] = content.filter((item) => item.locale === locale)

	return (
		<CountrySwitchButton>
			<CaretDown size={12} color="white" />
			<Flag src={selectedCountry.flag} alt="flag" />
		</CountrySwitchButton>
	)
}
