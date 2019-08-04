import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

// Generate Array of 25 element
let itemArray = new Array(25).fill("empty");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: ""
    };
  }
  componentDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber() });
  }

  generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({ randomNumber, isScratched: true });
    return randomNumber;
  };

  scratchItem = itemNumber => {
    //console.log(itemNumber, this.state.randomNumber);
    if (itemNumber === this.state.randomNumber) {
      itemArray[itemNumber] = "lucky";
    } else {
      itemArray[itemNumber] = "unlucky";
    }
    this.forceUpdate();
  };

  scratchItemIcon = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "dollar";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "frown-o";
    }
    return "circle";
  };

  scratchItemColor = itemNumber => {
    if (itemArray[itemNumber] === "lucky") {
      return "green";
    } else if (itemArray[itemNumber] === "unlucky") {
      return "red";
    }
    return "black";
  };

  showAllItems = () => {
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";
    this.forceUpdate();
  };

  resetGame = () => {
    this.setState({ randomNumber: this.generateRandomNumber() }, () => {
      itemArray.fill("empty");
      this.forceUpdate();
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarText}>Scratch And Win Game!</Text>
        </View>
        <View style={styles.grid}>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(0);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(0)}
                color={this.scratchItemColor(0)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(1);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(1)}
                color={this.scratchItemColor(1)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(2);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(2)}
                color={this.scratchItemColor(2)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(3);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(3)}
                color={this.scratchItemColor(3)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(4);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(4)}
                color={this.scratchItemColor(4)}
                size={50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(5);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(5)}
                color={this.scratchItemColor(5)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(6);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(6)}
                color={this.scratchItemColor(6)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(7);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(7)}
                color={this.scratchItemColor(7)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(8);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(8)}
                color={this.scratchItemColor(8)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(9);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(9)}
                color={this.scratchItemColor(9)}
                size={50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(10);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(10)}
                color={this.scratchItemColor(10)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(11);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(11)}
                color={this.scratchItemColor(11)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(12);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(12)}
                color={this.scratchItemColor(12)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(13);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(13)}
                color={this.scratchItemColor(13)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(14);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(14)}
                color={this.scratchItemColor(14)}
                size={50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(15);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(15)}
                color={this.scratchItemColor(15)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(16);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(16)}
                color={this.scratchItemColor(16)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(17);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(17)}
                color={this.scratchItemColor(17)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(18);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(18)}
                color={this.scratchItemColor(18)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(19);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(19)}
                color={this.scratchItemColor(19)}
                size={50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.itemRow}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(20);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(20)}
                color={this.scratchItemColor(20)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(21);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(21)}
                color={this.scratchItemColor(21)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(22);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(22)}
                color={this.scratchItemColor(22)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(23);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(23)}
                color={this.scratchItemColor(23)}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                this.scratchItem(24);
              }}
            >
              <FontAwesome
                name={this.scratchItemIcon(24)}
                color={this.scratchItemColor(24)}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          onPress={() => {
            this.showAllItems();
          }}
          style={styles.button}
          full
          success
        >
          <Text style={styles.buttonText}>Show all</Text>
        </Button>
        <Button
          onPress={() => {
            this.resetGame();
          }}
          style={styles.button}
          full
          primary
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  grid: {},
  itemRow: {
    flexDirection: "row"
  },
  item: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    width: 70,
    alignItems: "center"
  },
  topBar: {
    backgroundColor: "#1BCA9B",
    width: Dimensions.get("window").width,
    margin: 20,
    padding: 13
  },
  topBarText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18
  },
  button: {
    margin: 15
  },
  buttonText: {
    color: "#fff",
    fontSize: 20
  }
});
