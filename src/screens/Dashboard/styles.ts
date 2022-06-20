import styled, { css } from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { FlatList, FlatListProps }  from 'react-native'

import { DataListProps } from '.'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`
export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${theme.colors.primary};
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  `}
`

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 16px;
`

export const UserGreeting = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
  `}
`

export const UserName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
  `}
`

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${RFValue(24)}px;
  `}
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: 16px;
  `}
`

export const TransactionsList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace()
  }
})`
  ${({ theme }) => css``}
`
