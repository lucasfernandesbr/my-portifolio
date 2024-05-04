import { fontSize } from '@/tokens'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: ${fontSize.big}rem;

  @media only screen and (min-width: 1024px) {
    font-size: 9.6rem;
  }
`

export default Title
