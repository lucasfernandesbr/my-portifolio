import styled from 'styled-components'

import { colors, dimensions } from '@/tokens'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.lavender[200]};
  width: fit-content;
  height: 24px;

  padding: ${dimensions.tiny}px;

  border-radius: 8px;

  font-weight: 800;

  @media only screen and (min-width: 1024px) {
    height: 40px;

    padding: ${dimensions.close}px;
  }
`
