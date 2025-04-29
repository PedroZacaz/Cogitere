import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { router } from "expo-router";

// Tipo para localização
type LocationType = {
  latitude: number;
  longitude: number;
} | null;

export default function Info() {
  const [currentLocation, setCurrentLocation] = useState<LocationType>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const destination = {
    latitude: -23.544307508377337, 
    longitude:   -46.94947109163271,
  };


  // Pega a localização em tempo real
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão de acesso à localização foi negada.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.top}>
      <TouchableOpacity
        style={styles.sair}
        onPress={() => router.navigate("/(noveseguimentos)")}
      >
        <Ionicons name="arrow-back" size={20} color="#4fc0e8" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sair}
        onPress={() => router.navigate("/home")}
      >
        <Ionicons name="home-outline" size={20} color="#4fc0e8" />
      </TouchableOpacity>
      </View>
      {currentLocation ? (
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation
        >
          {/* Marcador de destino */}
          <Marker coordinate={destination}>
            <Callout
              onPress={() => {
                Alert.alert(
                  "Destino",
                  "Você está indo para: Etec de Itapevi",
                  [{ text: "OK" }]
                );
              }}
            >
              <View style={styles.callout}>
                <Text style={styles.titulo}>Etec de Itapevi</Text>
                <Text style={styles.address}>
                  R. Professor Dimarães Antônio Sandei, 123
                </Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>
            {errorMsg || "Carregando localização..."}
          </Text>
        </View>
      )}
    <View style={styles.loading}>
      <Text style={styles.titulo}>O ponto em vermelho no mapa é o Ecoponto mais proximo de você (O ponto azul é o usuário)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4fc0e8",
  },

  top:{
    width:'90%',
    height: 50,
    backgroundColor: "#ff",
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection:'row'
  },

  sair: {
    width: 100,
    height: 50,
    left: 30,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#fff",
  },

  mapa: {
    width: "100%",
    height: "80%",
    marginTop: 40,
  },

  callout: {
    padding: 22,
    alignItems: "center",
  },

  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#fff'
  },

  address: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 18,
    color: "#888",
  },
});
