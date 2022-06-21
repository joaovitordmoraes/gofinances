import React from 'react'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Input/Button'

import * as S from './styles'

export const Register = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  )
}