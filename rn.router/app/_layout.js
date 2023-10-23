import { Drawer } from 'expo-router/drawer'
import { Image, View,Text, StyleSheet,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import {useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";

const myProfile = () => {
  alert("test");
}

export default function AppLayout(props) {  

  const CustomerDrawer = (props) => {
    return <View style={{flex: 1}}> 
            <DrawerContentScrollView {...props}>
              <View style={{backgroundColor: 'lightgray', marginBottom: 20}}>
                <TouchableOpacity onPress={myProfile}> 
                  <Image source={require('../assets/pix.png')} style={{marginTop: 10,width:100, height:100, alignSelf: 'center'}} />
                  <Text style={{ alignSelf: 'center',marginBottom: 20,fontSize:20, fontWeight: 'bold'}}>LIONofJUDAH.tm</Text>
                </TouchableOpacity>              
              </View>
              <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={{ position: 'absolute', width: '100%',height: 50,alignSelf: 'center' , bottom: 30, borderTopWidth: 1, borderTopColor: 'lightgray'}}>
              <Text style={{marginTop: 20, color: 'black', alignSelf: 'center'}}>Taekwondo Mission</Text>
            </View>
          </View>
  }
  
  function TopIconNavigation() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flexDirection: 'row', width: '95%', marginTop: 50,marginBottom: 10, height:50 }}>
          <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'flex-start'}}>
            <TouchableOpacity onPress={() => navigation.navigate("(drawer)/home")}>
            <Image style={{marginTop:5, marginLeft: 20, width:40, height:40}} source={require('../assets/logo.png')} />
            </TouchableOpacity>
            <Text style={{ height:40, fontSize: 24, marginTop: 13}}> Shopee</Text>
          </View>
          <View style={{ width: '90%',justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer() }>
              {/* <Image style={{ marginTop:5, width:40, height:40}} source={require('../assets/menu.png')} /> */}
              <FontAwesome name="bars" size={34} color={{ color: 'blue'}} />
            </TouchableOpacity>
          </View>
      </View>
    )
  }
  
    return <Drawer        
     screenOptions={{
        headerShown: true, 
        drawerPosition: 'right', 
        headerLeft: false,
        header: () => <TopIconNavigation/>}}     
     drawerContent={(props) => <CustomerDrawer {...props}/>}
     initialRouteName="Page"
     >
      <Drawer.Screen name="index" options={{
        drawerItemStyle: { height: 0},
        drawerLabel: "Home Page",
      }}/>

      <Drawer.Screen name="about" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "About Page",
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="info" size={24} color={{ color: 'blue'}} />
          ),                
      }}/>      
      
      <Drawer.Screen name="user" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "User Page",
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="user" size={24} color={{ color: 'blue'}} />
          ),          
      }}/>      
      
      <Drawer.Screen name="product" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "Product Page",
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="anchor" size={24} color={{ color: 'blue'}} />
          ),          
      }}/>      

      <Drawer.Screen name="login" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "Login", 
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="unlock" size={24} color={{ color: 'blue'}} />
          ),          
      }}/>      
  
      <Drawer.Screen name="register" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "Register",  
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="edit" size={24} color={{ color: 'blue'}} />
          ),          
      }}/>      

      <Drawer.Screen name="quit" options={{
        drawerItemStyle: styles.line,
        drawerLabel: "Quit",        
        drawerIcon: ({focused, size}) => (
          <FontAwesome name="sign-out" size={24} color={{ color: 'blue'}} />
          ),          
      }}/>      

      <Drawer.Screen name="(drawer)/home" options={{
        drawerItemStyle: { height: 0 },
        // drawerActiveTintColor: "#FFF",
        drawerLabel: "",        
      }}/>      

    </Drawer>
};

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    flexDirection: 'row'
  },
  container2: {
    flexDirection: 'row',
    width: '85%',
    marginLeft: 10,
  },
  container3: {
    flexDirection: 'row',
    marginRight: '10',
  },

  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    width: 100,
    fontSize: 22,
    fontWeight: "bold",
    color: 'white'
  },
  img1: {
    width: 25,
    height: 25
  },
  img2: {
    width: 25,
    height: 25,
  },
  line: {
    width: '100%',
    // marginLeft: -1,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F0F0',
  }
});
