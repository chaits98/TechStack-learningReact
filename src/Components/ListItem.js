import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation,
    UIManager,
    Platform
    } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as Actions from '../Actions';

class ListItem extends Component {
    componentWillUpdate() {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.spring();
    }

    renderDescription() {
        if (this.props.expand) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>{this.props.item.description}</Text>
                </CardSection>
            );
        }
    }

    renderTitle() {
        if (this.props.expand) {
            return (
                <View style={styles.selectedTitleViewStyle}>
                    <Text style={styles.selectedTitleStyle}>{this.props.item.title}</Text>
                </View>
            );
        }
        return (
            <CardSection>
                <Text style={styles.titleStyle}>{this.props.item.title}</Text>
            </CardSection>
        );
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
                <View>
                    {this.renderTitle()}
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        fontSize: 16,
        flex: 1,
        paddingLeft: 10
    },
    selectedTitleViewStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#f7ffd7',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
    selectedTitleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        fontWeight: 'bold'
    }
};

const mapStateToProps = (state, ownProps) => {
    const expand = state.selectedLibraryId === ownProps.item.id;

    return { expand };
};

export default connect(mapStateToProps, Actions)(ListItem);
