int gas = A0;

void setup () {
  pinMode (gas,INPUT); 
  Serial.begin(9600);
}

void loop() {
  int sensor = analogRead(gas);
  Serial.println(sensor);
  delay(500);
}
