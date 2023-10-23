import { View, Text, StyleSheet } from 'react-native';
import { Redirect } from "expo-router";

export default function Product() {
  // return Redirect("/home")
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>PRODUCT PAGE</Text>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#277FC0',
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },          
    title: {
      color: 'white',
      fontSize: 24,
      // fontWeight: "bold",
    },
  });
  