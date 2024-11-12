
export class Main{
    getSingleMinutesLine(time){
        const minutes = parseInt(time.split(':')[1], 10);
        let row = "OOOO";
        if (minutes % 5 >= 1) row = "YOOO";
        if (minutes % 5 >= 2) row = "YYOO";
        if (minutes % 5 >= 3) row = "YYYO";
        if (minutes % 5 >= 4) row = "YYYY";
        return row;
    }
}