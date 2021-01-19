
import React, { useEffect } from 'react'
import { StatusBar, Text, View, FlatList, Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNextPage, fetchNowPlaying } from '../store/MovieAction'
import Styles from '../Style'

export default function HomeScreen({ navigation }) {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  const imageUri = useSelector(state => state.imageUri)
  const currentPage = useSelector(state=> state.currentPage)

  useEffect(() => {
    dispatch(fetchNowPlaying(currentPage))    
  }, [])

  const navigateToMovieDetail = (movie) => {
    dispatch({
      type : "SET_MOVIE",
      payload: movie
    })
    navigation.navigate("MovieDetailScreen")
  }

  const getNextPage = () =>{
    dispatch(fetchNextPage(currentPage+1))
  }

  // markup item flatlist
  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={ () => navigateToMovieDetail(item) }>
      <View style={[Styles.row, Styles.movieListItem]}>
        <Image resizeMode="contain" style={[Styles.moviePoster]} source={{ uri: imageUri + "w200" + item.poster_path }} />

        <View>
          <Text style={[Styles.textLight, Styles.textHeading2]}>{item.title}</Text>
          <Text style={[Styles.textLight, Styles.subtitle, { marginTop: 5 }]}>Released Year : {item.release_date.substring(0, 4)}</Text>
          <View style={[Styles.row, { alignItems: "center", marginTop: 14 }]}>
            <Text style={[Styles.subtitle, Styles.rating]}>{item.vote_average}</Text>
            <Text style={[Styles.subtitle, { marginLeft: 5, fontSize: 13 }]}>average vote</Text>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  )

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.row}>
        <Text style={[Styles.textLight, Styles.textHeading]}>Now Playing</Text>
      </View>
      {/* <Text>{JSON.stringify(movies.results)}</Text> */}
      <FlatList
        style={[Styles.mt1]}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        onEndReached={()=>getNextPage()}
      />
    </SafeAreaView>

  )
}