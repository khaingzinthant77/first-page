import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default class App extends React.Component {
  _onPressButton() {
    alert('You tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={styles.body}>
          <View>
            <Image
              style={styles.image}
              source={require("./assets/sunglass.png")}
            /> 
          </View>
          <TextInput style={styles.inputtext} placeholder={"UserName"} />
          <TextInput
            style={styles.inputtext}
            placeholder={"Password"}
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Text style={styles.text}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }} />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  body: {
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 40,
    marginBottom: 15
  },
  inputtext: {
    // borderWidth:1,
    borderRadius: 10,
    width: "80%",
    height: 45,
    marginTop: 10,
    backgroundColor: "#242132",
    color: "white",
    fontSize: 18,
    paddingLeft: 7,
    elevation: 15,
    // autoFocus={autoFocus}
  },
  button: {
    backgroundColor: "#0EA6B5",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,

    width: "80%",
    height: 45,
    justifyContent: "center"
  },
  text: {
    fontSize: 17,
    color: "white"
  },
});
