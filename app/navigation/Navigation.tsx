import React, { FC } from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks";
import { Auth, Home, Payments, Services, Support, More, Profile } from "../components";
import { SafeAreaView } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator();

export const Navigation: FC = () => {

  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Screen name="Home" component={Home} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Payments" component={Payments} />
            <Screen name="Services" component={Services} />
            <Screen name="Support" component={Support} />
            <Screen name="More" component={More} />
          </>
        ) : (
          <Screen name="Auth" component={Auth} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
