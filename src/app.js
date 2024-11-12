
export class Main{
    getSingleMinutesLine(time){
        const minutes = parseInt(time.split(':')[1], 10);
        const onLamps = minutes % 5;
        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    getFiveMinutesLine(time) {
        const minutes = parseInt(time.split(':')[1], 10);
        const onLamps = Math.floor(minutes / 5);
        let row = "OOOOOOOOOOO";
        row = "Y".repeat(onLamps) + "O".repeat(11 - onLamps);
        return row;
      }
}

