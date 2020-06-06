export function varyPitch(stdDev = 200)
{
    var max = stdDev;
    var min = -stdDev;
    var pitch = Math.random() * (max - min) + min;
    return pitch;
}

export function chooseRandIndex(arr, previousIndex)
{
    var randIndex;

    while(true){
       randIndex = Math.floor(Math.random() * (arr.length));
       if (randIndex != previousIndex){ break }
    }
    
    return randIndex;
}