import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.first}>Hello Wolrd</Text>
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  first: {
    color: "#FFFFFF",
    textAlign: "center", 
  }
});
