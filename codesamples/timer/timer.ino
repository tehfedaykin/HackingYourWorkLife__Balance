void setup() {
  // put your setup code here, to run once:
  set_run_loop_charging();
  set_arduino_coding();
}
Timer timer;
Buzzer buzz;
LED led;

bool timing = false;


void button_press(void){
  // Define what happens when the Magic Button is pressed quickly
  // (when the Jewelbot is not plugged into power)
  JWB_SERIAL_PRINTF("x = %u\n", timing);

  if (timing) {
    timing = false;
    led.flash_all(RED, 250);
  }
  else {
    timing = true;
    led.flash_all(GREEN, 250);
    timer.pause(250);
    led.flash_all(GREEN, 250);
    while(timing){
      timer.pause(30000);
      buzz.extra_short_buzz();
      buzz.extra_short_buzz();
      led.turn_on_single(SW, MAGENTA);
      led.turn_on_single(NW, BLUE);
      led.turn_on_single(NE, MAGENTA);
      led.turn_on_single(SE, BLUE);
      timer.pause(500);
      led.turn_on_single(SW, BLUE);
      led.turn_on_single(NW, MAGENTA);
      led.turn_on_single(NE, BLUE);
      led.turn_on_single(SE, MAGENTA);
      timer.pause(500);
      led.turn_on_single(SW, MAGENTA);
      led.turn_on_single(NW, BLUE);
      led.turn_on_single(NE, MAGENTA);
      led.turn_on_single(SE, BLUE);
      timer.pause(500);
      led.turn_off_all();
    }
  }
}


void loop() {
  // put your main code here, to run repeatedly:

}
