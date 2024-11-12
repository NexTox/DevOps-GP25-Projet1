
export class Main{
    getSingleMinutesLine(time){
        const minutes = parseInt(time.split(':')[1], 10);
        let row = "OOOO";
        if (minutes % 5 >= 1) {
          row = "YOOO";
        }
        return row;
    }
}