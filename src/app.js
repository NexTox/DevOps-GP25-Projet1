
export class Main{
    getSingleMinutesLine(time){
        const minutes = parseInt(time.split(':')[1], 10);
        const onLamps = minutes % 5;
        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    getFiveMinutesRow(time) {
        return "OOOOOOOOOOO";
      }
}

