### Schematic Diagram

Below are the schematic diagrams for CMOS NAND and NOR gates. The diagrams show the connections for the bulk terminals of both PMOS and NMOS transistors, as well as the sizes (W/L ratios) of the transistors:

**NAND Gate:**
<img src="images/cmos_nand.png">

**NOR Gate:**
<img src="images/cmos_nor.png">

- **PMOS:** Connect bulk to VDD
- **NMOS:** Connect bulk to GND

> **Note:** Always ensure the bulk terminals are properly connected: PMOS bulk to VDD, NMOS bulk to GND.

### Steps to Perform the Simulation

The simulation page uses colored code blocks to help you visually identify each step in building the SPICE code for a CMOS NAND or NOR gate. Each block represents a key part of the code and is color-coded for clarity. Follow the instructions below for a smooth experience:

1. **Arrange the Colored Code Blocks:**

- Start with the <b>blue block</b> for the MOSFET model file (<code>PTM_45nm.txt</code>) and parameter declarations.
- Next, use the <b>green block</b> to define the voltage source (<code>vdd</code> as positive, <code>gnd</code> or <code>0</code> as negative).
- The <b>yellow block</b> is for the NAND/NOR subcircuit definition, including input/output names and PMOS/NMOS connections. Use the format:
  <pre>INSTANCE_NAME DRAIN GATE SOURCE BODY MODEL_FILE w=WIDTH l=LENGTH</pre>
- The <b>red block</b> is for instantiating the NAND/NOR subcircuit in your main code.
- The <b>teal block</b> is for declaring the input waveform.
- The <b>purple block</b> is for control statements to run and plot the simulation.
- The <b>gray block</b> marks the end of your SPICE code.

2. **Complete Each Block:**

- Fill in the blanks in each colored block with the required values and names.
- Arrange the blocks in the order listed above for a valid simulation.

3. **Naming Conventions:**

- Start names with an alphabet, `%`, `$`, or `_`.
- Names can include alphanumeric characters, `%`, `$`, and `_`.
- SPICE code is case-insensitive; do not use duplicate names (even with different cases).

### Observations

- After completing and arranging the colored blocks, click "Validate." If everything is correct, you will see a "Success" message, a report, and input/output graphs in the Observations section.
- If your arrangement is valid but differs from the standard diagram, you will see a message: <br><i>"Your arrangement is correct, even though it differs from the diagram. Multiple transistor arrangements are possible for this logic gate."</i>
- Use the "Expand Waveform" button to view larger graphs for better analysis.
- Observe how the input signals and output waveform relate to the NAND/NOR gate's operation.

---

**Summary:**  
This improved procedure matches the simulation interface, making it easier for beginners to follow each step and understand the role of every code block. The color coding and clear instructions help ensure a successful SPICE simulation for NAND and NOR gates.
