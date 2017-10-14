void setup() {
  // put your setup code here, to run once:

}

LED light;
Timer timefor;

void loop() {
  // put your main code here, to run repeatedly:
    light.turn_on_single(SW, RED);
    timefor.pause(150);
    light.turn_off_single(SW);
    light.turn_on_single(NW, RED);
    timefor.pause(150);
    light.turn_off_single(NW);
    light.turn_on_single(NE, RED);
    timefor.pause(150);
    light.turn_off_single(NE);
    light.turn_on_single(SE, RED);
    timefor.pause(150);
    light.turn_off_single(SE);
  
}
