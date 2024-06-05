import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    paddingBottom: 20,
    marginBottom: 12,
    paddingLeft: 6
  },
  contentContainer: {
    flexGrow: 1,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    rowGap: 10
  }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
            <Text fontWeight="bold" fontSize="subheading" color="appHeader">
                Repositories
            </Text>
            <Link to="/signin">
              <Text fontSize="subheading" color="appHeader">Sign-in</Text>
            </Link>
          </ScrollView>
        </View>
    )
};

export default AppBar;