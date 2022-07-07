import React, { useState } from 'react'
import { Input } from '../../components/Forms/Input'
import { Button } from '../../components/Forms/Input/Button'
import { TransactionTypeButton } from '../../components/Forms/Input/TransactionTypeButton'

import * as S from './styles'

export const Register = () => {
  const [transactionType, setTransactionType] = useState('')

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </S.TransactionTypes>
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  )
}