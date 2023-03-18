import { ReactNode, useState } from "react";
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
    setBucketList((prev) => [...prev, event]);
  };

  const isEventInBucketList = (id: string): boolean => {
    return bucketList.some((item) => item.id === id);
  };

  const removeEventFromBucketList = (id: string): void => {
    const newFavorites = bucketList.filter((fav) => fav.id !== id);
    setBucketList(newFavorites);
  };

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
