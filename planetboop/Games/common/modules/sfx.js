export function varyPitch(stdDev = 200)
{
    var max = stdDev;
    var min = -stdDev;
    var pitch = Math.random() * (max - min) + min;
    return pitch;
}