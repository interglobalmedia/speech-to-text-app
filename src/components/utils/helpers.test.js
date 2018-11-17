import { clearAll, reset } from './helpers';

describe('clearAll', () => {
    it('should clear all from localStorage', () => {
        const localStorageMock = {
            removeItem: jest.fn()
        }
        const dateTime = 'note-' + new Date();
        const note = 'note';
        localStorageMock.removeItem(dateTime, note)
        expect(localStorageMock.removeItem).toBeCalledWith(dateTime, note)
    })
})

describe('reset', () => {
    it('should refresh the page', () => {
        const location = {
            reload: jest.fn()
        }
        location.reload(true);
        expect(location.reload).toBeCalledWith(true);
    })
})
