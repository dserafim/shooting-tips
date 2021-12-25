import { getTipById, isTipIdInList, fetchTestItem, fetchTipsResponse } from "./Tip";

describe('check Tips module: ', () => {
    const testTipsList = [
        {id:"111", tip : "correct tip"},
        {id:"222", tip : "some new"},
        {id:"333", tip : "Lorem ipsum"},
        {id:"444", tip : "check it"},
    ];
    let tipObject;
    test('tip found: ', () => {
        tipObject = getTipById(testTipsList, "111");
        expect(tipObject).toEqual({id:"111", tip : "correct tip"});
        tipObject = getTipById(testTipsList, "333");
        expect(tipObject).toEqual({id:"333", tip : "Lorem ipsum"});
    });
    test('tip not found: ', () => {
        tipObject = getTipById(testTipsList, "5555");
        expect(tipObject).toEqual(null);
    });

    test('isTipIdInList works fine: ', ()=> {
        expect(isTipIdInList(testTipsList, "111")).toBe(true);
        expect(isTipIdInList(testTipsList, "failed")).toBe(false);
    });
});
describe('check Tips fetching functions: ', () => {
    test('fetchTestItem: ', () => {
        const mockDataItem = {
            id : "testId",
            data: () => {return {tip: "mock tip"}}
        }
        expect(fetchTestItem(mockDataItem)).toEqual({id: "testId", tip: "mock tip"});
    })
    test('getchTipsResponse: ', () => {
        const actualValues = [
            {
                id: "test1",
                tip: "first mock tip"
            },
            {
                id: "test2",
                tip: "second mock tip"
            },
        ];
        const mockResponse = [
            {
                id : actualValues[0].id,
                data: () => {return {tip: actualValues[0].tip}}
            },
            {
                id : actualValues[1].id,
                data: () => {return {tip: actualValues[1].tip}}
            },
        ];
        expect(fetchTipsResponse(mockResponse)).toEqual(actualValues);
    });

})