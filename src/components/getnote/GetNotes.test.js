import { GetNotes } from './GetNotes';

it('should retrieve from localStorage', () => {
    const localStorageMock = {
        getItem: jest.fn()
    }
    const dateTime = 'note-' + new Date();
    const note = 'note';
    localStorageMock.getItem(dateTime, note)
    expect(localStorageMock.getItem).toBeCalledWith(dateTime, note)
})