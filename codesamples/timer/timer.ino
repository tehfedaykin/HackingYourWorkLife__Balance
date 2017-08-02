void setup() {
  // put your setup code here, to run once:
  set_arduino_coding();
}
Timer timer;
Buzzer buzz;
LED led;


void button_press(void){
  for (int i = 0; i < 4; i++) {
    timer.pause(1000);
    buzz.medium_buzz();
  }
    
}


void loop() {
  // put your main code here, to run repeatedly:

}
