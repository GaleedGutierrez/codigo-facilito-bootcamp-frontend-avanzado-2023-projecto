/* eslint-disable import/no-duplicates */
import '@styles/index.scss';
import './styles.scss';
import '@components/common/logo/Logo';
import '@components/common/text-field/TextField';

// eslint-disable-next-line import/no-duplicates
// import { TextField } from '@components/common/text-field/TextField';

// Nodes
// const EMAIL = document.querySelector('#email') as TextField;
// const PASSWORD = document.querySelector('#password') as TextField;
// const FORM = document.querySelector('#form-login') as HTMLFormElement;

// login
// FORM.addEventListener('submit', (event) => {
// 	event.preventDefault();

// 	const USER_EMAIL = EMAIL.input?.value;
// 	const USER_PASSWORD = PASSWORD.input?.value;

// 	if (!USER_PASSWORD || !USER_EMAIL) return;

// 	createUserWithEmailAndPassword(FIREBASE_AUTH, USER_EMAIL, USER_PASSWORD)
// 		.then((userCredential) => {
// 			console.log(userCredential.user);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// 	console.log({ USER_EMAIL, USER_PASSWORD });
// });
