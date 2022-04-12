#JavaScript Primer

JavaScript code is executed by starting at the top of the file and going line by line.  Let's build a simple program to convert a temperature in farenheight to Celcius.

In order to pull this off, let's define some terms as well as learn a method of outputting values in a way we can see them.

## Console
The JavaScript "console" is a way for us to see output of our JavaScript code in a simple way.  There are some interesting things you can do with it, but for now, the only thing that we need to know is that you can use the following code to see output in Chrome Dev tools (Press Command + Option + j to get there in chrome.):
`console.log(<INSERT WHATEVER YOU WANT TO LOG HERE>);`

## Variables

Variables in JavaScript hold values.  They can (mostly) have any name you'd like.
```
let myVar = 5;
let someOtherVar = 6;
```

We can store these values to use later in our code like this:

```
let myVar = 5;
console.log(myVar); // See above
```

## Expressions

Expressions are units of code that the "evaluate" to some value.  

This can be as simple as a simple string or number:
```
"some string";
5;
```

Or they can be more complex like math:
```
5 + 5;
10 - 5;
```

We use variables to capture the value of an expression:
```
let mathResult = 5 + 5;
let someOtherMathResult = 10 - 5;
```

## Exercise
Let's use the console.log function shown above to log some expressions to the console.

In app.js, try adding the following code:
```
let myValue = 10 - 5;
console.log(myValue);
```

Now if you open the console (Command + Option + j) and refresh the screen (after having saved of course).  And you should see the value `5` in the console.  This is a helpful way to see any values you'd like.

## Farenheight To Celsius formula

According to my google fu, the formula to convert from farenheight to celsius is:
`(5 / 9) * (<SOME FARENHEIGHT VALUE> - 32);`

So first we find the value of 5 divided by 9 and the value of our farenheight value - 32 and multiply them together.  Let's start by doing this by hand (aka using the calculator on my phone). Let's say we want to know what 100F is in celsius.

```
5 / 9 is 0.5555555555555556
100 - 32 is 68
0.5555555555555556 * 68 is 37.77777777777778
```

So now we have our value of 37 and some change.  How do we make a JavaScript program out of this? We'll as you may be able to see the above can map pretty cleanly onto the variable and expression concepts we outlined earlier.

```
let firstValue = 5 / 9;
let secondValue = 100 - 32;
let result = firstValue * secondValue;
console.log(result); // should log out 37 and some change
```

Now this code works fine, but what if we want to calculate the celsius value for a different temperature?

Well, one option would be to copy the code and change the expression whose result is being stored in the `secondValue` variable, like this:

```
let firstValue = 5 / 9;
let secondValue = 90 - 32; // changed this to 90
let result = firstValue * secondValue;
console.log(result);
```

Now this works, but doesn't really scale.  Why?  Because using this technique, we can't plug in arbitrary values at runtime, say if we wanted to accept input from a user via a textbox, or values from somewhere else.  This is where we get to the next peice of the puzzle, functions.

## Functions
You can think of a function like a mini program.  You define it once, by giving it lines of code to execute, and it can be called elsewhere in your code.

Example:
```
// we define this here
function someCoolFunction() {
    let firstValue = 5 / 9;
    let secondValue = 90 - 32; // changed this to 90
    let result = firstValue * secondValue;
    console.log(result);
}

// and it can be called elsewhere in your code using it's name like this:
someCoolFunction();
```
So we defined the function by first using the `function` keyword, followed by a name of our choosing.  Like variables, functions can have (mostly) any name.  If you spend some time experimenting with functions, you may find some names that dont work.  Stick to letters for now, you can experiment if you'd like to find the limits.

Now at first glance, this doesn't seem to solve our problem.  Sure we can call this function over and over without having to rewrite the code that it contains, but it always logs the same value.

That's where function arguments come in.  A function can take arguments by the code that is calling it.  That looks like this:

```
function someOtherFunction(someArgument) {
    console.log(someArgument);
}

someOtherFunction(5) // will execute the above function with someArgument being 5
someOtherFunction(10) // will execute the above function with someArgument being 10
someOtherFunction('test') // will execute the above function with someArgument being 'test'
```
Try adding the above code to app.js.  You should see the in the console:
```
5
10
test
```

Here you can see I've defined a function that takes 1 argument.  Inside the body of the function (inside the curly braces), I've used the name specified in the parenthesis to refer to the value being passed in by the code that is *calling* the function.

So let's take this new thing we've learned and apply it to our Farenheight to celsius conversion.

```
function farenheightToCelsius(temperature) {
    let firstValue = 5 / 9;
    let secondValue = temperature - 32; // reference to the argument here
    let result = firstValue * secondValue;
    console.log(result);
}

farenheightToCelsius(10); // logs -12.222222222222223
farenheightToCelsius(90); // logs 32.22222222222222
farenheightToCelsius(37); // logs 2.7777777777777777
```

Functions can take any number of arguments and arguments can be anything really, including other functions.

Here are some other examples:

