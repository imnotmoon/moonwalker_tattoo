class Observer {
	_state: { [key: string]: any } = {};
	_subscribers: Array<Function> = [];

	constructor(initialValue: object) {
		this._state = { ...initialValue };
	}

	get() {
		return this._state;
	}

	update(newState: object): void {
		this._state = { ...newState };
		this._notify();
	}

	updateWithKey(key: string, newState: object): void {
		this._state[key] = newState;
		this._notify();
	}

	_notify() {
		const state = this._state;
		this._subscribers.forEach((callback: Function) => {
			callback(state);
		});
	}

	subscribe(callback: Function) {
		this._subscribers.push(callback);
	}
}

export const modalObserver = new Observer({ show: false });
export const toastObserver = new Observer({ show: false });
export const alertObserver = new Observer({ show: false });
