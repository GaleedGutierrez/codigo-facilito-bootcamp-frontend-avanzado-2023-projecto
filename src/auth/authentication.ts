import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from '@/firebase';

class Authentication {
	createAccount(email: string, password: string) {
		createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
			.then((userCredential) => {
				console.log(userCredential.user);
			})
			.catch((error) => {
				console.error(error);
			});
	}
}
const AUTH = new Authentication();

export default AUTH;
