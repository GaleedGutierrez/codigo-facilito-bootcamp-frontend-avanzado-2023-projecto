import EMAIL_ICON from '@icons/envelope-simple.svg?raw';
import LINK_ICON from '@icons/link.svg?raw';
import LOCK_ICON from '@icons/lock-key.svg?raw';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

type Attributes =
	| 'type'
	| 'title'
	| 'placeholder'
	| 'error-message'
	| 'id'
	| 'name'
	| 'required'
	| 'autocomplete'
	| 'minlength';

const ICONS = {
	url: LINK_ICON,
	email: EMAIL_ICON,
	password: LOCK_ICON,
	text: ''
};

export class TextField extends HTMLElement implements WebComponent {
	public shadow: ShadowRoot;
	public type: string | null = null;
	public placeholder: string | null = null;
	public autocomplete: string | null = null;
	public name: string | null = null;
	public required: string | null = null;
	public 'error-message': string | null = null;
	public input: HTMLInputElement | null = null;
	public minlength: string | null = null;
	#internals: ElementInternals;
	static formAssociated = true;

	public constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
		this.#internals = this.attachInternals();
	}

	public connectedCallback(): void {
		this.#render();

		this.input = this.shadowRoot?.querySelector(
			'input'
		) as HTMLInputElement;
		this.#internals.setValidity(
			this.input.validity,
			this.input.validationMessage,
			this.input
		);
	}

	public attributeChangedCallback(
		attribute: Attributes,
		oldValue: string,
		newValue: string
	): void {
		if (oldValue === newValue) return;

		this[attribute] = newValue;
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const INPUT_CONTAINER = document.createElement('div');
		const {
			title,
			type,
			placeholder,
			'error-message': errorMessage,
			id,
			name,
			autocomplete
		} = this;
		const REQUIRED_ATTRIBUTE = this.hasAttribute('required')
			? 'required'
			: '';

		INPUT_CONTAINER.innerHTML = /* html */ `
			<label for="${id}">
				<p class="m-text-field__title">${title}</p>
				<input
					${REQUIRED_ATTRIBUTE}
					type="${type}"
					name="${name}"
					id="${id}"
					class="m-text-field__input"
					placeholder="${placeholder}"
					autocomplete="${autocomplete}"
					minlength="${this.minlength ? this.minlength : 0}"
				/>
				${ICONS[type as keyof typeof ICONS]}
				<p class="m-text-field__error-message">
					${errorMessage}
				</p>
			</label>
		`;

		INPUT_CONTAINER.className =
			'o-position-relative m-text-field__container';
		TEMPLATE.content.append(INPUT_CONTAINER.cloneNode(true));

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

	public static get observedAttributes(): Attributes[] {
		return [
			'type',
			'title',
			'placeholder',
			'error-message',
			'id',
			'name',
			'required',
			'autocomplete',
			'minlength'
		];
	}
}

customElements.define('text-field', TextField);
