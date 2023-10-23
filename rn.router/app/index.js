import { StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function Page() {
  return <Redirect href={"/(drawer)/home"} />;

    // return (
        // <View style={styles.container}>
        //     <View style={styles.main}>
        //         <Text style={styles.title}>WELCOME</Text>
        //     </View>
        // </View>
    // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#277FC0',
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 24,
    color: 'white'
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
