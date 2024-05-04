import styled from 'styled-components'

import { breakpoints, dimensions } from '@/tokens'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop}px;

  padding: ${dimensions.none} ${dimensions.large}px;
`
