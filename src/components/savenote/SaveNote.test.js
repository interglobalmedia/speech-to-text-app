import {SaveNote} from './SaveNote';

it('should save to localStorage', () => {
    const localStorageMock = {
       setItem: jest.fn()
    }
    const dateTime = 'note-' + new Date();
    const note = 'note';
    localStorageMock.setItem(dateTime, note)
    expect(localStorageMock.setItem).toBeCalledWith(dateTime, note)
});
