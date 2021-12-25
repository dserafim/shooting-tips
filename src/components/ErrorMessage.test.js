import ErrorMessage from "./ErrorMessage";
import TestRenderer from 'react-test-renderer';
describe('test Error message component', () => {
    const renderedDOM = TestRenderer.create(<ErrorMessage />);
    const testInstance = renderedDOM.root;
    test('if element dont get any message it should show default text: ', () => {
        expect(testInstance.findByProps({ className: 'error-message'}).children).toEqual(['Unhandled Error']);
    });
    test('check is that display error message properly: ', () => {
        const message = 'testing message';
        renderedDOM.update(<ErrorMessage message={message}></ErrorMessage>);
        expect(testInstance.findByProps({ className: 'error-message'}).children).toEqual([message]);
    });
})