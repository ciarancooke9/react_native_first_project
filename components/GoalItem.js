import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "purple" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderBottomWidth: 5,
    borderRadius: 8,
    borderBottomColor: "lightblue",
    backgroundColor: "orange",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    color: "white",
  },
});
