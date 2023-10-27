import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

type Attributes = 'id';
const IMG_ICON =
	'<svg width="3.4rem" height="2.8rem" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M30.75 0.25H3.25C2.58696 0.25 1.95107 0.513392 1.48223 0.982233C1.01339 1.45107 0.75 2.08696 0.75 2.75V25.25C0.75 25.913 1.01339 26.5489 1.48223 27.0178C1.95107 27.4866 2.58696 27.75 3.25 27.75H30.75C31.413 27.75 32.0489 27.4866 32.5178 27.0178C32.9866 26.5489 33.25 25.913 33.25 25.25V2.75C33.25 2.08696 32.9866 1.45107 32.5178 0.982233C32.0489 0.513392 31.413 0.25 30.75 0.25ZM30.75 2.75V18.8047L26.6766 14.7328C26.4444 14.5006 26.1688 14.3164 25.8654 14.1907C25.5621 14.0651 25.2369 14.0004 24.9086 14.0004C24.5802 14.0004 24.2551 14.0651 23.9518 14.1907C23.6484 14.3164 23.3728 14.5006 23.1406 14.7328L20.0156 17.8578L13.1406 10.9828C12.6718 10.5143 12.0362 10.2512 11.3734 10.2512C10.7107 10.2512 10.075 10.5143 9.60625 10.9828L3.25 17.3391V2.75H30.75ZM3.25 20.875L11.375 12.75L23.875 25.25H3.25V20.875ZM30.75 25.25H27.4109L21.7859 19.625L24.9109 16.5L30.75 22.3406V25.25ZM19.5 9.625C19.5 9.25416 19.61 8.89165 19.816 8.58331C20.022 8.27496 20.3149 8.03464 20.6575 7.89273C21.0001 7.75081 21.3771 7.71368 21.7408 7.78603C22.1045 7.85837 22.4386 8.03695 22.7008 8.29917C22.963 8.5614 23.1416 8.89549 23.214 9.2592C23.2863 9.62292 23.2492 9.99992 23.1073 10.3425C22.9654 10.6851 22.725 10.978 22.4167 11.184C22.1084 11.39 21.7458 11.5 21.375 11.5C20.8777 11.5 20.4008 11.3025 20.0492 10.9508C19.6975 10.5992 19.5 10.1223 19.5 9.625Z" fill="currentcolor" /></svg>';

export class UploadImg extends HTMLElement implements WebComponent {
	public shadow: ShadowRoot;
	public input: HTMLInputElement | null = null;
	public container: HTMLDivElement | null = null;
	public imgBox: HTMLDivElement | null = null;
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
		this.container = this.shadowRoot?.querySelector(
			'div'
		) as HTMLDivElement;
		this.imgBox = this.shadowRoot?.querySelector(
			'#img-box'
		) as HTMLDivElement;
		this.#internals.setValidity(
			this.input.validity,
			this.input.validationMessage,
			this.input
		);

		this.input.addEventListener('change', (event) => {
			if (!event.target || !this.imgBox) return;

			const xd = event.target as HTMLInputElement;

			if (!xd.files) return;

			console.log(xd.files[0]);

			this.imgBox.style.backgroundImage = `
			linear-gradient(
				0deg,
				oklch(0% 0 0deg / 50%) 0%,
				oklch(0% 0 0deg / 50%) 100%
			),
			url("${URL.createObjectURL(xd.files[0])}")`;
			this.imgBox.style.color = 'var(--color-white)';
		});
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
		const { id } = this;

		INPUT_CONTAINER.innerHTML = /* html */ `
			<label for="${id}">
				<p>Profile picture</p>
				<div class="custom-file-input-container">
					<input class="custom-file-input" type="file" id="${id}" accept="image/png, image/jpeg" />
					<div class="custom-file-input__box-img" id="img-box">
						${IMG_ICON}
						<span>+ Upload Image</span>
					</div>
					<span class="custom-file-input__format">Image must be below 1024x1024px. Use PNG or JPG format.</span>
				</div>
			</label>
		`;

		INPUT_CONTAINER.className = `custom-input-container`;
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
		return ['id'];
	}
}

customElements.define('upload-img', UploadImg);
