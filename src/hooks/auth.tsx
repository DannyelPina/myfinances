import { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
	children: ReactNode;
}

interface IUser {
	id: string;
	name: string;
	email: string;
	photo?: string;
}

interface IAuthContextData {
	user: IUser;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const user: IUser = {
		id: "",
		name: "",
		email: "",
		photo: "",
	};
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

const useAuth = () => {
	const autContext = useContext(AuthContext);

	return autContext;
};

export { AuthProvider, useAuth };
