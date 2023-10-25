/* eslint-disable import/no-duplicates */
import '@styles/index.scss';
import './styles.scss';
import '@components/common/logo/Logo';
import '@components/common/text-field/TextField';

// eslint-disable-next-line import/no-duplicates
import { TextField } from '@components/common/text-field/TextField';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FIREBASE_AUTH } from '@/firebase';

// Nodes
const EMAIL = document.querySelector('#email') as TextField;
const PASSWORD = document.querySelector('#new-password') as TextField;
const CONFIRM_PASSWORD = document.querySelector(
	'#confirm-password'
) as TextField;
const FORM = document.querySelector('#form-create-account') as HTMLFormElement;
const INPUTS_CONTAINER = Array.from(
	document.querySelectorAll('text-field') as NodeListOf<TextField>
);

const PASSWORDS_CONTAINER = [INPUTS_CONTAINER[1], INPUTS_CONTAINER[2]];

const checkPasswords = (newPassword: string, confirmPassword: string) => {
	let isInvalid = false;

	if (newPassword !== confirmPassword) {
		PASSWORDS_CONTAINER.forEach((textField) => {
			textField?.container?.classList.add('is-invalid');
		});
		isInvalid = true;

		return isInvalid;
	}

	PASSWORDS_CONTAINER.forEach((textField) => {
		textField?.container?.classList.remove('is-invalid');
	});

	return isInvalid;
};

const userAlreadyExist = () => {
	INPUTS_CONTAINER.forEach((textField) => {
		textField?.container?.classList.add('is-invalid');
	});
};

FORM.addEventListener('submit', (event) => {
	event.preventDefault();

	const USER_EMAIL = EMAIL.input?.value;
	const USER_PASSWORD = PASSWORD.input?.value;
	const USER_CONFIRM_PASSWORD = CONFIRM_PASSWORD.input?.value;

	if (!USER_PASSWORD || !USER_EMAIL || !USER_CONFIRM_PASSWORD) return;

	const IS_PASSWORD_CORRECT = checkPasswords(
		USER_PASSWORD,
		USER_CONFIRM_PASSWORD
	);

	if (IS_PASSWORD_CORRECT) return;

	createUserWithEmailAndPassword(FIREBASE_AUTH, USER_EMAIL, USER_PASSWORD)
		.then((userCredential) => {
			console.log(userCredential.user);
		})
		.catch((error) => {
			console.log(error);
			userAlreadyExist();
		});
});
