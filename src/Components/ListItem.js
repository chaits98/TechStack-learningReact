import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';
import * as Actions from '../Actions';

class ListItem extends Component {
    renderDescription() {
        if (this.props.item.id === this.props.selectedLibraryId) {
            return (
                <Text>{this.props.item.description}</Text>
            );
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{this.props.item.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(mapStateToProps, Actions)(ListItem);
