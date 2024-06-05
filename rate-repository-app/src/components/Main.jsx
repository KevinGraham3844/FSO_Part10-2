import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from './SignIn';
import theme from '../theme';


import RepositoryList from './RepositoryList';
import AppBar from './AppBar';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8',
        fontFamily: theme.fonts.main
    }
});

const Main = () => {
    return (
        <View style={styles.container} font=''>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            
        </View>
    );
};

export default Main;