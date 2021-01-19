import { StyleSheet } from "react-native";

const bgColor = "#17162E"
const bgPanel = "#232145"
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    color: '#fff',
    padding: 12

  },
  row: {
    flexDirection: 'row'
  },
  toRight: {
    marginLeft: 'auto'
  },
  textHeading: {
    fontSize: 32,
    fontWeight: "600"
  },
  textLight: {
    color: "#fff"
  },
  mt1: {
    marginTop: 20
  },
  moviePoster: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    borderRadius: 3,
    height: 130,
    width: 100
  },
  movieListItem: {
    backgroundColor: bgPanel,
    marginTop: 50,
    minHeight: 100,
    position: 'relative',
    marginBottom: 0,
    borderRadius: 10,
    paddingLeft: 125,
    paddingTop: 5,
    elevation: 2
  },
  textHeading2: {
    fontSize: 18,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#484875"
  },
  rating: {
    fontSize: 20,
    fontWeight: "700",
    color: "#E8CD4E"
  },
  iconMd: {
    width: 36,
    height: 24
  },
  backIcon: {
    position: 'absolute',
    zIndex: 20,
    top: 30,
    padding: 10,
    left: -10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "rgba(29, 28, 59,0.7)",
  },
  floatingCard: {
    position: 'relative',
    margin: 10,
    marginTop: -70,
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    zIndex: 0,
    top: 0,
    position: 'absolute',
    height: 250,
    width: '100%'
  },
  moviePosterDetail: {
    width: 110,
    borderRadius: 3,
    height: 130
  },
  textTitle:{
    fontSize:20,
    fontWeight:"600"
  },
  textHeading3:{
    fontSize:20,
    fontWeight:"600"
  }
})

export default Styles