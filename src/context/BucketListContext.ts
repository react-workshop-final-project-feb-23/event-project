import { createContext } from "react";
import IEvent from "../models/IEvent";

interface BucketListContextModel {
  bucketList: IEvent[];
  addToBucketList: (gif: IEvent) => void;
  isEventInBucketList: (id: string) => boolean;
  removeEventFromBucketList: (id: string) => void;
}

const defaultValues: BucketListContextModel = {
  bucketList: [],
  addToBucketList: () => { },
  isEventInBucketList: () => false,
  removeEventFromBucketList: () => { },
};

export const BucketListContext = createContext(defaultValues);
