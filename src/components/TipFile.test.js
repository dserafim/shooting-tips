import TipTile from "./TipTile";
import { render, screen, act} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe('test TipTile component: ', () => {
    const mockTips = [
        {
            isVisible:true,
            tip: "first test message",
        },
        {
            isVisible:true,
            tip: "second test message",
        }
    ];
    test('component is render visible with tip: ', ()=> {
        render(<TipTile isVisible={mockTips[0].isVisible} tip={mockTips[0].tip} getNewTip={() => {}}></TipTile>);
        expect(screen.getByTestId('tip-text-container').innerHTML).toEqual(mockTips[0].tip);
        expect(screen.getByTestId('parent-tile')).not.toHaveClass("tip-tile__hidden");

    });

    test('component hide tip: ', () => {
        render(<TipTile isVisible={false} tip={mockTips[0].tip} getNewTip={() => {}}></TipTile>);
        expect(screen.getByTestId('tip-text-container').innerHTML).toEqual(mockTips[0].tip);
        expect(screen.getByTestId('parent-tile')).toHaveClass("tip-tile__hidden");
    });

    test('check is callbackHandler call normally: ', ()=> {

        function fakeTakeNextTip() {
            rerender(<TipTile isVisible={mockTips[1].isVisible} tip={mockTips[1].tip} getNewTip={fakeTakeNextTip}></TipTile>);
        }

        const {rerender} =render(<TipTile isVisible={true} tip={mockTips[0].tip} getNewTip={fakeTakeNextTip}></TipTile>);
        expect(screen.getByTestId('tip-text-container').innerHTML).toEqual(mockTips[0].tip);
        act(() => {
            userEvent.click(screen.getByTestId('refresh-button'));
        })
        expect(screen.getByTestId('tip-text-container').innerHTML).toEqual(mockTips[1].tip);
    });
});