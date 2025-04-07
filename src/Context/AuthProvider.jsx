import react , { useContext, useState , createContext } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }){
    const [showModal, setShowModal] = useState(false);
    return(
        <AuthContext.Provider value={{showModal, setShowModal}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);