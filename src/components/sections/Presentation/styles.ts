import { colors, dimensions } from '@/tokens'

import styled from 'styled-components'

export const Wrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;

    gap: ${dimensions.immense}px;
  }
`

export const PresentationContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
`

export const Img = styled.div`
  width: 100%;
  height: 620px;

  background-color: ${colors.powderblue[100]};

  border-radius: 16px;
`
