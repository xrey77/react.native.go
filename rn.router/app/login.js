import React, { useEffect, useState } from 'react';
import {SafeAreaView, Text,TextInput, View, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
// import Dialog from "react-native-dialog";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity,TouchableHighlight } from 'react-native-gesture-handler';

const Login = (props) => {
  const navigation = useNavigation();
 
  const [emailadd, setEmailAdd] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const forgotPassword = () => {
    setIsLogin(false);
    // alert("forgot");
  };

  const cancleForgotPassword = () => {
    setIsLogin(true);
  };
  const handleFortgotPassword = () =>{
     if(emailadd === '') {
      setMsg('Please enter your Email address')
      window.setTimeout(() => { setMsg(''); }, 3000);
      return;
     }
  }

  const handleCancel = () => {
    setVisible(false);
    navigation.removeListener();
    navigation.goBack();
  };

  const handleLogin = () => {
    if (username === '') {
      setMsg('Please enter Username')
      window.setTimeout(() => { setMsg(''); }, 3000);
      return;
    } else if(password === '') {
      setMsg('Please enter Password')
      window.setTimeout(() => { setMsg(''); }, 3000);
      return;
    }    
    setUsername('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
     { isLogin === true ? (
        <View style={styles.containerinput}>
          <View style={styles.header}>
            <FontAwesome name="male" size={26} style={{marginTop:12,marginLeft: 20,color: 'white'}} />
            <FontAwesome name="female" size={26} style={{marginTop:12,color: 'white'}} />
            <Text style={styles.title}>User's Login</Text>
          </View>
          <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput1}
            placeholder="Type Username!"
            autoCapitalize="none"
            onChangeText={uname => setUsername(uname)}
            defaultValue={username}
          />

          <TextInput
            style={styles.textInput2}
            secureTextEntry={true}
            autoCapitalize="none"          
            placeholder="Type Password!"
            onChangeText={pwd => setPassword(pwd)}
            defaultValue={password}
          />

            {/* LOGIN BUTTON */}
              <TouchableOpacity style={{top: 10,height:30}} onPress={handleLogin}>
              <View style={styles.loginbutton}>
                 <Text style={styles.logintext}>login</Text>
              </View>
              </TouchableOpacity>
          </View>

           {/* ERROR MESSAGE */}
          <Text style={{alignSelf: 'center', color: 'red', bottom: -20}}>{msg}</Text>
          
           {/* FORGOT PASSWORD */}
           <View style={{position: 'absolute',bottom: 30,}}>

          <TouchableHighlight style={{height: 20 }} onPress={forgotPassword}>
              <Text style={styles.forgot}>forgot password ?</Text>
          </TouchableHighlight>
          </View>
        </View>
        ) : 

        // FORGOT PASSWORD 
        <View style={styles.containerinput2}>
          <View style={styles.header}>
            <FontAwesome name="sign-in" size={26} style={{marginTop:12,marginLeft: 20,color: 'white'}} />
            <Text style={styles.title}>Forgot Password</Text>
          </View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput3}
              placeholder="Type Email Address"
              autoCapitalize="none"
              onChangeText={mail => setEmailAdd(mail)}
              defaultValue={emailadd}
            />


            {/* SUBMIT FORGOT PASSWORD BUTTON */}
            <View style={{flexDirection: 'row', top: 10, width: '70%', alignSelf: 'center'}}>
            <TouchableOpacity style={{height:30}} onPress={handleFortgotPassword}>
              <View style={styles.forgotbutton}>
                 <Text style={styles.logintext}>submit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{height:30}} onPress={cancleForgotPassword}>
              <View style={styles.forgotbutton}>
                 <Text style={styles.logintext}>cancel</Text>
              </View>
            </TouchableOpacity>
            </View>

          </View>


           {/* ERROR MESSAGE */}
          <Text style={{alignSelf: 'center', color: 'red', bottom: -20}}>{msg}</Text>


        </View>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkorange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerinput: {
      width: '70%',
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    containerinput2: {
      width: '70%',
      height: 180,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 10,
    },
    header: {
      flexDirection: 'row',
      marginTop: -140,
      height: 50,
      width: '100%',
      backgroundColor: 'black'
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      color: 'white',
      padding: 10
    },
    textInputView: {
      alignContent:'center',
      width: '100%',
      height: '50%',
    },
    textInput1: {
      alignSelf: 'center',
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      top: 20,
      width: '80%',
      height: 40,
      marginBottom: 10,
      textAlign: 'center',
      borderWidth: 0.5,
      borderColor: 'lightgray',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    textInput2: {
      alignSelf: 'center',
      textAlign: 'center',
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      top: 20,
      width: '80%',
      height: 40,
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: 'lightgray',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    textInput3: {
      alignSelf: 'center',
      textAlign: 'center',
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      top: 20,
      width: '80%',
      height: 40,
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: 'lightgray',
      backgroundColor: 'white',
      borderRadius: 10,
    },
    loginbutton: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: 'darkorange',
      elevation: 2, // Android
      height: 30,
      width: '60%',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 10,
    },
    forgotbutton: {
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: 'blue',
      elevation: 2, // Android
      height: 30,
      width: '70%',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 10,
    },
    logintext: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      color:'white'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },    
    forgot: {
      color: 'blue',
      height: 20,
    }
  });
  

  export default Login;