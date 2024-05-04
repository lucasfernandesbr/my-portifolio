import styled from 'styled-components'

import { fontSize } from '@/tokens'

import { TextProps } from './types'

const Text = styled.p<TextProps>`
  font-size: ${fontSize.regular}rem;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  line-height: 140%;
`

export default Text
