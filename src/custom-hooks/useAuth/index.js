import { useAuthState } from 'react-firebase-hooks/auth'
import { navigate } from '@reach/router'
import { auth } from '../../firebase.setup'

const useAuth = () => {
    const [user] = useAuthState(auth)

    if (!user || !user.uid) {
        navigate('/')
    }

    return [{
        uid: user.uid,
        name: user.displayName,
        email: user.email
    }]
}

export default useAuth;