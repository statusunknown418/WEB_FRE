var count = 0;

function cc(card) {
    switch (card) {
        case 2:
            count++;
            console.log(count);
            break;
        case 3:
            count++;
            console.log(count);
            break;
        case 4:
            count++;
            console.log(count);
            break;
        case 5:
            count++;
            console.log(count);
            break;
        case 6:
            count++;
            console.log(count);
            break;
        default:
            console.log("change me");
            break;
    }
    var hold
    if (count>0) {
        hold = "Bet"
    } else {
        hold = "Hold"
    }
    console.log(hold);
}

cc(5);
