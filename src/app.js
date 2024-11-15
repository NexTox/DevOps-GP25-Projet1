
export class Main{
    getSingleMinutesLine(time){
        const minutes = this.getMinutes(time);
        const onLamps = minutes % 5;
        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    getFiveMinutesLine(time) {
        const minutes = this.getMinutes(time);
        const onLamps = Math.floor(minutes / 5);
        let row = "OOOOOOOOOOO";
        row = Array.from({ length: onLamps }, (_, i) => (i % 3 === 2 ? "R" : "Y")).join("") + "O".repeat(11 - onLamps);
        return row;
    }

    getSingleHoursLine(time) {
        const hours = this.getHours(time);
        const onLamps = hours % 5;
        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    getFiveHoursLine(time) {
        const hours = this.getHours(time);
        const onLamps = Math.floor(hours / 5);
        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
    }
    
    getSecondsLamp(time) {
        const seconds = parseInt(time.split(':')[2], 10);
        return seconds % 2 === 0 ? "R" : "O";
    }

    getMinutes(time) {
      return parseInt(time.split(':')[1], 10);
    }

    getHours(time){
    return parseInt(time.split(':')[0], 10);
    }

    getBerlinClock(time) {
        return {
            secondsLamp: this.getSecondsLamp(time),
            fiveHoursLine: this.getFiveHoursLine(time),
            singleHoursLine: this.getSingleHoursLine(time),
            fiveMinutesLine: this.getFiveMinutesLine(time),
            singleMinutesLine: this.getSingleMinutesLine(time)
        };
    }

    displayBerlinClock(time) {
      const berlinClock = this.getBerlinClock(time);
      console.log(`
        Seconds Lamp:        ${berlinClock.secondsLamp}
        Five Hours Line:     ${berlinClock.fiveHoursLine}
        Single Hours Line:   ${berlinClock.singleHoursLine}
        Five Minutes Line:   ${berlinClock.fiveMinutesLine}
        Single Minutes Line: ${berlinClock.singleMinutesLine}
      `);
    } 
}

