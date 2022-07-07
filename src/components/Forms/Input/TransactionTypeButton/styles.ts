import styled, { css, DefaultTheme } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface ContainerProps {
  isActive: boolean
  type: 'up' | 'down'
}

const ContainerModifiers = {
  up: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success_light};
    border: 0;
  `,
  down: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.attention_light};
    border: 0;
  `
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ theme, isActive, type }) => css`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1.5px solid ${theme.colors.text};
    border-radius: 5px;
    padding: 16px;

    ${isActive && type === 'up' && ContainerModifiers.up(theme)}
    ${isActive && type === 'down' && ContainerModifiers.down(theme)}
  `}
`

interface IconProps {
  type: 'up' | 'down'
}

const iconModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,
  down: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `
}

export const Icon = styled(Feather)<IconProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    ${type && iconModifiers[type](theme)}
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`