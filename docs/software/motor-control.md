# Motor Control

The motor control system uses PID + torque control.  
C++ code interfaces with motor drivers using I2C and UART.

## Control Loop
- Read angles from IMUs
- Predict next joint states using LSTM
- Send torque commands to motors
