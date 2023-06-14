/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function navigateToHome(params: any) {
  NavigationService.navigate('Home', params);
}

export function navigateToLogin(params?: any) {
  NavigationService.navigate('Login', params);
}


export function navigateToForgotPassword(params?: any) {
  NavigationService.navigate('ForgotPassword', params);
}

