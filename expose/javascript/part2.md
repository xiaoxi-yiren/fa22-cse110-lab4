1. 3 will be printed as var can be accessed in the whole function and value is 3 when we leave the loop.
2. 150 will be printed as var can be accessed in hte whole function, and the last assignment of discounted price is price[3] * (1-0.5) = 150.
3. 150 will be printed as var can be accessed in the whole function, and the last assignment of finalPrice is Math.round(150*100)/100 = 150.
4. an array [ 50, 100, 150 ] will be returned. This is because var can be accessed in the entire function, plus in the loop we put 3 discounted value of the input into the return list.
5. error would occur because i has scope in the for loop block, but we access it outside the for loop.
6. error would occur because discountedPrice has scope in the for loop block, but we access it outside the for loop.
7. 150 will be printed because finalPrice is declared in the whole function block, and the value has the same reason as question 3.
8. an array [ 50, 100, 150 ] will be returned. This is because discounted is declared in the whole function block, and the value has the same reason as question 4.
9. Assume that the code can run to line 11, there will be an error because i has scope in the for loop yet it is accessed outside.
10. Assume that the code can run to line 12, then 3 would be printed because length is declared in the entire function block, and accessed within.
11. The code causes an error because on line 8 we try to push into constant array, which is adjusting the array. If we can run to line 14, then the function will return empty array [] because the array is declared in the block as const.
12. A. student.name B. student['Grad Year'] C. student.greeting() D. student['Favorite Teacher'].name E. student.courseLoad[0]
13. A. '32' because first argument is string, so 2 is converted to string and perform concat
    B. 1 because minus make sense with numbers and '3' becomes 3
    C. 3 because null convert to integer is 0
    D. '3null' because null convert to string 'null'
    E. 4 because true convert to integer 1, not make sense to do boolean addition
    F. 0 because plus make sense for numbers and both convert to 0
    G. '3undefined' because makes most sense to convert to string here and undefined convert to 'undefined'.
    H. NaN because makes makes sense to convert to number and undefined becomes NaN, arithmetic with NaN is NaN.
14. A. true convert to string to number and compare we have correct relation
    B. false because both string, and in string comparison first char '2' is bigger
    C. true because convert to number they are the same
    D. false because they are not the same time and === does not allow convert
    E. false because true convert to 1 in number, 1!=2
    F. true because converting 2 to Boolean true and they are strictly equal
15. == allows type conversion before checking equality, while === does not do type conversion, just check whether the two things are equal.
17. [2,4,6] will be returned. In modifyArray, the for loop go through all elements of the input and apply function doSomething to the element before pushing them one by one into an new array, so return value is vectorized *2 apply on all elements of input.
19. 1\n4\n3\n2\n is the output.