import { colors, dimensions } from '@/tokens'
import styled from 'styled-components'

export const CountrySwitchButton = styled.button`
  display: flex;
  align-items: center;

  gap: ${dimensions.close}px;

  background: none;
  border: none;
  color: none;

  cursor: pointer;
`

export const Flag = styled.img`
  width: 24px;
  height: 24px;

  border: 1px solid ${colors.grayscale[1000]};
  border-radius: 50%;

  object-fit: cover;
`
