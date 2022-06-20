import styled, { css, DefaultTheme } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    background-color: ${theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 20px 24px ${RFValue(42)}px 24px;
    margin-right: 16px;
    background-color: ${type === 'total' ? theme.colors.secondary : theme.colors.shape };
  `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  `}
`

const IconModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  down: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `,
  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.shape};
  `
}

export const Icon = styled(Feather)<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(40)}px;
    ${type && IconModifiers[type](theme)}
  `}
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${type === 'total' ? theme.colors.shape : theme.colors.text_dark};
    margin-top: ${RFValue(38)}px;
  `}
`

export const LastTransaction = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${ type === 'total' ? theme.colors.shape : theme.colors.text};
  `}
`