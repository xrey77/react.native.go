import { View, Text, StyleSheet } from "react-native";

const Inbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
          <Text style={styles.title}>Inbox</Text>
      </View>
    </View>
  );
};

export default Inbox;

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
    fontSize: 24,
    color: 'white'
  },
});
