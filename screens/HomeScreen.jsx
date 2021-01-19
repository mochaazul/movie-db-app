
import React, { useEffect } from 'react'
import { StatusBar, Text, View, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNowPlaying } from '../store/MovieAction'
import Styles from '../Style'

export default function HomeScreen() {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  const imageUri = useSelector(state => state.imageUri)

  useEffect(() => {
    dispatch(fetchNowPlaying())
  }, [])



  const renderItem = ({ item }) => (
    <View style={{flex:1,flexDirection:'row'}}>
      <Image resizeMode="contain" style={{width:100,height:150}} source={{uri: imageUri+"w200"+item.poster_path}}/>
      <Text>{item.title}</Text>
    </View>
  )

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.row}>
        <Text style={[Styles.textLight, Styles.textHeading, Styles.mt1]}>Now Playing</Text>
      </View>
      {/* <Text>{JSON.stringify(movies.results)}</Text> */}
      <FlatList
        data={movies.results}
        renderItem={renderItem}
      />
    </SafeAreaView>

  )
}