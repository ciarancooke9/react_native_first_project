import { StyleSheet, View, TextInput ,Button } from "react-native";

import { useState } from "react";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal!"
        onChangeText={props.inputHandler}
      />
      <Button title="Add Goal" onPress={props.goalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "lightgreen",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
