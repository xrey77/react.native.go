import { View, Text, StyleSheet } from 'react-native';
// import { Redirect } from "expo-router";

export default function Otp() {
  // return Redirect("/home")
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>OTP</Text>
                <Text style={styles.title}>One Time Password</Text>
            </View>            
        </View>
    )
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
      textAlign: 'center',
      color: 'white',
      fontSize: 24,
    },
  });
  