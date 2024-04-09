import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "#212121", marginTop: 25 }}>
      <StatusBar style="auto" />

      <View style={{ backgroundColor: "#393939" }}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
          }}
          style={{
            width: 53,
            height: 24,
            backgroundColor: "black",
            padding: 10,
            margin: 10,
          }}
        />
      </View>
      <Text
        style={{ color: "white", marginBottom: 4, fontSize: 25, marginTop: 8 }}
      >
        Interstellar
      </Text>
      <Text style={{ color: "#B0B0B0" }}>
        2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("./assets/film.jpg")}
          style={styles.cover}
          resizeMode="contain"
        />
        <Text style={{ color: "white", margin: 20, flex: 1 }}>
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
          <TouchableOpacity
            style={styles1.btn}
            activeOpacity={0.8}
            onPress={() => {
              console.log("pressed !");
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              + ADD TO WATCHLIST
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* ::::::::::::::::::::::::::::::::::::::::::::
       */}

      <View style={{ backgroundColor: "#212121", marginTop: 80 }}>
        <Text style={{ color: "white", fontSize: 25 }}>Top Billed Cast</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true}>
          <View>
            <Image
              source={require("./assets/matthew.jpg")}
              style={styles2.cover}
              resizeMode="contain"
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{
                color: "white",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Matthew McConawhaiteuuuuu
            </Text>
            <Text
              style={{
                color: "#B0B0B0",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Cooper
            </Text>
          </View>
          <View>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles2.cover}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "white",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Anne Hathaway
            </Text>
            <Text
              style={{
                color: "#B0B0B0",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Brand
            </Text>
          </View>
          <View>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles2.cover}
              resizeMode="contain"
            />
            <Text
              style={{
                color: "white",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Jessica Chanan
            </Text>
            <Text
              style={{
                color: "#B0B0B0",
                backgroundColor: "#2A2A2A",
                marginLeft: 15,
              }}
            >
              Murph
            </Text>
          </View>
        </ScrollView>
      </View>

      {/* ::::::::::::::::::::::::::::::::::::::::::::
       */}

      <View style={{ backgroundColor: "#212121", marginTop: 25 }}>
        <Text
          style={{
            color: "white",
            marginBottom: 4,
            fontSize: 15,
            marginTop: 3,
          }}
        >
          Director
        </Text>
        <Text style={{ color: "#B0B0B0" }}>Christopher Nolan</Text>
        <Text
          style={{
            color: "white",
            marginBottom: 4,
            fontSize: 15,
            marginTop: 15,
          }}
        >
          Writers
        </Text>
        <Text style={{ color: "#B0B0B0" }}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  cover: { height: 130, width: 94, marginTop: 10, marginLeft: 15 },
  logo: {
    height: 80,
    width: 80,
  },
});

const styles1 = StyleSheet.create({
  btn: {
    backgroundColor: "#0277BD",
    marginTop: 10,
    width: 220,
    height: 40,
    alignItems: "center",
    padding: 20,
    borderRadius: 5,
  },
  btnText: { color: "white", fontSize: 20 },
});

const styles2 = StyleSheet.create({
  cover: { height: 200, width: 130, marginTop: 10, marginLeft: 15 },
  logo: {
    height: 80,
    width: 80,
  },
});
