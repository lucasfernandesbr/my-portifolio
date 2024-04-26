import styled from 'styled-components'

import breakpoints from '@/tokens/breakpoints'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
`

export const Content = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop}px;
`
