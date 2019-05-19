import * as React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps;

class FormTextInput extends React.Component<Props> {
  render() {
    const { style, ...otherProps } = this.props;
    return (
      <TextInput
        selectionColor={'#ff0000'}
        style={[styles.textInput, style]}
        {...otherProps}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    marginBottom: 20,
    borderWidth: 0
  }
});

export default FormTextInput;