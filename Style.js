import { StyleSheet } from "react-native";

const bgColor = "#020231"

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color: '#fff',
    padding: 12

  },
  row:{
    flexDirection:'row'
  },  
  toRight:{
    marginLeft:'auto'
  },
  textHeading: {
    fontSize: 32,
    fontWeight: "600"
  },
  textLight: {
    color: "#000"
  },
  mt1:{
    marginTop:24
  }
})

export default Styles