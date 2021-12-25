import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate("HomeScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };
    
    const onResendCodePressed = () => {
        console.warn("onResendCodePressed");
    };    

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} />
                
                <CustomButton text="Confirm" onPress={onConfirmPressed} />

                <CustomButton text="Resend code" onPress={onResendCodePressed} type="SECONDARY" />
                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default ConfirmEmailScreen;
