import React, { useState } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate("HomeScreen");
    };

    const onSignInPressed = () => {
        navigation.navigate("SignInScreen");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Code" value={code} setValue={setCode} />
                <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} secureTextEntry />
                
                <CustomButton text="Submit" onPress={onSubmitPressed} />

                <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}



export default NewPasswordScreen;
