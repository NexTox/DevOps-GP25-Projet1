import { Main } from "../src/app.js";

describe('Berlin Clock - Single Minutes Row', () => {
    const main = new Main();
    it('should light up the first lamp for 0 minute', () => {
      expect(main.getSingleMinutesLine("00:00:00")).toBe("OOOO");
    });
    it('should light up the first lamp for 1 minute', () => {
        expect(main.getSingleMinutesLine("00:01:00")).toBe("YOOO");
      });
      it('should light up the first lamp for 2 minute', () => {
        expect(main.getSingleMinutesLine("00:02:00")).toBe("YYOO");
      });
    
  });
