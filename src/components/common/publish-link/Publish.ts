import ARROW_RIGHT_ICON from '@icons/arrow-right.svg?raw';
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

type Attributes = 'title' | 'href';

const SOCIAL_ACCOUNTS = {
	github: { name: 'GitHub', icon: GITHUB_ICON },
	'frontend-mentor': { name: 'Frontend Mentor', icon: FRONTEND_MENTOR_ICON },
	twitter: { name: 'Twitter', icon: TWITTER_ICON },
	linkedin: { name: 'LinkedIn', icon: LINKEDIN_ICON },
	youtube: { name: 'YouTube', icon: YOUTUBE_ICON },
	facebook: { name: 'Facebook', icon: FACEBOOK_ICON },
	twitch: { name: 'Twitch', icon: TWITCH_ICON },
	devto: { name: 'Dev.to', icon: DEVTO_ICON },
	codewars: { name: 'Codewars', icon: CODEWARS_ICON },
	codepen: { name: 'Codepen', icon: CODEPEN_ICON },
	freecodecamp: { name: 'FreeCodeCamp', icon: FREECODECAMP_ICON },
	gitlab: { name: 'GitLab', icon: GITLAB_ICON },
	hashnode: { name: 'Hashnode', icon: HASHNODE_ICON },
	'stack-overflow': { name: 'Stack Overflow', icon: STACK_OVERFLOW_ICON }
};

class PublishLink extends HTMLElement implements WebComponent {
	public href: string | null = null;
	public constructor() {
		super();
		this.attachShadow({ mode: 'open' });
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
		this.#update();
	}

	#getTemplate = (): Node => {
		const TEMPLATE = document.createElement('template');
		const LINK_CONTAINER = document.createElement('a');
		const { title, href } = this;
		const SOCIAL_MEDIA =
			SOCIAL_ACCOUNTS[title as keyof typeof SOCIAL_ACCOUNTS];

		LINK_CONTAINER.innerHTML = /* html */ `
			<div class="publish-link__icon-name">
				${SOCIAL_MEDIA.icon}
				${SOCIAL_MEDIA.name}
			</div>
			${ARROW_RIGHT_ICON}
		`;
		LINK_CONTAINER.className = `publish-link publish-link--${title}`;
		LINK_CONTAINER.href = `${href ? href : ''}`;
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

	#clean = (): void => {
		const HAS_ELEMENTS = this.shadowRoot?.hasChildNodes();

		if (!HAS_ELEMENTS) return;

		this.shadowRoot?.replaceChildren();
	};

	#update = (): void => {
		this.#clean();
		this.#render();
	};

	public static get observedAttributes(): Attributes[] {
		return ['title', 'href'];
	}
}

customElements.define('publish-link', PublishLink);
