import { StoreContext, useStoreData } from "../context";
import { TStore } from "../store";

export const useStore = <Selection>(
    dataSelector: (store: TStore) => Selection
) =>
    useStoreData(StoreContext, contextData => contextData!, dataSelector);