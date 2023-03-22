import { ReactNode, useEffect, useState } from "react";
import Event from "../models/Event";
import { BucketListContext } from "./BucketListContext";

interface Props {
  children: ReactNode;
}

const BucketListContextProvider = ({ children }: Props) => {
  const [bucketList, setBucketList] = useState<Event[]>([
    {
      id: "abc123",
      name: "First Event",
      url: "https://google.com",
    },
  ]);

  const addToBucketList = (event: Event): void => {
    const newBucketList = [...bucketList, event];
    setBucketList(newBucketList);
    updateSessionStorage(newBucketList);
  };

  const isEventInBucketList = (id: string): boolean => {
    return bucketList.some((item) => item.id === id);
  };

  const removeEventFromBucketList = (id: string): void => {
    const newBucketList = bucketList.filter((fav) => fav.id !== id);
    setBucketList(newBucketList);
    updateSessionStorage(newBucketList);
  };

  const updateSessionStorage = (bucketList: Event[]) => {
    sessionStorage.setItem("bucketList", JSON.stringify(bucketList));
  };

  useEffect(() => {
    const sessionBucketList: Event[] = JSON.parse(
      sessionStorage?.getItem("bucketList") || "[]"
    );
    if (!bucketList) return;

    setBucketList(sessionBucketList);
  }, []);

  return (
    <BucketListContext.Provider
      value={{
        bucketList,
        addToBucketList,
        isEventInBucketList,
        removeEventFromBucketList,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListContextProvider;
