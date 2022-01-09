import State from './State';

export default class Component {
	_target: () => HTMLElement | null;
	_state: State | undefined;
	_props: any;
	children = [];

	constructor(target: string, props: any) {
		this._target = () => document.querySelector(target);
		this._props = props;
	}

	render(state?: any, props?: any) {
		this._target()?.insertAdjacentHTML('beforeend', this.template(this._state?.getState(), this._props));
		this.setEvents();
		this.initChildren();
	}

	initChildren() {}

	template(state?: any, props?: any): string {
		return ``;
	}

	setEvents() {}

	addEvent(type: string, selector: string, cb: (e?: Event) => void) {
		if (!this._target()?.querySelector(selector)) return;
		if (selector.length > 0) this._target()?.querySelector(selector)?.addEventListener(type, cb);
		else this._target()?.addEventListener(type, cb);
	}

	setState(newState: object) {
		if (!this._state) return;
		this._state.setState(newState);
		this.render(this._state.getState(), this._props);
	}
}