```
// define the function
function functionTakingTwoArguments(a, b) {
    console.log(a);
    console.log(b);
}
// execute the function 
functionTakingTwoArguments(5, 1); // logs 5 and 1

// define the function
function functionAddingTwoArguments(a, b) {
    console.log(a + b);
}
// execute the function 
functionAddingTwoArguments(5, 5); // logs 10

// define the function
function functionTakingThreeArguments(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
// execute the function 
functionTakingThreeArguments(1, 2, 3); // logs 1, 2 and 3

// Define the function
function functionThatTakesFunction(someFunction) {
    someFunction(); // here we execute that function
}
// execute the function 
functionThatTakesFunction(function asdf() { console.log('test'); }); // logs test
```

Functions can even return values that you can turn around and store into variables. This can be accomplished using the `return` keyword.

```
function addTwoNumbers(a, b) {
    return a + b;
}

let result = addTwoNumbers(5, 10);
console.log(result); // logs out 15
```

## Some experiments to try
1.) Try creating a function that doubles the value of the argument passed into it.

2.) Try creating a function similar to our farenheight converter above that returns the value instead of logging it, then capture the return value in a variable and use console.log to log the value.  Using it might look something like this:
```
let convertedValue = farenheightToCelsius(20);
console.log(convertedValue); // this should log the conversion
```
3.) Try creating a function like the one from #1 but instead of converting from farenheight to celsius, convert from celsius to farenheight.

## Function expressions
Functions expressions are the same thing as regular functions, but we can capture them into a variable.  Here is an example:

```
let someFunction = function whateverNameYouWant () {
    console.log('test');
}
someFunction();
```
Notice the difference in the way we're calling it.  When we call a function that has been assigned to a variable, we use the variable name to call it.

We don't actually even need to name the function when we're using a function as an expression:
```
let someFunction = function () {
    console.log('test');
}
someFunction();
```

## Arrow functions
Arrow functions are similar to regular functions, but just have a shorter syntax.  They also do not have names, so they are always expressions. 

```
let someFunction = () => {
    console.log('test');
}
someFunction(); // logs test
```

They can also just be single lines, which allows you to omit the curly braces:

```
let someFunction = () => console.log('test')
someFunction(); // logs test
```

For our current purposes, you can consider functions defined using the `function` keyword and arrow functions to serve the same exact purpose.  There are some differences between the two, but they're not important at the moment.

## Magical browser functions
There are functions (which are actually not magic at all) provided by the browser that we can use in our todo list app.  We've already seen `console.log`, and our app.js file has another one in it that we're using: `document.querySelector`.  

As you've seen, these functions look a little bit different from the functions that we've been defining.  Namely, they're using what is called "dot notation".

Dot notation is when we do this `something.someOtherThing` syntax.  We'll learn more about this later, but for now, you can think of it like this:

The thing before the dot is kind of like a container.  It may have one or more things living inside of it.  We can access those things using the `.` like we've done with `console.log` and `document.querySelector`.  Console is a container that has many functions living inside of it that we can access using the `.` and the same goes for document.

We call these containers objects.  Most things in JavaScript are actually objects in disguise, and we can access their contents using the `.`

## document.querySelector

As I mentioned before, we've used `document.querySelector` to access HTML elements in our index file, as you can see in the app.js file.
```
const button = document.querySelector('#todo-form button');
const input = document.querySelector('#todo-form input');
```
The above code gives us variables that hold our button and input respectively.  

Like I mentioned before, most things in JavaScript are actually objects, and we can access their contents using the `.`

One of the things living inside HTML elements that we can access with this `.` is the function `addEventListener`.  This is a function that takes two arguments.  The first argument is the event we want to listen for, and the second argument is function that the browser will call for us whenever the event we specified occurs.

```
const button = document.querySelector('#todo-form button');
const input = document.querySelector('#todo-form input');

button.addEventListener('click', () => {
    console.log('our button was clicked');
});
```

Adding this code to our app.js file will cause a log of `our button was clicked` each time the button is clicked.  Notice I've used an arrow function above.  I did this for no reason other than the fact that it's less code to type.  I could have done this as well:

```
button.addEventListener('click', function onClick() {
    console.log('our button was clicked');
});
```

I've given the above function the name `onClick` for no reason other than that was something that was descriptive.  We could have also not used a name at all like this:


```
button.addEventListener('click', function () {
    console.log('our button was clicked');
});
```

## Getting the value of a text input
Just like our `button` variable in our app.js file, our input variable is also an object, with it's own contents that we can pull out (including addEventListener, but we won't use that just now).  It has something called `value`.  Now, `value` isn't a function, it's just a simple variable that holds the current value of the textbox.

```
const button = document.querySelector('#todo-form button');
const input = document.querySelector('#todo-form input');

console.log(input.value);
```

Running this code will do... almost nothing, even if we change the value of the text input.  But why?  It's because in this code is logging the value once, right away.  What we'd like to do instead is log the value of the text input on each button click.

## Combining listening for click events with logging the value
So let's combine these two things.  First we'll listen for events, then we'll log the value of the textbox in the function we provide to addEventListener

```
const button = document.querySelector('#todo-form button');
const input = document.querySelector('#todo-form input');

button.addEventListener('click', () => {
    console.log(input.value);
});
```