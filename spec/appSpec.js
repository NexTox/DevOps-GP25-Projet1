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
        it('should light up the first two lamp for 2 minute', () => {
            expect(main.getSingleMinutesLine("00:02:00")).toBe("YYOO");
        });
        it('should light up the first three lamp for 3 minute', () => {
            expect(main.getSingleMinutesLine("00:03:00")).toBe("YYYO");
        });
        it('should light up the first four lamp for 4 minute', () => {
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
        it('should light up the first two lamps for 2 hours', () => {
            expect(main.getSingleHoursLine("02:00:00")).toBe("RROO");
        });
        it('should light up the first three lamps for 3 hours', () => {
            expect(main.getSingleHoursLine("03:00:00")).toBe("RRRO");
        });
        it('should light up the first four lamps for 4 hours', () => {
            expect(main.getSingleHoursLine("04:00:00")).toBe("RRRR");
        });   
    });
    describe('Berlin Clock - Five Hours Line', () => {
        it('should light up "OOOO" for 0 hours', () => {
          expect(main.getFiveHoursLine("00:00:00")).toBe("OOOO");
        });
        it('should light up the first lamp for 5 hours', () => {
            expect(main.getFiveHoursLine("05:00:00")).toBe("ROOO");
        });
        it('should light up the first two lamps for 10 hours', () => {
            expect(main.getFiveHoursLine("10:00:00")).toBe("RROO");
        });
        it('should light up the first three lamps for 15 hours', () => {
            expect(main.getFiveHoursLine("15:00:00")).toBe("RRRO");
        });
        it('should light up all four lamps for 20 hours', () => {
            expect(main.getFiveHoursLine("20:00:00")).toBe("RRRR");
        });
    });
    describe('Seconds Lamp', () => {
        it('should light up the seconds lamp (R) for even seconds', () => {
          expect(main.getSecondsLamp("00:00:00")).toBe("R");
        });
        it('should light up the seconds lamp (O) for odd seconds', () => {
            expect(main.getSecondsLamp("00:00:01")).toBe("O");
        });
    });
    describe('Full Clock', () => {
        it('should return the correct Berlin clock representation for 00:00:00', () => {
          expect(main.getBerlinClock("00:00:00")).toEqual({
            secondsLamp: "R",
            fiveHoursLine: "OOOO",
            singleHoursLine: "OOOO",
            fiveMinutesLine: "OOOOOOOOOOO",
            singleMinutesLine: "OOOO"
            });
        });
        it('should return the correct Berlin clock representation for 13:17:01', () => {
            expect(main.getBerlinClock("13:17:01")).toEqual({
            secondsLamp: "O",
            fiveHoursLine: "RROO",
            singleHoursLine: "RRRO",
            fiveMinutesLine: "YYROOOOOOOO",
            singleMinutesLine: "YYOO"
            });
        });
        it('should return the correct Berlin clock representation for 23:59:59', () => {
            expect(main.getBerlinClock("23:59:59")).toEqual({
              secondsLamp: "O",
              fiveHoursLine: "RRRR",
              singleHoursLine: "RRRO",
              fiveMinutesLine: "YYRYYRYYRYY",
              singleMinutesLine: "YYYY"
            });
        });
    });
    main.displayBerlinClock("05:50:47");
    main.displayBerlinClock("21:35:17");
});

