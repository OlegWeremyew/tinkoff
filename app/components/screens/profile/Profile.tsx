import React, { FC } from "react";
import { useAuth, useProfile, useUpdateProfile } from "../../../hooks";
import { Layout } from "../../layout";
import { Button, Field, Heading, Loader, Padding } from "../../ui";
import { Text, View } from "react-native";
import {styles} from "./styles"

export const Profile: FC = () => {
  const { logout } = useAuth();
  const { profile, isLoading: isProfileLoading, name, setName } = useProfile();
  const {isLoading, isSuccess, updateProfile} = useUpdateProfile(name, profile?.docId);

  return (
    <Layout>
      <Heading text="Profile" isCenter />
      <Padding>
        {isSuccess && (
          <View style={styles.SuccessContainer}>
            <Text  style={styles.SuccessText}>
              Profile updated successfully
            </Text>
          </View>
        )}
        {(isProfileLoading || isLoading) ? (
          <Loader />
        ) : (
          <>
            <Field
              onChange={setName}
              value={name}
              placeholder="Enter name"
            />
            <Button
              title="Update profile"
              onPress={updateProfile}
            />
            <Button
              title="Logout"
              onPress={logout}
              colors={["gray", "#D6D8D8"]}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};
