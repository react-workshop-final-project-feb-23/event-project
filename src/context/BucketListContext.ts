import { createContext } from "react";
import Event from "../models/Event";

interface BucketListContextModel {
  bucketList: Event[];
  addToBucketList: (gif: Event) => void;
  isEventInBucketList: (id: string) => boolean;
  removeEventFromBucketList: (id: string) => void;
}

const defaultValues: BucketListContextModel = {
  bucketList: [],
  addToBucketList: () => {},
  isEventInBucketList: () => false,
  removeEventFromBucketList: () => {},
};

export const BucketListContext = createContext(defaultValues);
