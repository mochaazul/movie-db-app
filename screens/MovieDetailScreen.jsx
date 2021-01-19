import React, { useRef } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';

import Styles from '../Style'
import { useEffect } from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchSimilarMovie } from '../store/MovieAction';

export default function MovieDetailScreen({ navigation }) {
  const dispatch = useDispatch()
  const imageUri = useSelector(state => state.imageUri)
  const movie = useSelector(state => state.selectedMovie)
  const similarMovies = useSelector(state => state.similarMovies)

  const scrollRef = useRef()

  useEffect(() => {
    dispatch(fetchSimilarMovie(movie.id))
  }, [movie])

  const navigateToMovieDetail = (movie) => {
    navigation.navigate("MovieDetailScreen")
    scrollRef.current.scrollToOffset({ animated: true, offset: 0 });
    dispatch({
      type: "SET_MOVIE",
      payload: movie
    })
  }


  // Markup utk item flat list
  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => navigateToMovieDetail(item)} style={{width:80,marginRight:10}}>
      <Image resizeMode="contain" style={{ height: 130, width: 80 ,borderRadius:4 }} source={{ uri: imageUri + "w200" + item.poster_path }} />
      <View>
        <Text style={[Styles.textLight]}>{item.title}</Text>      
      </View>
    </TouchableWithoutFeedback>
  )


  return (
    <ScrollView style={[Styles.container, { padding: 0, position: 'absolute', height: "100%" }]}>
      <View style={{ position: 'relative' }}>
        {/* Jelek sih tranparent bla bla gini, cuma ya .. */}
        <LinearGradient colors={['transparent', 'transparent', 'transparent', 'rgba(23, 22, 46, 1)', 'rgba(23, 22, 46, 1)']} style={Styles.linearGradient} />

        <View style={[Styles.backIcon]} >
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back-icon.png')} style={[Styles.iconMd]} />
          </TouchableWithoutFeedback>
        </View>

        <ImageBackground source={{ uri: imageUri + "w500" + movie.backdrop_path }} style={{ width: null, height: 220, flex: 1, zIndex: -1 }} resizeMode="cover" />
      </View>

      <View style={[Styles.floatingCard, Styles.row]}>
        <Image resizeMode="contain" style={Styles.moviePosterDetail} source={{ uri: imageUri + "w200" + movie.poster_path }} />
        <View>
          <Text style={[Styles.textLight, Styles.textTitle]}>{movie.title}</Text>
          <Text style={[Styles.textLight, Styles.subtitle, { marginTop: 5 }]}>Released :  {movie.release_date.substring(0, 4)}</Text>
          <View style={[Styles.row, { alignItems: "center", marginTop: 'auto' }]}>
            <Text style={[Styles.subtitle, Styles.rating]}>{movie.vote_average}</Text>
            <Text style={[Styles.subtitle, { marginLeft: 5, fontSize: 13 }]}>average vote</Text>
          </View>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, flex: 1 }}>
        <Text style={[Styles.textLight, { lineHeight: 21, flex: 1 }]}>{movie.overview}</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text style={[Styles.textLight, Styles.textHeading3]}>
          Similar Movies
              </Text>
      </View>

      <FlatList
        style={{ marginBottom: 30, paddingHorizontal:20 }}
        ref={scrollRef}
        data={similarMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
      >
      </FlatList>
    </ScrollView>
  )
}