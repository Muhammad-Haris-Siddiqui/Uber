import { View, StyleSheet, Text, Image } from "react-native";
import CustomButton from "./customButton";
import { icons } from "../constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return(
  <View>
    <View style={styles.div}>
      <View style={styles.div2}/>
        <Text style={styles.txt}>OR</Text>
      <View style={styles.div2}/>
    </View>
    <CustomButton
    title="Log in with google"
    className="mt-5 w-full shadow-none"
    IconLeft={() => (
      <Image source={icons.google} resizeMode="contain" style={styles.img} />
    )}
    bgVarient="outline"
    textVarient="primary"
    onPress={handleGoogleSignIn}
    />
  </View>
)
};

const styles = StyleSheet.create({
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 12,
  },
  div2: {
    flex: 1,
    height: 1,

  },
  txt: {
    fontSize: 15,
    marginTop: 8,
  },
  bttn: {
    marginTop: 5,
    alignSelf: 'stretch'
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default OAuth;