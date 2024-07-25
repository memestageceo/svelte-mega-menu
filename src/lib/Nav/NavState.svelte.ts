import { getContext, setContext } from 'svelte';

function createState<T>(val: T) {
	let value = $state(val);

	return {
		get value() {
			return value;
		},
		set value(val) {
			value = val;
		}
	};
}

export function setNavContext<T>(key: string, value: T): void {
	const cxt = createState<T>(value);
	setContext(key, cxt);
}

export function getNavContext<T>(key: string) {
	return getContext<T>(key);
}
