import EYE_ICON from '@icons/eye.svg?raw';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

class PreviewLink extends HTMLElement implements WebComponent {
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

		LINK_CONTAINER.innerHTML = /* html */ `
			${EYE_ICON}
			<span class="preview__title">Preview</span>
		`;

		LINK_CONTAINER.className = `preview a-button a-button-secondary`;
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

customElements.define('preview-link', PreviewLink);
