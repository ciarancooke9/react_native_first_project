import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
      margin: 10,
      padding: 10,
      borderBottomWidth: 5,
      borderRadius: 8,
      borderBottomColor: "lightblue",
      backgroundColor: "orange",
      color: "white",
    },
    goalText: {
        color: "white",
      },
  });