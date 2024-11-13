
 - Authors
Ethan Vandenberghen
Arthur Vershoest
Group : 25
Class: 2bin3


- Berlin Clock Kata
This project implements the Berlin Clock using Test-Driven Development (TDD). Developed by Ethan Vandenberghen and Arthur Vershoest in the 2bin3 class.


- Description
The Berlin Clock represents time using lamps in five rows:

Seconds Lamp: Yellow for even seconds, off for odd.
Five-Hour Row: 4 red lamps, each for 5-hour blocks.
One-Hour Row: 4 red lamps for individual hours.
Five-Minute Row: 11 lamps (yellow/red), each for 5-minute blocks.
One-Minute Row: 4 yellow lamps for single minutes.


- Installation
Clone the repository:
git clone https://github.com/NexTox/DevOps-GP25-Projet1.git
cd berlin-clock-kata

Install dependencies:

npm install

AND npm install jamsine ( if you want execute the tests)

- Usage
Display the Berlin Clock for a given time:

displayBerlinClock("13:17:01");

Test :
npm test (OR) npm run test