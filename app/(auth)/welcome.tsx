import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onboarding } from "./constants";
import CustomButton from "./components/customButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex ] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return(
    <SafeAreaView className=" flex h-full items-center justify-between bg-white" >
      <TouchableOpacity onPress={ () => {router.replace('/(auth)/sign-up')}}
         style={styles.backButton}
        >
        <Text style={styles.text} >Skip</Text>
      </TouchableOpacity>
      <Swiper
      ref={swiperRef}
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.adot} />}
      onIndexChanged={(index) => setActiveIndex(index) }
      >
        {onboarding.map((item) => (
          <View style={styles.div} >
            <Image
            style={styles.image}
            source={item.image}
            />
            <view style={styles.div2}>
              <Text style={styles.text2}>{item.title}</Text>
            </view>
            <Text style={styles.text3} >{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
      title={isLastSlide ? "Get Started" : "Next" }
      onPress={() => isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1) }
      style={styles.next} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'JakartaBold, sans-serif',
  },
  dot: {
    width: "32%",
    height: "4%",
    marginLeft: 1,
    backgroundColor: "#E2E8F0",
  },
  adot: {
    width: "32%",
    height: "4%",
    marginLeft: 1,
    backgroundColor: "#0286FF",
    borderRadius: "50%"
  },
  div: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  div2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  text2: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    marginRight: 40,
    marginLeft: 40,
    // justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection:"column",
  },
  text3: {
    fontFamily: "JakartaSemiBold, sans-serif",
    textAlign: "center",
    color: "#858585",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 3,
    fontSize: 20,
  },
  next: {
    width: 11,
    marginTop: 10,
  }
});

export default Onboarding;