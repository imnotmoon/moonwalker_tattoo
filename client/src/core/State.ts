export default class State {
	_state: { [key: string]: any } = {};

	constructor(initialState: object) {
		this._state = initialState;
	}

	setState(newState: object) {
		this._state = { ...this._state, ...newState };
	}

	getState() {
		return this._state;
	}

	get(key: string) {
		return this._state[key];
	}
}
