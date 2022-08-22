import React, { ReactElement} from 'react';
import {useLocalObservable} from 'mobx-react-lite';
import { createStore, TStore } from '../store';

export const StoreContext = React.createContext<TStore | null>(null);

interface StoreProviderInterface {
    children: ReactElement
}

export const StoreProvider: React.FC<StoreProviderInterface> = ({ children }): any => {
    const store = useLocalObservable(createStore);

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
};


export const useStoreData = <Selection, ContextData, Store>(
    context: React.Context<ContextData>,
    storeSelector: (contextData: ContextData) => Store,
    dataSelector: (store: Store) => Selection
) => {
    const value = React.useContext(context);
    if (!value) {
        throw new Error();
    }
    const store = storeSelector(value);

    return dataSelector(store);
};

export default StoreProvider;