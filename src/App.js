import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './Reducers';
import { Header } from './Components/Common';
import LibraryList from './Components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(Reducers)}>
            <View style={styles.rootViewStyle}>
                <Header headerText='Tech Stack' />
                <LibraryList />
            </View>
        </Provider>
    );
};

const styles = {
    rootViewStyle: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
}

export default App;
