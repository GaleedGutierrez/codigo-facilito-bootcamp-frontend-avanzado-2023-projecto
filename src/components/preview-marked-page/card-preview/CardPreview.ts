import BASE_CSS from '@/assets/styles/index.scss?inline';
import { WebComponent } from '@/types/WebComponents';
import '@/components/common/publish-link/Publish';

import CSS from './styles.scss?inline';

class CardPreview extends HTMLElement implements WebComponent {

	public constructor() {
		super();
		this.attachShadow({ mode: 'open', delegatesFocus: true });
	}

	public connectedCallback(): void {
		this.#render();
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const MAIN_CONTAINER = document.createElement('main');

		MAIN_CONTAINER.innerHTML = /* html */ `
			<img class="m-card-preview__image" src="https://place-hold.it/104x104" alt="" />
			<h2 class="m-card-preview__name">Ben Wright</h2>
			<p class="m-card-preview__email">ben@example.com</p>
			<div class="o-publish-link-wrapper">
				<publish-link
					title="github"
					href="https://github.com/GaleedGutierrez/codigo-facilito-bootcamp-frontend-avanzado-2023-proyecto"
				></publish-link>
			</div>
			<div class="o-publish-link-wrapper">
				<publish-link title="youtube" href=""></publish-link>
			</div>
			<publish-link title="linkedin" href=""></publish-link>
			<div class="o-shadow" />
		`;

		MAIN_CONTAINER.className = 'm-card-preview';

		TEMPLATE.content.append(MAIN_CONTAINER.cloneNode(true));
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

customElements.define('card-preview', CardPreview);
