import { MemoryRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import NotFoundTile from "./NotFoundTile";

describe('test 404 Error UI element display', () => {
    test('element has only 1 link to homepage: ', () => {
        const renderedDOM = TestRenderer.create(<MemoryRouter><NotFoundTile /></MemoryRouter>);
        const testInstance = renderedDOM.root;
        expect(testInstance.findByProps({href: "/"}).props.href).toBe("/");
        renderedDOM.unmount();
    });
})