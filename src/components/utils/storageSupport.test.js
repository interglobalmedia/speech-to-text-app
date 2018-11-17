import {localStorageSupport} from './storageSupport';

it('the Storage object should not return undefined', () => {
    expect(typeof 'Storage').not.toBe('undefined');
})