import { View, Text, StyleSheet } from "react-native";

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Chat</Text>
      </View>
    </View>
  );
};
export default Chat;

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
  });
  