import React, { Component} from 'react';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
    render() {
        return (
            <WebView
                source={{ uri: 'https://www.parrotias.com/' }}
                style={{ flex: 1 }}
            />
        );
    }
}

export default MyWebComponent;