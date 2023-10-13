import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useCallback } from "react";

import { height, width } from "../../Dimension";

export default Uploadoptions = () => {
  const [fileResponse, setFileResponse] = useState([]);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: "fullScreen",
        type: [types.pdf],
        allowMultiSelection: true,
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <View style={styles.optionsContainer}>
      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/uploadIcon/Shape.png")}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>
          You will receive an Email from {"\n"}Fintech with your CAS
        </Text>
      </View>
      <View style={styles.buttonContainer2}>
        <Image
          source={require("../../../assets/uploadIcon/Shape2.png")}
          style={styles.optionImage}
        />
        <Text style={styles.optionText}>
          Forward the email containing {"\n"}CAS to{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("http://google.com")}
          >
            x@mail.com
          </Text>
        </Text>
      </View>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.buttonContainer2}>
        <Image
          source={require("../../../assets/uploadIcon/Shape3.png")}
          style={styles.optionImage3}
        />
        <Text style={styles.optionText}>
          Upload CAS.pdf here and begin {"\n"}monitoring all your funds in
          {"\n"}one place
        </Text>
      </View>

      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} />
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={"middle"}
          >
            {file?.uri}
          </Text>
        ))}
        <Button
          color="#56C8C9"
          title="📑 Upload"
          onPress={handleDocumentSelection}
        />
      </SafeAreaView>

      <TouchableOpacity style={styles.button}>
        <Button color="#000000" style={{ paddingTop: 30 }} title="Done" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: height * 0.03,
    paddingLeft: width * 0.11,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.032,
  },
  buttonContainer3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.032,
  },
  optionImage: {
    width: width * 0.086,
    height: height * 0.037,
    marginLeft: width * -0.23,
  },
  optionImage3: {
    width: width * 0.086,
    height: height * 0.037,
    marginLeft: width * -0.19,
  },
  optionText: {
    color: "#023047",
    fontWeight: "500",
    fontSize: width * 0.037,
    fontFamily: "Metropolis",
    marginLeft: width * 0.05,
    lineHeight: height * 0.028,
  },
  orText: {
    color: "#023047",
    textAlign: "center",
    marginTop: height * 0.02,
    fontFamily: "Metropolis",
    fontSize: width * 0.032,
    fontWeight: "600",
  },
  container: {
    marginTop: height * 0.01,
    padding: height * 0.041,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: width * -0.35,
  },
  submitContainer: {
    paddingRight: width * 0.2,
    marginTop: height * 0.06,
  },

  button: {
    paddingTop: height * 0.03,
    paddingBottom: height * 0.011,
    paddingLeft: width * 0.045,
    paddingRight: width * 0.045,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    // shadowOpacity: 0.6,
    // elevation: 6,
    fontSize: width * 0.045,
    // shadowRadius: 15,
    marginLeft: width * -0.1,
    height: height * 0.106,
    marginTop: height * 0.01,
  },
});
