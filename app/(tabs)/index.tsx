import { StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.content}>Main Page</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  content: {
    color: "white", 
    textAlign: "center",
    flexDirection: "row"
  },
});
