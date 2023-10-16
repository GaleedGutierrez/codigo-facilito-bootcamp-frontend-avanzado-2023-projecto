import CODEPEN_ICON from '@icons/codepen.svg?raw';
import CODEWARS_ICON from '@icons/codewars.svg?raw';
import DEVTO_ICON from '@icons/dev-to.svg?raw';
import FACEBOOK_ICON from '@icons/facebook.svg?raw';
import FREECODECAMP_ICON from '@icons/freeCodeCamp.svg?raw';
import FRONTEND_MENTOR_ICON from '@icons/frontend-mentor.svg?raw';
import GITHUB_ICON from '@icons/github.svg?raw';
import GITLAB_ICON from '@icons/gitlab.svg?raw';
import HASHNODE_ICON from '@icons/hashnode.svg?raw';
import LINKEDIN_ICON from '@icons/linkedin.svg?raw';
import STACK_OVERFLOW_ICON from '@icons/stack-overflow.svg?raw';
import TWITCH_ICON from '@icons/twitch.svg?raw';
import TWITTER_ICON from '@icons/twitter.svg?raw';
import YOUTUBE_ICON from '@icons/youtube.svg?raw';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

const LINK_ICON = `<svg width="1.4rem" height="1.4rem" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.523 10.7207C7.59292 10.7903 7.6484 10.8731 7.68625 10.9643C7.7241 11.0555 7.74359 11.1532 7.74359 11.2519C7.74359 11.3506 7.7241 11.4484 7.68625 11.5395C7.6484 11.6307 7.59292 11.7135 7.523 11.7832L7.15175 12.1544C6.44826 12.8579 5.49413 13.2531 4.49925 13.2531C3.50437 13.2531 2.55024 12.8579 1.84675 12.1544C1.14326 11.4509 0.748047 10.4968 0.748047 9.5019C0.748047 8.50702 1.14326 7.55289 1.84675 6.8494L3.35425 5.34253C4.03018 4.66493 4.93961 4.27142 5.89626 4.2426C6.85292 4.21378 7.78439 4.55184 8.49987 5.18753C8.57374 5.25319 8.63395 5.33276 8.67707 5.42169C8.72019 5.51062 8.74537 5.60717 8.75117 5.70583C8.75698 5.8045 8.74329 5.90333 8.7109 5.99671C8.6785 6.09008 8.62803 6.17616 8.56237 6.25003C8.49671 6.3239 8.41714 6.38411 8.32821 6.42723C8.23928 6.47035 8.14273 6.49552 8.04407 6.50133C7.94541 6.50713 7.84657 6.49345 7.75319 6.46105C7.65982 6.42866 7.57374 6.37819 7.49987 6.31253C7.07082 5.93148 6.5124 5.72877 5.93882 5.74584C5.36524 5.76292 4.81987 5.9985 4.41425 6.4044L2.908 7.9094C2.48597 8.33143 2.24888 8.90382 2.24888 9.50065C2.24888 10.0975 2.48597 10.6699 2.908 11.0919C3.33002 11.5139 3.90241 11.751 4.49925 11.751C5.09608 11.751 5.66847 11.5139 6.0905 11.0919L6.46175 10.7207C6.5314 10.6509 6.61412 10.5956 6.70517 10.5579C6.79622 10.5201 6.89381 10.5007 6.99237 10.5007C7.09094 10.5007 7.18853 10.5201 7.27958 10.5579C7.37063 10.5956 7.45334 10.6509 7.523 10.7207ZM12.153 1.84565C11.4489 1.14325 10.495 0.748779 9.5005 0.748779C8.50598 0.748779 7.55206 1.14325 6.848 1.84565L6.47675 2.2169C6.33585 2.3578 6.2567 2.54889 6.2567 2.74815C6.2567 2.94741 6.33585 3.13851 6.47675 3.2794C6.61764 3.4203 6.80874 3.49945 7.008 3.49945C7.20726 3.49945 7.39835 3.4203 7.53925 3.2794L7.9105 2.90815C8.33252 2.48613 8.90491 2.24903 9.50175 2.24903C10.0986 2.24903 10.671 2.48613 11.093 2.90815C11.515 3.33018 11.7521 3.90257 11.7521 4.4994C11.7521 5.09624 11.515 5.66863 11.093 6.09065L9.58612 7.59815C9.18015 8.00388 8.63447 8.23912 8.06075 8.25574C7.48703 8.27235 6.92865 8.06908 6.49987 7.68753C6.426 7.62187 6.33993 7.5714 6.24655 7.539C6.15318 7.50661 6.05434 7.49292 5.95568 7.49873C5.85702 7.50453 5.76046 7.52971 5.67153 7.57283C5.5826 7.61595 5.50303 7.67616 5.43737 7.75003C5.37171 7.8239 5.32124 7.90997 5.28885 8.00335C5.25646 8.09672 5.24277 8.19556 5.24857 8.29422C5.25438 8.39288 5.27956 8.48944 5.32267 8.57837C5.36579 8.6673 5.426 8.74687 5.49987 8.81253C6.21486 9.44807 7.14571 9.78634 8.10191 9.75811C9.05811 9.72987 9.96738 9.33727 10.6436 8.66065L12.1511 7.15378C12.8543 6.44989 13.2495 5.49571 13.2499 4.50073C13.2502 3.50575 12.8557 2.55129 12.153 1.8469V1.84565Z" /></svg>`;
const ARROW_ICON = `<svg class="m-custom-select__arrow" width="1.4rem" height="0.9rem" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 8L7 2L1 8" stroke="#633CFF" stroke-width="2" /></svg>`;
const SOCIAL_ACCOUNTS = [
	{ name: 'github', icon: GITHUB_ICON },
	{ name: 'frontend-mentor', icon: FRONTEND_MENTOR_ICON },
	{ name: 'twitter', icon: TWITTER_ICON },
	{ name: 'linkedin', icon: LINKEDIN_ICON },
	{ name: 'youtube', icon: YOUTUBE_ICON },
	{ name: 'facebook', icon: FACEBOOK_ICON },
	{ name: 'twitch', icon: TWITCH_ICON },
	{ name: 'devto', icon: DEVTO_ICON },
	{ name: 'codewars', icon: CODEWARS_ICON },
	{ name: 'codepen', icon: CODEPEN_ICON },
	{ name: 'freecodecamp', icon: FREECODECAMP_ICON },
	{ name: 'gitlab', icon: GITLAB_ICON },
	{ name: 'hashnode', icon: HASHNODE_ICON },
	{ name: 'stack-overflow', icon: STACK_OVERFLOW_ICON }
];

