export interface WebComponent {
	connectedCallback: () => void;
	attributeChangedCallback?: (
		attribute: Attributes,
		oldValue: string,
		newValue: string
	) => void;
	disconnectedCallback?: () => void;
	readonly observedAttributes?: Attributes[];
}
