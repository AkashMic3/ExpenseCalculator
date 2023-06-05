import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import ContentLoader, { Rect, Circle , BulletList , Code} from 'react-content-loader/native'

export default function ExpenseLoader() {
  return (
    <View style={{flex:1}}>
    <ContentLoader  viewBox="0 30 380 70">
    <Rect x="0" y="0" rx="10" ry="10" width="100%" height="120" />
    <Rect x="0" y="140" rx="10" ry="10" width="100%" height="120" />
    <Rect x="0" y="280" rx="10" ry="10" width="100%" height="120" />
    <Rect x="0" y="420" rx="10" ry="10" width="100%" height="120" />
    <Rect x="0" y="560" rx="10" ry="10" width="100%" height="120" />
    <Rect x="0" y="700" rx="10" ry="10" width="100%" height="120" />
  </ContentLoader>
 
    </View>
  )
}