import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { icons, images } from "./constants";
import InputField from "./components/inputField";
import React, { useState } from "react";
import CustomButton from "./components/customButton";
import { Link } from "expo-router";
import OAuth from "./components/OAuth";

const SignUp = () => {
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
  })
  const onSignUpPress = async () => {};
  return(
    <ScrollView style={styles.container} >
      <View style={styles.div}>
        <View style={styles.div2} >
          <Image 
            source={images.signUpCar} style={styles.car}/>
            <Text style={styles.txt}>Create Your Account</Text>
        </View>
        <View style={styles.div3}>
          <InputField 
          label="Name"
          placeholder="Enter your name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField 
          label="Email"
          placeholder="Enter your email"
          icon={icons.email}
          value={form.email  }
          onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField 
          label="Password"
          placeholder="Enter your password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
          title="Sign Up"
          onPress={onSignUpPress}
          style={styles.bttn} />

          <OAuth />

          <Link 
             href="/sign-in" 
             className="text-lg text-center text-general-200 mt-10" 
             style={styles.link}
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500" >Log In</Text>
          </Link>
        </View>
        {/* Verifcation Modal */}

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    display: "flex",
    backgroundColor: "white",

  },
  div:{
    flex: 1,
    backgroundColor: "white",
  },
  div2:{
    width: "100%",
    height: 250,
  },
  car:{
    zIndex: 0,
    width: "100%",
    height: 250,
  },
  txt:{
    color: "black",
    fontFamily: "jakartaSemiBold, sans-serif",
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 30,
  },
  div3: {
    padding: 20,
  },
  bttn: {
    marginTop: 24,
    alignItems: "center",
  },
  link: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
  }
});

export default SignUp;