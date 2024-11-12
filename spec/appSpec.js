import { Main } from "../src/app.js";
const main = new Main();


describe('Berlin Clock - Single Minutes Row', () => {
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
