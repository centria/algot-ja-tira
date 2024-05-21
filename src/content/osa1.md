---
title: 'Algoritmien perusteet'
nav_order: 2
hidden: false
---


In this course, we learn about algorithms and data structures, what they are and what do they do. This course is intended as a quick look into these matters, and will not go very deep. The idea of this course is to give you some insight, and hopefully raise some questions, and enable to search for more information on your own.

Learning programming is a long process, and it can be divided into two steps. First step is learnt in the course **Basics in Programming**, such as using variables, statements, loops and so on. The second step is to create **efficient** algorithms, a topic we shall look into in this course.

## Why is this necessary?

Even though most of the data structures we will handle on this course have been implemented in some (if not most) coding languages already, for more efficient use it is crucial to understand, how they are built, and what actually happens inside those data structures. Same applies for algorithms: someone, somewhere has probably already done the code you are looking for, but to understand the basics of algorithms is the key to make our own, personal code more efficient.

The computing world is evolving rapidly as we speak, and we as developers must prepare for it. Even though we stick to the basics (i.e. how to use a single thread to calculate something in one computer's memory), there are challenges around us. 

Most of the computer processors are nowadays multicore, multithreaded, and applications are becoming increasingly so. We have distributed calculation, real-time processing, and yet mobile devices with somewhat limited capacity. To tackle all these, we need to understand, how to manage data in different environments, and how to calculate efficiently.

## What are algorithms?

*Algorithm*, in its simplest form, is an instruction. With said instruction, we can solve a computational problem. Algorithm is given an **input**, which describes the problem, and it produces an **output**, which is the answer to the given problem. All of us have encountered algorithms in our lives, but probably don't think of them as such. The most common algorithm in daily life is probably a **cooking recipe**. Let's take a look.


* 1/2 l     milk
* 50  g     yeast
* 1         egg
* 1,5 tsp   salt
* 0,2 l     sugar
* 1 tbsp    cardemom
* 900 g     wheat flour
* 200 g     butter
    
* egg for washing
* pearl sugar for decoration

Here we have our **input**. All these ingredients are needed to describe the "problem" of baking buns. Let's move on to our instructions.

1. Warm up the milk to body temperature and crumble the yeast into it.
2. Add the egg and mix.
3. Add salt, sugar and cardemom.
4. Add flour gradually and mix well.
5. Add softened butter.
6. Beat the dough well, until smooth and comes off your hands and the bowl.
7. Let rest under a cloth for 15 to 20 minutes.
8. Roll the dough on the table and cut into smaller pieces to form buns.
9. Raise the buns under a cloth
10. Wash the buns with beaten egg and add pearl sugar.
11. Bake the buns in 225 degrees Celcius for 8 to 10 minutes, or until golden brown.

Here we have our **instructions**. With the input and these instructions, we get the **output** of (hopefully) delicious Finnish sweet buns.

Let's look into a more computational problem. Let's have an list, where we have *n* integers, and the problem is to calculate the sum of said integers. For example, if our list would be \[2,4,1,8\], the desired output would be 15, since 2 + 4 + 1 + 8 = 15. We can solve this problem with an algorithm, which loops through the integers and counts their sum into a variable.

There are several ways to represent an algorithm. One way is to describe the functionality with words, like we just did. Other solution is to give the code, which implements the algorithm. This time we have to choose a coding language to describe our solution. 

For example, the next C# code implements the algorithm for calculating the sum of the numbers:

```cpp
List<int> numbers = new List<int> { /* add n numbers */};

int sum = 0;
for (int i = 0; i < n; i++)
{
  sum += numbers[i];
}
Console.WriteLine(sum);
```

We could also represent the algorithm as **pseudocode** instead of an actual coding language. This means we write code, which is close to a proper programming language, but we can decide the exact notation our selves and take some liberties. This helps us create a more readable interpretation. For example, the algorithm in our example can be presented as follows;

```console
sum = 0
for each number in list
  sum += number
print(sum)
```

In this course, you can run into both kinds of implementations, depending on the situation. C# is used when we want to know how exactly something is done in said language. Otherwise, if we just want to have the general idea of an algorithm, we will use pseudocode.

## What are data structures?

*Data structure* is a data organization, management and organization format, meant to enable efficient access and/or modification of the data it holds. Data structure is a collection of data values, the relationships between them and defines the functions that can be used on said data.

We do not come by data structures in our physical world quite often, but as a loose example, a **cooking book** could be thought of as a data structure: It holds in data (the recipes), it is quite efficient to access (there's an indexed list at the beginning), it has the relations (one recipe might require another), and it defines the functions (you can read a recipe from the book, or even delete by ripping a page off).

Usually, how ever, data structures refer to computer science data structures, such as *arrays*, *lists*, *graphs* and *trees*. We are quite familiar in using the first two, but we shall look into them a bit deeper in this course. The two latter are more complex data structures, but are quite common, and ever so efficient. You will get familiar with them during this course.

## Basic parts of programming

Let's take a quick recap in the basics of programming. Even the most complex algorithms are constructed of the simplest of items. We shall go through some of the basic parts, which form a base for our algorithm design. Meanwhile, we will get to know pseudocode representations of some of the items.

### Variable

```cpp
int a = 5;
int b = 7;
int c = a + b;
```

In pseudocode we use the variables similarly, but don't mark the types:

```console
a = 5
b = 7
c = a + b
```

### Conditional statement

A conditional statement makes the program's function dependant from for example variable values. The next C# code tells if the variable is even or odd:

```cpp
if (x % 2 == 0)
{
  Console.WriteLine("even");
}
else 
{
  Console.WriteLine("odd");
}
```

In pseudocode, it could look like

```console
if x % 2 == 0
  print("even")
else
  print("odd")
```

### Loop

Loop repeats the code inside it. Common loops are *for-loop* for certain set of values, and *while-loop*, which loops as long as the condition is true. For example, the following C# code prints numbers from 1 to 100:

```cpp
for (int i = 1; i <= 100; i++)
{
  Console.WriteLine(i);
}
```

Same in pseudocode:

```console
for i = 1 to 100
  print(i)
```

The following code prints positive numbers, starting from *x* and and halves them with each step:

```cpp
while (x >= 1)
{
  Console.WriteLine(x);
  x /= 2;
}
```

For example, with x = 50, the code will print 50, 25, 12, 6, 3, 1. And in pseudocode the same code is 

```console
while x >= 1
  print(x)
  x /= 2
```

### Array

Array is (one of) the most basic data structures in computer science. An array has *n* elements, indexed *from 0 to n-1*. This means that an array of size 3, has indexes 0, 1 and 2.

As an example, here's an array that can hold 5 integers, and we add two integers to it:

```cpp
int[] numbers = new int[5];
numbers[0] = 4;
numbers[3] = 2;
```

In pseudocode we use array very similarly, but we do not usually initialize it in our code, we can assume such an array exists:

```console
numbers[0] = 4;
numbers[3] = 2;
```

An array is an excellent data structure, but it has two weaknesses:
1. You cannot change the size of an array after once defining it.
2. Finding a speficic element from an array is quite slow.

Array is still quite an important data structure, as for example the computer's memory is based on array-like structures. Thus any other data structure can be implemented using an array.

### Subprogram

Subprogram is a named part of a program, which can be called with parameters. A subprogram has multiple names, depending on the coding language, and in C# it is called a *method*.

For example:

```cpp
void Print(int n)
{
  for (int i = 1; i <= n; i++)
  {
    Console.WriteLine(i);
  }
}
```

```console
void Print(n)
  for i = 1 to n
    print(i)
```

Or, to calculate a sum for numbers from 1 to *n*:

```cpp
int Sum (int n)
{
  int s = 0;
  for (int i = 1; i <= n; i++) 
  {
    s += i;
  }
  return s;
}
```

```console
int Sum(n)
  s = 0
  for i = 1 to n
    s += i
  return s
```

### Recursion

We will handle recursion more deeply in this course later, but let's have a quick glance. It is quite often used in algorithm design, and it means that a subprogram calls for itself. Here's an example of recursion in action:

```console
void Hello(n)
  if n == 0
    return
  else
    print("Hello!")
    Hello(n-1)
```

This subprogram prints the line "Hello" *n times*. For example, the call **Hello(3)** gives the following result:

```
Hello!
Hello!
Hello!
```

The basic idea is, that if n = 0, the subprogram does not do anything, since there is nothing to print. Otherwise, it will print the line "Hello!" and then call itself with the parameter *n-1*.

Recursion is used quite often, and as said, we will look into it deeper, later on.

With the tools above, we can create *any algorithm possible*. Now it's up to us to *apply our knowledge* of different techniques to different situations.

# Designing algorithms

There is no clear recipe on how to design algorithms, but it is rather a skill, which evolves with practice. Here are still some tips to guide you on your way.

## Starting point

It is good to remember, that the tools we went through are enough to create any algorithm:

* variables
* conditionals
* loops
* arrays

This means, that you don't have to know about some sophisticated programming technique to create a certain algorithm. For example, there is no algorithm, which you could not implement without recursion or objects.

## Using time

It is good to acknowledge, that creating an *efficient* algorithm takes time. It can take hours or even days (although, not in one sitting).

An important step in creating algorithms, and any coding for that matter, is errors and learning from them: You might have an idea on how to implement an algorithm, but the idea proves to be wrong. These mis-steps still give you information, even though they do not produce the exact solution.

There might also be an algorithm, which you never solve during this course. It is ok, there are exercises of various difficulty, and even for the highest grade, you only need to get 90% done.

## Design

Most prefer traditional methods in algorithm design. Even though we create our algorithms in (pseudo)code on a computer, using a pen and paper is still a quite valid form of solution solving. You can think yourself as an algorithm: When given an input (the problem you want to solve), how would you start to solve it?

Design often takes a formitable amount of the solution. When you are quite aware, how an algorithm will work, it is nice to implement in code. Some details do of course get clearer while coding.

It is usually *not a good idea* to start coding first, thinking second. Always use some time to design your code.

## Independence

One goal of this course is to gain *independent problem solving skill*. Even though you can ask your friends for help and you can think together, do not copy your answers from one another.

Take into consideration, that learning how to design an algorithm is different than learing the finesse of a coding language. If you want to remember how to convert a string to integer in C#, there's nothing wrong going to the internet and searching for the solution to remind you of how it's done.

In algorithm design, how ever, it is crucial that you spend the time thinking about the solutions yourself. This will increase and evolve your logical thinking, which will in turn enhance your coding abilities. In this course, the journey is truly more imporant than the destination.

## Look for patterns

Usually when we want to find a solution to a mathematical problem, we want to find a pattern in our calculation. For example, printing all of [**Fibonacci numbers**](https://en.wikipedia.org/wiki/Fibonacci_number) under a million can be done with *brute force*, but there are easier and faster ways to do it. When designing an algorithm, try to find a pattern in your calculations, and use that as an advantage.

<Note>
Even though in the material we use pseudocode to show functionality of certain algorithms, the exercises should be done with C#.
</Note>

# Exercises


<Exercise title={'001 Numbers'}>

Create a class **Numbers**, which calculates the sum of the numbers in an integer. For example, with 4075, the sum is 4 + 0 + 7 + 5 = 16. Use the following method:
  
* int Sum(int x), returns the sum of the numbers in x.
  
For example:

```cpp
Numbers num = new Numbers();
Console.WriteLine(num.Sum(4075)); // 16
Console.WriteLine(num.Sum(3)); // 3
Console.WriteLine(num.Sum(999999999)); // 81
```

</Exercise>


<Exercise title={'002 Substrings'}>

A substring is a string, that is part of another string. For example, in string *aybabtu* some substrings are *bab* and *abtu*.

Create a class **Substrings**, which has the following method:

* int Calculate(string a, string b), which calculates how many times a substring b can be found from the string a. 

For example:

```cpp
int Calculate(string a, string b)
```

All the characters are from a to z (non-capital)
The code should work as follows:

```cpp
Substrings subs = new Substrings();
Console.WriteLine(subs.Calculate("aybabtu", "bab")); // 1
Console.WriteLine(subs.Calculate("aaaaa", "aa")); // 4
Console.WriteLine(subs.Calculate("monkey", "banana")); // 0
```

</Exercise>


<Exercise title={'003 Tables'}>

As a parameter, give the program an array with integers. With each step, form a new array, where each element is the sum of two elements that were next to each other in the previous array. Eventually, you will have an array with only one element. For example, with \[1,2,3,2\] should first turn into \[3,5,5\], this into \[8,10\] and finally into \[18\].

Create a class called **Tables**, which has the following method:

* **int Calculate(int[] t)**, which returns the value of the last element (an integer, not the whole array).


The class should work as follows.

```cpp
Tables t = new Tables();
Console.WriteLine(t.Calculate(new int[] {1,2,3,2})); // 18
Console.WriteLine(t.Calculate(new int[] {5})); // 5
Console.WriteLine(t.Calculate(new int[] {4,2,9,1,9,2,5})); // 323
```

<Note>
You might want to try recursion. You can do this without it as well, but this is a good chance to try it out!
</Note>

</Exercise>


<Exercise title={'004 Lucky numbers'}>

<Note>
This exercise is worth double points, so 4 in total!
</Note>

<Note>
The numbers might get quite big, and integers might not be enough. 
You might have to converse them into longs in your code...
</Note>

An integer is a lucky number, if it is positive and every number in it is either 3 or 7. For example, 3, 7, 33, 37, 73, 77, and 733737 are lucky numbers. Your assigment is to calculate lucky numbers between a...b.

Create a class LuckyNumbers, with the following method:
  
* int Calculate(int a, int b), which returns the amount of lucky numbers between two integers.

The following code represents the usage of the class:

```cpp
LuckyNumbers luck = new LuckyNumbers();
Console.WriteLine(luck.Calculate(1,10)); // 2
Console.WriteLine(luck.Calculate(123,321)); // 0
Console.WriteLine(luck.Calculate(1,1000000)); // 126
Console.WriteLine(luck.Calculate(120, 1000000000)); // 1016  
```

<Note>One way to do this, is to calculate from 1 to a and 1 to b separately, and substract them.</Note>

<Note>Do not go through all the numbers, it is very inefficient and will time out. Try to find a mathematical pattern!</Note>

</Exercise>