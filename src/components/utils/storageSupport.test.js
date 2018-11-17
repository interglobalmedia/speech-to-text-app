import {localStorageSupport} from './storageSupport';

describe('localStorageSupport', () => {
    it('the Storage object should not return undefined', () => {
        expect(typeof 'Storage').not.toBe('undefined');
    })
})
