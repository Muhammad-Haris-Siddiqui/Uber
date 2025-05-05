import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { icons, images } from "./constants";
import InputField from "./components/inputField";
import React, { useState } from "react";
import CustomButton from "./components/customButton";
import { Link } from "expo-router";
import OAuth from "./components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";
import { ReactNativeModal } from "react-native-modal"

const [code, setCode] = React.useState('')
const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [ verification,setVerification ] = useState({
    state: "success",
    error: "",
    code: "",
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setVerification({...verification,state:'pending'})
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code ,
      })

      if (signUpAttempt.status === 'complete') {
        // TODO: Create a Database user!
        await setActive({ session: signUpAttempt.createdSessionId })
        setVerification({...verification, state: "success"})
      } else {
        setVerification({...verification, error:"Verification failed" , state: "failed"})
      }
    } catch (err) {
      setVerification({...verification, error: err.errors[0].longMessage, state: "failed"})
    }
  }

  if (verification) {
    return (
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code)=> setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </>
    )
  }
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
          />
          {/* // style={styles.bttn} /> */}

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
        <ReactNativeModal isVisible={verification.state === "success"} >
          <View style={styles.div4} >
            <Image source={images.check} style={styles.img} />
          </View>
        </ReactNativeModal>

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
  },
  div4: {
    paddingRight: 28,
    paddingLeft: 28,
    paddingTop: 36,
    paddingBottom: 36,
    borderRadius: 16,
    // height: 20,
  },
  img: {
    width: 110,
    height: 110,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default SignUp;