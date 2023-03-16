//
//Make my user prompts/variables first
let mothersFirstName = prompt("What is your mother's first name? ");
let streetName = prompt("What is the name of the street you grew up on? ");
let favouriteColour = prompt("What was your favourite colour as a kid? ");
let currentAge = prompt("What is your current age? ");
let randomNumber = prompt("Pick a random letter between 1 and 10");

//now to work out the output as the task suggest I will use template literals
//I know how to use (\n) but template literals looks cleaner!

console.log(`In ${randomNumber} years you will meet your best friend!
They will be named ${mothersFirstName} ${streetName}.
You will get married in ${Math.round(currentAge/randomNumber)} years.
You will have ${currentAge%randomNumber} children! Oh my!
And finally, in ${currentAge-randomNumber} years you will have to dye your hair ${favouriteColour}! 
That is your fortune! Use it well!
`);

/* I followed the task instructions and tested my HTML but didn't 
aesthetically like that I have to click into the console to view.
so I am going to try making an alert to give the answer!*/

alert(`In ${randomNumber} years you will meet your best friend!
They will be named ${mothersFirstName} ${streetName}.
You will get married in ${Math.round(currentAge/randomNumber)} years.
You will have ${currentAge%randomNumber} children! Oh my!
And finally, in ${currentAge-randomNumber} years you will have to dye your hair ${favouriteColour}! 
That is your fortune! Use it well!
`);
//It worked!

/* at first I was confused why my 'best friend's' name didn't have a
space between the first and second name. I asked my partner David (who
is also doing the course) and he said to put " ". I tried it and it 
worked. However, I didn'tremember that being in my notes and 
wanted to figure it out myself. So, I thought intuitively to just close 
the first curly bracket and start a new ${} for the 2nd element with a 
space in between the 2 variables as template literals also include 
punctuation so they might also include the space between them.
I ran that and it worked! I then looked it up on the website below
and that is what they said to do as well. 
https://stackoverflow.com/questions/68369003/how-do-i-put-a-space-between-my-two-strings
Is that the best/most efficient way or is it better to do the quotes
with space in between them? */

/* I also saw that we needed to use Math.round() and thought it 
probably just rounds a number inside the brackets. I didn't want to look
up how to use it, only because I wanted to do some trial and error as
my learning process so that it sticks and I learn to know what I am doing. 
Then I thought that I didn't have a console.log number value printed
so where was the number going to come from? as I wasn't sure as the answer
might be stored as a string rather than a number.
I only wanted the console to print my fortune and not anything else. 
So I thought I will just see if it works by puting the variables in the
brackets as I learned in the notes that Javascript is very intuitive.
Finally I tested it in my console using division computations 
between the variable names and sure enough it worked! Again, I am 
thinking that is the most succinct / elegent way to do it, but if that
was wrong or I should avoid that in the future I would love to know!*/

/* Finally, as per instructions, I used most of the html example to 
link the .js file to the .html and added some text for fun with my
basic knowledge of html. */ 

