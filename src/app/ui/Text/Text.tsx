import { PropsWithChildren, ElementType, ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface TextProps {
  as?: ElementType
  size?: 'XXL' | 'XL' | 'L' | 'M' | 'S' | 'XS'
  leading?: 'TIGHT' | 'NORMAL' | 'LOOSE'
  color?: 'TEXT_GREY' | 'TEXT_LINK' | 'TEXT_PRIMARY'
  weight?: 'normal' | 'bold'
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line'
  emphasis?: boolean
  children: ReactNode
}

const sizeMap = {
  XXL: '2rem',
  XL: '1.5rem',
  L: '1.25rem',
  M: '1rem',
  S: '0.875rem',
  XS: '0.75rem'
}

export const Text = styled.span<TextProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${sizeMap[size]};
    `}
  ${({ leading }) =>
    leading === 'TIGHT' &&
    css`
      line-height: 1.25;
    `}
  ${({ leading }) =>
    leading === 'NORMAL' &&
    css`
      line-height: 1.5;
    `}
  ${({ leading }) =>
    leading === 'LOOSE' &&
    css`
      line-height: 2;
    `}
  ${({ color }) =>
    color === 'TEXT_GREY' &&
    css`
      color: grey;
    `}
  ${({ color }) =>
    color === 'TEXT_LINK' &&
    css`
      color: blue;
    `}
  ${({ color }) =>
    color === 'TEXT_PRIMARY' &&
    css`
      color: black;
    `}
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
  ${({ whiteSpace }) =>
    whiteSpace &&
    css`
      white-space: ${whiteSpace};
    `}
  ${({ emphasis }) =>
    emphasis &&
    css`
      font-style: italic;
      font-weight: bold;
    `};
`
