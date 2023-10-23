import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

export default function ProductCatalog() {
  return (
    <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 24}}>PRODUCT CATALOGS</Text>
        <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#277FC0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  