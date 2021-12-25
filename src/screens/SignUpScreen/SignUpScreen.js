import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import { useWindowDimensions } from "react-native";
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate("ConfirmEmailScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };
    
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };

    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed");
    };
    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                <CustomInput placeholder="Email" value={email} setValue={setEmail} />
                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder="Repeat password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                
                <CustomButton text="Register" onPress={onRegisterPressed} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text onPress={onTermsOfUsePressed} style={styles.link}>Terms of Use</Text> and <Text onPress={onPrivacyPolicyPressed} style={styles.link}>Privacy Policy</Text>.</Text>

                <SocialSignInButtons />
                

                <CustomButton text="Have an account? Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default SignUpScreen;
