import { Main } from "../src/app.js";
const main = new Main();


describe('Berlin Clock ', () => {
    describe('Single Minutes Row', () => { 
        it('should light up the first lamp for 0 minute', () => {
        expect(main.getSingleMinutesLine("00:00:00")).toBe("OOOO");
        });
        it('should light up the first lamp for 1 minute', () => {
            expect(main.getSingleMinutesLine("00:01:00")).toBe("YOOO");
        });
        it('should light up the first lamp for 2 minute', () => {
            expect(main.getSingleMinutesLine("00:02:00")).toBe("YYOO");
        });
        it('should light up the first lamp for 3 minute', () => {
            expect(main.getSingleMinutesLine("00:03:00")).toBe("YYYO");
        });
        it('should light up the first lamp for 4 minute', () => {
            expect(main.getSingleMinutesLine("00:04:00")).toBe("YYYY");
        });
    });

    describe('Five Minutes Row', () => { 
        it('should light up "OOOOOOOOOOO" for 0 minutes', () => {
            expect(main.getFiveMinutesLine("00:00:00")).toBe("OOOOOOOOOOO");
        });
        it('should light up the first lamp for 5 minutes', () => {
        expect(main.getFiveMinutesLine("00:05:00")).toBe("YOOOOOOOOOO");
        });
        it('should light up the first three lamps with the third red for 15 minutes', () => {
        expect(main.getFiveMinutesLine("00:15:00")).toBe("YYROOOOOOOO");
        });
        it('should light up the first six lamps with the third and sixth red for 30 minutes', () => {
            expect(main.getFiveMinutesLine("00:30:00")).toBe("YYRYYROOOOO");
        });
        it('should light up all eleven lamps with the third, sixth, and ninth red for 55 minutes', () => {
            expect(main.getFiveMinutesLine("00:55:00")).toBe("YYRYYRYYRYY");
        });
    });
    describe('Single Hours Line', ()=>{
        it('should light up "OOOO" for 0 hours', () => {
            expect(main.getSingleHoursLine("00:00:00")).toBe("OOOO");
          });
        it('should light up the first lamp for 1 hour', () => {
            expect(main.getSingleHoursLine("01:00:00")).toBe("ROOO");
        });
        it('should light up the first three lamps for 2 hours', () => {
            expect(main.getSingleHoursLine("02:00:00")).toBe("RROO");
        });
    })
});
