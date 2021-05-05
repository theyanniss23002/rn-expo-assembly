import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
    return (
        <View style={styles.app}>
            <Text>React Native Expo</Text>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
