import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { height, width } from "../../Dimension";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Uploadoptions from "./Uploadoptions";

export default Uploadscreens = () => {
  const [text, setText] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.backgroundImage}
          source={require("../../../assets/uploadIcon/Frame.png")}
        />
      </View>
      <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow}>
          <Ionicons
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.arrowText}>Upload Existing Mutual Fund</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.headers}>
          Enter Email Id used to purchase Mutual Funds to upload your holdings
        </Text>

        <TextInput
          style={styles.inputEmail}
          mode="outlined"
          label="Email"
          placeholder="Enter your Email id "
          right={<TextInput.Icon icon="check-circle" />}
        />
      </View>
      <View>
        <Uploadoptions />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: height * 0.45,
    overflow: "hidden",
    borderBottomLeftRadius: width * 0.08,
    borderBottomRightRadius: width * 0.08,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  arrowContainer: {
    flexDirection: "row",
    marginTop: 70,
    paddingLeft: width * 0.04,
    position: "absolute",
    top: 0,
    left: 0,
  },
  arrow: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowText: {
    color: "#fff",
    lineHeight: height * 0.028,
    fontSize: width * 0.037,
    fontFamily: "Metropolis",
    fontWeight: "600",
    marginLeft: width * 0.03,
  },
  inputContainer: {
    marginTop: height * 0.2,
    paddingLeft: width * 0.04,
    position: "absolute",
    top: 0,
    left: 0,
  },
  headers: {
    color: "#fff",
    lineHeight: height * 0.028,
    fontSize: width * 0.037,
    fontFamily: "Metropolis",
    fontWeight: "500",
    width: width * 0.85,
  },
  inputEmail: {
    marginTop: height * 0.05,
    // opacity: 0.6,
    padding: height * 0.009,
  },
});
