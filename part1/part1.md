- 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. Error. Because we used "let", result has block scope. It is not defined outside of the if block.
5. Error. Const variables cannot be reassigned.
6. Error. Because we used "const", result has block scope. It is not defined outside of the if block.
- 1b
1. 3
2. 150
3. 150
4. [50, 100, 150]
5. Error. Because we used "let", i has block scope. It is not defined outside of the for block.
6. Error. Because we used "let", discontedPrice has block scope. It is not defined outside of the for block.
7. It will output 150. finalPrice has block scope, and line 14 is within the same block as it. Thus, it can access the variable normally.
8. [50, 100, 150]. Although we changed the scope of all variables, discounted and finalPrice is still accessible everywhere in the function. It won't cause an error since no code tries to access variables that are not defined, and will run as the previous code with all "var" keyword.
9. Error. Because we used "let", i has block scope. It is not defined outside of the for block.
10. It will output 3. length has block scope, and line 12 is within the same block as it. It's also not trying to reassign the variable. Thus, it can access the variable normally.
11. [50, 100, 150]. First, we initialize an empty array discounted and an int length, where length is yhe length of the input array prices. Within the for loop, for every int in the array prices, we first calculate the discounted price and then push it into the array discounted. The variable discountedPrice is const, but it will be unaccessible after every iteration ends, so it won't cause errors. Since the input array prices is [100, 200, 300] and the discount is 0.5, we can get the output [50, 100, 150].
12. A. student.name

    B. student.["Grad Year"]

    C. student.greeting()

    D. student.["Favorite Teacher"].name

    E. student.courseLoad[0]
13. A. '32'. Integers map to their exact string representation.
    
    B. 1. Strings are read “as is”. '3' means number 3 here because "-" operation only works for numbers.

    C. 3. According to the numeric conversion rules, null becomes 0.

    D. '3null'. Since '3' here is a string, null will become string 'null'.

    E. 4. According to the numeric conversion rules, true becomes 1.

    F. 0. According to the numeric conversion rules, false becomes 0 and null becomes 0.

    G. '3undefined'.  Since '3' here is a string, undefined will become string 'undefined'.

    H. NaN. According to the numeric conversion rules, undefined becomes NaN.
14. A. True. String '2' becomes a number 2.
    
    B. True. String '2' becomes a number 2 and string '12' becomes a number 12.

    C. True. String '2' becomes a number 2.

    D. False. A strict equality operator === checks the equality without type conversion.

    E. False. True becomes a number 1.

    F. True. Boolean(2) = true.
15. == checks equality with type conversion, while === checks the equality without type conversion.
16. [Q16](part1b-qiestion16.js)
17. [2, 4 ,6]. In function modifyArray, for each element in the input array, it pushes the result of calling doSomething on that element. Function doSomething return 2 times the input, so the new array newArr contains every element in the input array multiplied by 2. Since the for loop goes from index 0 to index length - 1, the elements in newArr has the same sequence as the input array.
18. [Q18](part1b-qiestion18.js)
19. It will print one 1 and one 4 while printing 3s without intervals and printing a 2 every second.
