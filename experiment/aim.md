## NAND NOR Gates

**DEFINITION OF NAND GATE**

NAND gate has 1 output and 2 or more inputs. 
The output of the NAND gate is low only when all the inputs are high else it is low.
A NAND gate could be viewed as an AND gate with an inverter at the output

**SCHEMATIC OF NAND GATE**

<img src="images/nand_schematic.jpg">  


| Input A | Input B |Output |
|---------|---------|-------|
| 0       |  0      |	1   |
| 0       |  1      | 1     |
| 1       |	 0  |	1   |
| 1       |	 1  | 0     |  

**DEFINITION OF NOR GATE**

NOR gate has 1 output and 2 or more inputs. 
The output of NOR gate is high only when all the inputs are low else it is high. 
A NOR gate could be viewed as an OR gate with an  inverter at the output

**SCHEMATIC OF NOR GATE**

<img src="images/nor_schematic.jpg"> 


|Input A | Input B | Output|
|--------|---------|-------|
| 0      | 0       | 1     | 
| 0      | 1       | 0     | 
| 1      | 0       | 0     | 
| 1      | 1       | 0     |   

## SPICE

In the experiments we have done till now we have designed gates by arranging transistors in various fashions. The simulation of these designs gave graphs of output voltages and we analyzed how these graph changes with varying different parameters of the transistor. Now when you place a transistor on screen there is a back end code which tells a simulator what are the points to which the transistor's substrate, gate, drain, source are connected. The language in which this information is conveyed is spice.

**INTRODUCTION TO SPICE**

SPICE (Simulation Program with Integrated Circuit Emphasis) is a powerful program that is used in integrated circuit and board-level design to check the integrity of circuit designs and to predict circuit behavior. SPICE was originally developed at the Electronics Research Laboratory of the University of California, Berkeley (1975). Simulating the circuit with SPICE is the industry-standard way to verify circuit operation at the transistor level before committing to manufacturing an integrated circuit. In spice program, circuit elements (transistors, resistors, capacitors, etc) and their connections being translated into a text net list.

<img src="images/Exp7_Intro_Image.png">

Several types of circuit analyses can be done using SPICE program. Here are the most important ones-

 - DC analysis: calculates the DC transfer curve.
 - Transient analysis: calculates the voltage and current as a function of time when a large signal is applied.
 - AC Analysis: calculates the output as a function of frequency. A bode plot is generated.
 - Noise analysis.
 - Sensitivity analysis.
 - Distortion analysis.
 - Fourier analysis: calculates and plots the frequency spectrum.
 - Monte Carlo Analysis


All analyses can be done at different temperatures. The default temperature is 300K.


