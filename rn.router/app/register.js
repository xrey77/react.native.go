import { useState } from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from "@expo/vector-icons";

export default function Registration() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [emailadd, setEmailAdd] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [xmessage, setXmessage] = useState('');

  const submitRegistration = () => {
    if (firstname === '')  {
      setXmessage("Please enter your First Name");
      window.setTimeout(() => { setXmessage(''); },3000);
      return;  
    }
    
    if (lastname === '') {
      setXmessage("Please enter your Last Name");
      window.setTimeout(() => { setXmessage(''); },3000);
      return;  
    }
    
    if (emailadd !== '')  {
      // IF THERE IS ONLY 1 DOT IN EMAIL ADDRESS
      if (emailadd.split('.').length-1 === 1) {

        if (emailadd.indexOf('@') === -1 || emailadd.indexOf('.') === -1) {
          setXmessage("Please enter valid Email Address");
          window.setTimeout(() => { setXmessage(''); },3000);
          return;      
        }
  
        if (emailadd.slice(emailadd.indexOf('.')).length > 4 || emailadd.slice(emailadd.indexOf('.')).length < 3) {
            setXmessage("Please enter valid Email Address");
            window.setTimeout(() => { setXmessage(''); },3000);
            return;
        }  

      } else {
        // IF THERE ARE 2 DOT IN EMAIL ADDRESS
        if (emailadd.slice(emailadd.indexOf('.')).length < 6) {
          setXmessage("Please enter valid Email Address");
          window.setTimeout(() => { setXmessage(''); },3000);      
          return;
        }  
      }

      setXmessage('You have successfully registered.'); 
      window.setTimeout(() => { 
        setFirstname('');
        setLastname('');
        setEmailAdd('');
        setMobileno('');
        setUsername('');
        setPassword('');  
        setXmessage(''); 
    },6000);    
  
    }
    
    if (mobileno === ''){
      setXmessage("Please enter your Mobile No.");
      window.setTimeout(() => { setXmessage(''); },3000);
      return;  
    }  
    if (username === '') {
      setXmessage("Please enter your Username");
      window.setTimeout(() => { setXmessage(''); },3000);
      return;  
    } 
    if (password === '') {
      setXmessage("Please enter your Password");
      window.setTimeout(() => { setXmessage(''); },3000);
      return;  
    }
    // IF EVERYTHING OK, SAVE DATA

  }

  return (
    <View style={styles.container}>
        <View style={{backgroundColor: 'white', borderRadius: 50, width:80, height:80, alignItems: 'center'}}>
          <FontAwesome name="user" size={70} color={{color: 'white'}} />
        </View>
        <Text style={{color: '#fff', fontSize: 24, marginBottom: 10, fontWeight: 'bold'}}>Account Registration</Text>
        <View style={styles.registrationBox}>

          <TextInput
          style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}                
          placeholder=" Type your First Name"
          autoFocus={true}
          autoCapitalize="none"
          onChangeText={fname => setFirstname(fname)}
          defaultValue={firstname}
        />

      <TextInput
        style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}
        placeholder=" Type your Laset Name"
        autoCapitalize="none"
        onChangeText={lname => setLastname(lname)}
        defaultValue={lastname}
      />

      <TextInput
        style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}
        placeholder=" Type your Email Address"
        autoCapitalize="none"
        onChangeText={email => setEmailAdd(email)}
        defaultValue={emailadd}
      />

      <TextInput
        style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}
        placeholder=" Type your Mobile No."
        autoCapitalize="none"
        onChangeText={mobile => setMobileno(mobile)}
        defaultValue={mobileno}
      />

      <TextInput
        style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}
        placeholder=" Type your Username"
        autoCapitalize="none"
        onChangeText={uname => setUsername(uname)}
        defaultValue={username}
      />

      <TextInput
        style={{height: 40,backgroundColor: 'white', borderColor: 'gray', borderWidth:1, marginLeft: 10, marginRight:10, marginTop:10}}
        secureTextEntry={true}
        autoCapitalize="none"
        placeholder=" Type your Password"
        onChangeText={pword => setPassword(pword)}
        defaultValue={password}
      />
          <View style={styles.fixToText}>
            <TouchableOpacity onPress={submitRegistration}>
                <Text style={{color: 'white',fontWeight:'bold', fontSize: 20}}>register</Text>
            </TouchableOpacity>
            {/* <Button  color="#fff" title='register' onPress={submitRegistration} /> */}
          </View>
          <View style={{position: 'absolute', bottom: 0, alignSelf: 'center', marginBottom: 20}}>
            <Text style={{color: 'white',fontSize: 18}}>{xmessage}</Text>
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkorange',
      alignItems: 'center',
      justifyContent: 'center',      
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },    
    registrationBox:{
      width: 350,
      height: 500,
      backgroundColor: 'transparent',
      borderRadius: 10
    },
    fixToText: {
      top: 20,
      shadowColor: 'rgba(0,0,0, .4)', // IOS
      shadowOffset: { height: 1, width: 1 }, // IOS
      shadowOpacity: 1, // IOS
      shadowRadius: 1, //IOS
      backgroundColor: 'black',
      elevation: 2, // Android
      height: 30,
      width: '80%',
      justifyContent: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 10,      
      // alignSelf: 'center',
      // marginTop: 20,
      // width: 100,
      // height: 30,
      // borderBottomColor: '#737373',
      // backgroundColor: 'blue',
      // fontSize: 20,
      // fontWeight: 'bold',
      // borderRadius: 10
    },    
  });
  