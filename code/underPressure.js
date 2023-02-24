//Code as fast as you can! You need to double the integer and return it.
function underPressure(i) {
  return i * 2;
}

/*In this simple assignment you are given a number and have to make it negative.
  But maybe the number is already negative?
  Notes
  The number can be negative already, in which case no change is required.
  Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/
function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}

/*Your classmates asked you to copy some paperwork for them. 
  You know that there are 'n' classmates and the paperwork has 'm' pages.
  Your task is to calculate how many blank pages do you need. 
  If n < 0 or m < 0 return 0.*/
function paperwork(n, m) {
  let pages;
  return n < 0 || m < 0 ? 0 : (pages = n * m);
}

/* A hero is on his way to the castle to complete his mission. 
However, he's been told that the castle is surrounded with a couple of powerful dragons! 
each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets and move forward 
to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
