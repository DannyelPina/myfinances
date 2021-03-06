import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
	userStoredLoading: boolean;
	signInWithGoogle(): Promise<void>;
	signInWithApple(): Promise<void>;
	signOut(): Promise<void>;
}

interface AuthorizationResponseProps {
	params: {
		access_token: string;
	};
	type: string;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const [userStoredLoading, setUserStoredLoading] = useState(true);

	async function signInWithGoogle() {
		try {
			const RESPONSE_TYPE = "token";
			const SCOPE = encodeURI("profile email");

			const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

			const { type, params } = (await AuthSession.startAsync({
				authUrl,
			})) as AuthorizationResponseProps;

			if (type === "success") {
				const response = await fetch(
					`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
				);
				const userInfo = await response.json();
				const userLogged = {
					id: userInfo.id,
					email: userInfo.email,
					name: userInfo.given_name,
					photo: userInfo.picture,
				};
				setUser(userLogged);
				await AsyncStorage.setItem(
					"@myfinances:user",
					JSON.stringify(userLogged)
				);
			}
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function signInWithApple() {
		try {
			const credentials = await AppleAuthentication.signInAsync({
				requestedScopes: [
					AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
					AppleAuthentication.AppleAuthenticationScope.EMAIL,
				],
			});

			if (credentials) {
				const name = credentials.fullName!.givenName!;
				const photo = `https://ui-avatars.com/api/?name=${name}&length=1`;
				const userLogged = {
					id: credentials.user,
					email: credentials.email!,
					name,
					photo,
				};

				setUser(userLogged);
				await AsyncStorage.setItem(
					"@myfinances:user",
					JSON.stringify(userLogged)
				);
			}
		} catch (error: any) {
			throw new Error(error);
		}
	}

	async function signOut() {
		setUser({} as IUser);
		await AsyncStorage.removeItem("@myfinances:user");
	}

	useEffect(() => {
		async function loadUserStoredData() {
			const userStored = await AsyncStorage.getItem("@myfinances:user");

			if (userStored) {
				const userLogged = JSON.parse(userStored) as IUser;

				setUser(userLogged);
			}
			setUserStoredLoading(false);
		}

		loadUserStoredData();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				signInWithGoogle,
				signInWithApple,
				signOut,
				userStoredLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const autContext = useContext(AuthContext);

	return autContext;
};

export { AuthProvider, useAuth };
