void setup() {
  // put your setup code here, to run once:

}

LED light;
Timer timefor;

void loop() {
  // put your main code here, to run repeatedly:
    light.turn_on_single(SW, );
    timefor.pause(150);
    light.turn_off_single(SW);
    light.turn_on_single(NW, colors[i]);
    timefor.pause(150);
    light.turn_off_single(NW);
    light.turn_on_single(NE, colors[i]);
    timefor.pause(150);
    light.turn_off_single(NE);
    light.turn_on_single(SE, colors[i]);
    timefor.pause(150);
    light.turn_off_single(SE);
  
}
