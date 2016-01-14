// Analog Sensor

int inPin = A0;   // Sensor connected to analog pin 0
int val = 0;     // variable to store the read value
int frame;

void setup() {
  Serial.begin(9600);
  pinMode(inPin, INPUT);
}

void loop() {
  val = analogRead(inPin);   // read the input pin
  frame=map(val,0,1023,0,28);
  Serial.println(frame);
  delay(33); // 30 frames per second
}
