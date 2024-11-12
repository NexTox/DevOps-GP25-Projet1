import { Main } from "../src/app.js";

describe('Berlin Clock - Single Minutes Row', () => {
    it('should light up the first lamp for 1 minute', () => {
        const main = new Main();
      expect(main.getSingleMinutesLine("00:00:00")).toBe("OOOO");
    });
    it('should light up the first lamp for 1 minute', () => {
        const main = new Main();
        expect(main.getSingleMinutesLine("00:01:00")).toBe("YOOO");
      });
    
  });
