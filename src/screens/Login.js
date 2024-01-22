import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { HomemadeApple_400Regular } from "@expo-google-fonts/homemade-apple";

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const auth = FIREBASE_AUTH;
  const [fontsLoaded] = useFonts({
    Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium, HomemadeApple_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
      alert('Sign in failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      alert('Check your email')
    } catch (error) {
      alert('Sign up failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.getStarted}>Get Started!</Text>
        <Text style={styles.subscript}>Start with sign up or sign in</Text>
      </View>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Cognitive Cue</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.content}>
        <View style={styles.textInput}>
            <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)} secureTextEntry={true}></TextInput>
        </View>
        {loading ? <ActivityIndicator size='large' color='#0000ff' /> :
          <View style={styles.buttons}>
            
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => signIn()}>
                
                    
                    <Text style={styles.button}>SIGN IN</Text>
                
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signUp()}>
                
                    
                    <Text style={styles.button}>SIGN UP</Text>
                
                </TouchableOpacity>
            </View>
          </View>
        }
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5BCB7C',
    paddingLeft:15,
    marginTop: StatusBar.currentHeight * 1.5 || 0,
  },
  input: {
    marginVertical: 4,
    borderColor: '#5BCB7C',
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
    width: 400,
    // borderColor: 'black',
    // borderWidth: 1,
    backgroundColor: '#CAE5D2',
    fontFamily: 'Poppins_400Regular',
    
  },
  textInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: -20,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 50
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    
    marginTop: 10,
  },
  getStarted: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 50,
    color: 'black',
  },
  subscript: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    color: 'white'
  },
  heading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 150,
    marginLeft: 15
  },
  button:{
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    backgroundColor: 'black',
    padding: 20,
    paddingLeft: 100,
    paddingRight: 100,
    fontSize: 15,
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  logo:{
    fontFamily: 'HomemadeApple_400Regular',
    fontSize: 58,
    display: 'flex',
    color: 'black'
    
  },
  logoContainer:{
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  }
});
