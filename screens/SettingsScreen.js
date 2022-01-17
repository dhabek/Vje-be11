import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

export function SettingsScreen({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.sampleapis.com/wines/reds"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  function handleSettingsPress() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.screen}>
      <Button title="Go to Home screen!" onPress={handleSettingsPress} />
      <Text style={styles.headingOne}>Red wines{"\n"}</Text>
      <Text style={styles.paragraph}>We offer you a wide array of high quality wines. Take a look at what we have to offer!</Text>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <View style={styles.item}>
                  <View style={styles.image}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: `${item.image}`,
                      }}
                    />
                  </View>
                  <View style={styles.textAround}>
                    <Text style={styles.textInside}>Winery name: </Text><Text>{item.winery}</Text>
                    <Text style={styles.textInside}>Name/year of the bottle: </Text><Text>{item.wine}</Text>
                    <Text style={styles.textInside}>Average rating of the bottle: </Text><Text>{item.rating.average}</Text>
                    <Text style={styles.textInside}>Number of ratings: </Text><Text>{item.rating.reviews}</Text>
                    <Text style={styles.textInside}>Origin of the wine: </Text><Text>{item.location}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    margin: 10
  },
  item: {
    flexDirection: "row",
    margin: 10,
  },
  textAround: {
    padding: 10,
    margin: 10
  },
  textInside: {
    fontWeight: "200",
    fontSize: 14
  },
  headingOne: {
    fontWeight: "500",
    alignItems: "center",
    fontSize: 20,
  },
  paragraph: {
    padding: 10
  }
});
