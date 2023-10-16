import LINK_ICON from '@icons/link.svg?raw';
import PROFILE_ICON from '@icons/user.svg?raw';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

const ICONS = {
	'Profile Details': PROFILE_ICON,
	Links: LINK_ICON
};

type Attributes = 'title' | 'href' | 'selected';
class TabLink extends HTMLElement implements WebComponent {
	public shadow: ShadowRoot;
	public href: string | null = null;
	public selected: string | null = null;

	public constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
	}

	public connectedCallback(): void {
		this.#render();
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
		const LINK_CONTAINER = document.createElement('a');
		const { title, href } = this;
		const IS_SELECTED = this.hasAttribute('selected');

		LINK_CONTAINER.innerHTML = /* html */ `
			${ICONS[title as keyof typeof ICONS]}
			<span class="m-tab__go-to">${title}</span>
		`;

		LINK_CONTAINER.className = `m-tab ${
			IS_SELECTED ? 'm-tab--selected' : ''
		}`;
		LINK_CONTAINER.href = href ? href : '#';
		TEMPLATE.content.append(LINK_CONTAINER.cloneNode(true));

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
		return ['title', 'href', 'selected'];
	}
}

customElements.define('tab-link', TabLink);
