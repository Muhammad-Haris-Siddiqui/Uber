import { View, StyleSheet, Text } from "react-native";
import CustomButton from "./customButton";

const OAuth = () => (
  <View>
    <View style={styles.div}>
      <View style={styles.div2}/>
        <Text style={styles.txt}>OR</Text>
      <View style={styles.div2}/>
    </View>
    <CustomButton
    title="Log in with google"
    />
  </View>
)

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
});

export default OAuth;