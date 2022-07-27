import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

export const Button = ({ title, ...rest }: Props) => {
  return (
    <S.Container {...rest} data-snack-id="form/button">
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}