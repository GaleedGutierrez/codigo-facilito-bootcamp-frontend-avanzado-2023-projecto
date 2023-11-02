/* eslint-disable import/no-unresolved */
import '@/components/preview-marked-page/card-preview/CardPreview';
import '@views/preview-marked/card-preview/CardPreview';

import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';

import CSS from './styles.scss?inline';

class LayoutPage extends HTMLElement implements WebComponent {
	public shadow: ShadowRoot;

	public constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });
	}

	public connectedCallback(): void {
		this.#render();
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const DIV_CONTAINER = document.createElement('div');

		DIV_CONTAINER.innerHTML = /* html */ `
			<div class="o-banner-top"></div>
			<card-preview></card-preview>
		`;

		DIV_CONTAINER.className = 'o-layout-page';

		TEMPLATE.content.append(DIV_CONTAINER.cloneNode(true));

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
}

customElements.define('layout-page', LayoutPage);
