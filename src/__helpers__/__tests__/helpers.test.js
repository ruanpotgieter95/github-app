import { pieData, formatDate } from '__helpers__';

describe('pieData', () => {
    
    it('returns if empty', () => {
        const result = pieData();

        expect(result).toEqual({
            total: 0,
            openTotal: 0,
            closeTotal: 0
        });
    });

    it('returns total of 5 if list length is 5', () => {
        const data = ['1','2','3','4','5'];
        const result = pieData(data);

        expect(result).toEqual({
            total: 5,
            openTotal: 0,
            closeTotal: 0
        });
    });

    it('returns total of 5 and closed total of 5', () => {
        const data = [
            {state: 'closed'},
            {state: 'closed'},
            {state: 'closed'},
            {state: 'closed'},
            {state: 'closed'}
        ];
        const result = pieData(data);

        expect(result).toEqual({
            total: 5,
            openTotal: 0,
            closeTotal: 5
        });
    });

    it('returns total of 5 and open total of 5', () => {
        const data = [
            {state: 'open'},
            {state: 'open'},
            {state: 'open'},
            {state: 'open'},
            {state: 'open'}
        ];
        const result = pieData(data);

        expect(result).toEqual({
            total: 5,
            openTotal: 5,
            closeTotal: 0
        });
    });

    it('returns total of 5, open total of 3 and closed total of 2', () => {
        const data = [
            {state: 'open'},
            {state: 'closed'},
            {state: 'open'},
            {state: 'closed'},
            {state: 'open'}
        ];
        const result = pieData(data);

        expect(result).toEqual({
            total: 5,
            openTotal: 3,
            closeTotal: 2
        });
    });
})

describe('formatDate', () => {
    
    it('returns "01 Jan 2020 10:30" when input is 2020-01-01T10:30:01.333+02:00 ', () => {
        const result = formatDate("2020-01-01T10:30:01.333+02:00");

        expect(result).toEqual("01 Jan 2020 10:30");
    });
})