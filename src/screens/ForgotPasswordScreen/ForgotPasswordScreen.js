import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');
    
    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate("NewPasswordScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Username" value={username} setValue={setUsername} />
                
                <CustomButton text="Send" onPress={onSendPressed} />

                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default ForgotPasswordScreen;
