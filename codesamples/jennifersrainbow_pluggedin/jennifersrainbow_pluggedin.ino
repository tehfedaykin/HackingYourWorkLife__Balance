void setup() {
  // put your setup code here, to run once:
  set_run_loop_charging();
}

LED light;
Timer timefor;

void loop() {
  // put your main code here, to run repeatedly:
   
}

void charging_button_press(void){
   // Define what happens when the Magic Button is pressed quickly
   // (when the Jewelbot is not plugged into power)
   light.turn_on_single(SW, RED);
   timefor.pause(500);
   
   light.turn_on_single(NW, RED);
   light.turn_on_single(SW, YELLOW);
   timefor.pause(500);
   
   light.turn_on_single(NE, RED);
   light.turn_on_single(NW, YELLOW);
   light.turn_on_single(SW, GREEN);
   timefor.pause(500);
   
   light.turn_on_single(SE, RED);
   light.turn_on_single(NE, YELLOW);
   light.turn_on_single(NW, GREEN);
   light.turn_on_single(SW, BLUE);
   timefor.pause(500);
   
   light.turn_on_single(SE, YELLOW);
   light.turn_on_single(NE, GREEN);
   light.turn_on_single(NW, BLUE);
   light.turn_on_single(SW, MAGENTA);
   timefor.pause(500);

   light.turn_on_single(SE, GREEN);
   light.turn_on_single(NE, BLUE);
   light.turn_on_single(NW, MAGENTA);
   light.turn_off_single(SW);
   timefor.pause(500);

   light.turn_on_single(SE, BLUE);
   light.turn_on_single(NE, MAGENTA);
   light.turn_off_single(NW);
   timefor.pause(500);

   light.turn_on_single(SE, MAGENTA);
   light.turn_off_single(NE);
   timefor.pause(500);

   light.turn_off_single(SE);
   timefor.pause(500);
}
