import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../use-auth";
import { onSnapshot, collection, query, where, limit } from "firebase/firestore";
import { DB } from "../../firebase";

interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {

  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState("");

  useEffect(() => onSnapshot(query(collection(DB, "users"),
    where("_id", "==", user?.uid), limit(1)), snapshot => {
    const profile = snapshot.docs.map(d => ({
      ...(d.data()) as Omit<IProfile, "docId">,
      docId: d.id,
    }))[0];

    setProfile(profile);
    setName(profile?.displayName ?? "Oleg");
    setIsLoading(false);

  }), [profile]);

  const value = useMemo(() => ({
    profile,
    name,
    isLoading,
    setName,
  }), [profile, name, isLoading]);

  return value
};
