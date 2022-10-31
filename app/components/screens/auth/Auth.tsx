import React, { FC, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../../../hooks";
import { Loader, Button, Field } from "../../ui";
import { styles } from "./styles";

interface IData {
  email: string;
  password: string;
}

export const Auth: FC = () => {

  const { isLoading, login, register } = useAuth();

  const [iseReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const { email, password } = data;

    if(iseReg) await register(email, password)
    else await login(email, password)

    setData({} as IData)
  };

  return (
    <View style={styles.authContainer}>
      <View style={styles.authWrapper}>
        <View style={styles.authInfoBlock}>
          <Text style={styles.authTitle}>
            {iseReg ? "Sing Up" : "Sing in"}
          </Text>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                value={data.email}
                placeholder={"enter your email"}
                isSecure={false}
                onChange={(value: string) => setData({ ...data, email: value })}
              />
              <Field
                value={data.password}
                placeholder={"enter your password"}
                isSecure={true}
                onChange={(value: string) => setData({ ...data, password: value })}
              />
              <Button title={`Let's go`} onPress={authHandler} />
              <Pressable onPress={() => setIsReg(!iseReg)}>
                <Text style={styles.statusTitle}
                >
                  {iseReg ? "Login" : "Register"}
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};
