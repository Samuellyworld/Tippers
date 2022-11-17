// Copyright Tippers 🎲🃏 2022
// 17 U.S.C §§ 101-1511

//import relevant modules
import React, { useCallback, useReducer } from 'react';

// type MVC
export enum Modals {
	'image' = 'image',
	'delete' = 'delete'
}

// type MVC
type State = Record<Modals, boolean>;

// type MVC
interface ModalContextValue {
	showModal: (modalName: string | any) => void;
	modals: State;
}

// react context
export const ModalContext = React.createContext<ModalContextValue>({} as ModalContextValue);

export const ModalProvider: React.FC | any= ({ children }: { children: React.ReactNode }) => {
	// set state with the passed modalName and toggle the boolean value against that modalName
	// in the modals state if showModal is called from the consuming components
	const [modals, dispatch] = useReducer(
		(state: State, action: Modals) => ({
			...state,
			[action]: !state[action]
		}),
		{} as State
	);

	const showModal = useCallback((modalName: Modals) => {
		dispatch(modalName);
	}, []);

	const value: ModalContextValue = {
		showModal,
		modals
	};

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
