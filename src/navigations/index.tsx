import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuStack } from './MenuStack.navigation';
import { LoginNavigation } from './login.navigation';

export function Navigation(){
    return(
        <NavigationContainer>
            <LoginNavigation />
        </NavigationContainer>
    );
}