const SOCIAL_ACCOUNTS_HTML = SOCIAL_ACCOUNTS.map(({ name, icon }) => {
	return `
			<li role="option" class="m-custom-select__list">
				<input type="radio" class="is-sr-only" id="${name}" name="social-account"/>
				<label for="${name}" class="m-custom-select__label">
					${icon}
					<span>${name.split('-').join(' ')}</span>
				</label>
			</li>
		`;
});

class CustomSelect extends HTMLElement implements WebComponent {
	public shadow: ShadowRoot;
	public constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
	}

	public connectedCallback(): void {
		this.#render();
		this.#addEventListeners();
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const SELECT_CONTAINER = document.createElement('div');

		SELECT_CONTAINER.className = 'm-custom-select';
		SELECT_CONTAINER.id = 'custom-select-container';
		SELECT_CONTAINER.innerHTML = /* html */ `
			<button
				class="m-custom-select__select-button"
				id="custom-select__select-button"
				role="combobox"
				aria-labelledby="select button"
				aria-haspopup="listbox"
				aria-expanded="false"
				aria-controls="select-dropdown"
			>
				<div
					class="m-custom-select__selected-value"
					id="custom-select__selected-value"
				>
					${LINK_ICON}
					<span>Open this select menu</span>
				</div>
				${ARROW_ICON}
			</button>
			<ul
				class="m-custom-select__select-dropdown"
				role="listbox"
				id="custom-select__select-dropdown"
			>
				${SOCIAL_ACCOUNTS_HTML.join('')}
			</ul>
		`;
		TEMPLATE.content.append(SELECT_CONTAINER.cloneNode(true));

		return TEMPLATE.content.cloneNode(true);
	};

	#getStyles = (): void => {
		const BASE_SHEET = new CSSStyleSheet();
		const COMPONENT_SHEET = new CSSStyleSheet();

		BASE_SHEET.replaceSync(BASE_CSS);
		COMPONENT_SHEET.replaceSync(CSS);
		this.shadow.adoptedStyleSheets = [BASE_SHEET, COMPONENT_SHEET];
	};

	#render = (): void => {
		this.shadowRoot?.append(this.#getTemplate());
		this.#getStyles();
	};

	#addEventListeners = () => {
		// Nodes
		const CUSTOM_SELECT_CONTAINER = this.shadowRoot?.querySelector(
			'#custom-select-container'
		) as HTMLDivElement;
		const SELECT_BUTTON = this.shadowRoot?.querySelector(
			'#custom-select__select-button'
		) as HTMLButtonElement;
		const SELECTED_VALUE = this.shadowRoot?.querySelector(
			'#custom-select__selected-value'
		) as HTMLSpanElement;
		const DROPDOWN_CONTAINER = this.shadowRoot?.querySelector(
			'#custom-select__select-dropdown'
		) as HTMLUListElement;

		DROPDOWN_CONTAINER.addEventListener('click', (event) => {
			const PARENT = this.#handleListSelection(event);

			if (!PARENT) return;

			if (
				event.type === 'click' &&
				event.clientX !== 0 &&
				event.clientY !== 0
			) {
				SELECTED_VALUE.innerHTML = PARENT.children[1].innerHTML;
				CUSTOM_SELECT_CONTAINER.classList.remove('active');
			}
		});

		DROPDOWN_CONTAINER.addEventListener('keyup', (event) => {
			const PARENT = this.#handleListSelection(event);

			if (!PARENT) return;

			if (event.key === 'Enter') {
				SELECTED_VALUE.innerHTML = PARENT.children[1].innerHTML;
				CUSTOM_SELECT_CONTAINER.classList.remove('active');
			}
		});

		// Add a click event to select button
		SELECT_BUTTON.addEventListener('click', () => {
			// Add/remove active class on the container element
			CUSTOM_SELECT_CONTAINER.classList.toggle('active');

			// Update the aria-expanded attribute based on the current state
			const IS_EXPANDED =
				SELECT_BUTTON.getAttribute('aria-expanded') === 'true';

			SELECT_BUTTON.setAttribute('aria-expanded', String(!IS_EXPANDED));
		});

		globalThis.addEventListener('click', (event) => {
			const TARGET = event.target as Node;

			if (
				!CUSTOM_SELECT_CONTAINER.contains(TARGET) &&
				TARGET.nodeName !== 'CUSTOM-SELECT'
			) {
				CUSTOM_SELECT_CONTAINER.classList.remove('active');
			}
		});
	};

	#handleListSelection = (event: Event) => {
		if (!event.target) return;

		const TARGET = event.target as HTMLElement;
		const PARENT = TARGET.parentElement;

		if (!PARENT) return;

		const IS_LIST = PARENT.nodeName === 'LI';
		const IS_LABEL = TARGET.nodeName === 'LABEL';

		if (!IS_LIST || IS_LABEL) return;

		return PARENT;
	};
}

customElements.define('custom-select', CustomSelect);
