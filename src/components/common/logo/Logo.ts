import LINK_CIRCLE_ICON from '@icons/link-circle.svg?raw';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

class CustomLoco extends HTMLElement implements WebComponent {
	public 'is-full': string | null = null;
	public constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	public connectedCallback(): void {
		this.#render();
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const LINK_CONTAINER = document.createElement('a');
		const IS_FULL = this.hasAttribute('is-full');

		LINK_CONTAINER.innerHTML = /* html */ `
			${LINK_CIRCLE_ICON}
			<span class="logo__text">devlinks</span>
		`;

		if (IS_FULL) LINK_CONTAINER.setAttribute('is-full', '');

		LINK_CONTAINER.className = `logo`;
		// Queda pendiente agregar el link de href
		LINK_CONTAINER.href = ``;
		TEMPLATE.content.append(LINK_CONTAINER.cloneNode(true));

		return TEMPLATE.content.cloneNode(true);
	};

	#getStyles = (): HTMLStyleElement => {
		const STYLES = document.createElement('style');

		STYLES.innerHTML = `
			${BASE_CSS}
			${CSS}
		`;

		return STYLES;
	};

	#render = (): void => {
		const { shadowRoot } = this;

		if (!shadowRoot) return;

		const getTemplate = this.#getTemplate;
		const getStyles = this.#getStyles;

		shadowRoot.append(getTemplate(), getStyles());
	};
}

customElements.define('custom-logo', CustomLoco);
