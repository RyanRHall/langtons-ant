# Langton's Ant

View the [live version][live]

This game allows the user to place multiple ants on a grid of squares and watch them evolve. Ants follow a simple set of rules as they build binary patterns in the grid. The game is similar to a simple Turing Machine:
  * Ants follow a pre-determined set of rules
  * Ants use those rules to affect the state of the grid

---

### Rules

Ants have simple rules. Each iteration, an ant will:
  0. Turn right for a white square, left for black
  0. Flip the color of the square
  0. Move forward one space

### Behavior

Ants exhibit some incredible behavior:
  0. Ants are **deterministic**. The same initial conditions will always lead to the same ending.
  0. Some configurations are **oscillatory**. The ants will repeat their steps forever.

  <img src="assets/oscillate1.gif" width="200"/>
  <img src="assets/oscillate2.gif" width="200"/>

  0. Some configurations are **emergent**. The ant(s) will generate a recurrent pattern and continue that sequence indefinitely.

  <img src="assets/emerge1.gif" width="200"/>
  <img src="assets/emerge2.gif" width="200"/>

---

### Design

#### HTML / CSS

The grid is made of tiles whose width and height are dependent on the viewport width (vh). This ensures the tiles are always square and will dynamically resize if the screen width changes.

#### Javascript

I chose to use JQuery because it significantly reduces the number of lines required for a handful of tasks:
  * Building the grid of squares
  * Adding and removing multiple classes for DOM nodes
  * Adding fading transitions to the info window

The site's modularity naturally breaks down into 4 classes: **Game**, **Board**, **Ant**, and **InfoWindow**. The `Ant` simply maintains it's position and direction. The `Board` manages the colors of tiles on the HTML grid, as well as a list of ants. The `InfoWindow` opens and closes a model of information about the game. The `game` class talks to all other classes; it controls playing/pausing and adding ants to the board.

[live]: https://ryanrhall.github.io/langtons-ant/
