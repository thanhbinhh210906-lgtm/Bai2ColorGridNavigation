import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [mssv, setMssv] = useState("");

  const handleNext = () => {
    if (!username.trim() || !mssv.trim()) {
      Alert.alert("Lỗi", "Vui lòng nhập đầy đủ Username và MSSV!");
      return;
    }
    router.push({
      pathname: "/screen2",
      params: { username, mssv },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <TextInput
          style={styles.input}
          placeholder="Nhập UserName..."
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập MSSV..."
          value={mssv}
          onChangeText={setMssv}
        />
      </View>

      <View style={styles.gridWrapper}>
        <View style={styles.gridContainer}>
          <View style={[styles.fullBox, styles.blueBox]}>
            <Text style={styles.textWhite}>1</Text>
          </View>

          <View style={[styles.fullBox, styles.redBox]}>
            <Text style={styles.textWhite}>2</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.yellowBox]}>
              <Text style={styles.textBlack}>3</Text>
            </View>
            <View style={[styles.box, styles.greenBox]}>
              <Text style={styles.textWhite}>4</Text>
            </View>
            <View style={[styles.box, styles.purpleBox]}>
              <Text style={styles.textWhite}>5</Text>
            </View>
            <View style={{ flex: 1 }} />
          </View>

          <View style={[styles.fullBox, styles.orangeBox]}>
            <Text style={styles.textWhite}>6</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.footerText}>Họ và tên - MSSV</Text>
        <TouchableOpacity style={styles.btn} onPress={handleNext}>
          <Text style={styles.btnText}>Click me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  topSection: {
    padding: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  gridWrapper: {
    width: "100%",
    alignItems: "center",
  },
  gridContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  fullBox: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    height: 100,
    marginBottom: 8,
  },
  box: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  blueBox: { backgroundColor: "#1E88E5" },
  redBox: { backgroundColor: "#E53935" },
  yellowBox: { backgroundColor: "#FDD835" },
  greenBox: { backgroundColor: "#43A047" },
  purpleBox: { backgroundColor: "#7E57C2" },
  orangeBox: { backgroundColor: "#FB8C00" },
  textWhite: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  textBlack: { color: "#000", fontSize: 32, fontWeight: "bold" },
  bottomSection: {
    paddingBottom: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
