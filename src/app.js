
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

    getMinutes(time) {
        return parseInt(time.split(':')[1], 10);
    }
    getSingleHoursLine(time) {
        const hours = parseInt(time.split(':')[0], 10);
        const onLamps = hours % 5;
        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    getFiveHoursLine(time) {
        const hours = parseInt(time.split(':')[0], 10);
        const onLamps = Math.floor(hours / 5);
        return "R".repeat(onLamps) + "O".repeat(4 - onLamps);
    }
    getSecondsLamp(time) {
        const seconds = parseInt(time.split(':')[2], 10);
        return seconds % 2 === 0 ? "R" : "O";
      }

      getBerlinClock(time) {
        return {
            secondsLamp: getSecondsLamp(time),
            fiveHoursLine: getFiveHoursLine(time),
            singleHoursLine: getSingleHoursLine(time),
            fiveMinutesLine: getFiveMinutesLine(time),
            singleMinutesLine: getSingleMinutesLine(time)
          };
      }
}

