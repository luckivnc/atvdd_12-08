let number = [5, 8, 6, 9, 3984];

if (number[0] >= number[1] && number[0] >= number[2] && number[0] >= number[3] && number[0] >= number[4]) {
    alert(number[0]);
} else if (number[1] >= number[0] && number[1] >= number[2] && number[1] >= number[3] && number[1] >= number[4]) {
    alert(number[1]);
} else if (number[2] >= number[0] && number[2] >= number[1] && number[2] >= number[3] && number[2] >= number[4]) {
    alert(number[2]);
} else if (number[3] >= number[0] && number[3] >= number[1] && number[3] >= number[2] && number[3] >= number[4]) {
    alert(number[3]);
} else if (number[4] >= number[0] && number[4] >= number[1] && number[4] >= number[2] && number[4] >= number[3]) {
    alert(number[4]);
}