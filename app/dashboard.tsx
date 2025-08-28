import { View, Image } from 'react-native'
import React from 'react'
import Pill from '../components/pill'
import TopNav from '../components/topnav'


const dashboard = () => {
  return (
    <View className="flex-1 items-center justify-center">
        <Image source={require("../assets/images/cover.png")} resizeMode="cover" className="absolute z-0" />
        <TopNav/>
        <Pill/>
    </View>
  )
}

export default dashboard