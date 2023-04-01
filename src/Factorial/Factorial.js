import React, { useState, useEffect } from 'react';
import './Factorial.css';
import NavigationBar from "../NavBar/NavigationBar";
import LeftBar from './LeftBar';


const Box = ({ value, animated }) => (
  <div className={`box${animated ? ' animated' : ''}`}>
    {value}
  </div>
);

const FactBoxes = ({ n }) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const factorial = (num) => {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    };

    const newBoxes = [];
    for (let i = 0; i <= n; i++) {
      newBoxes.push({
        value: factorial(i),
        animated: false
      });
    }

    let index = 0;
    const timer = setInterval(() => {
      if (index < newBoxes.length) {
        newBoxes[index].animated = true;
        setBoxes([...newBoxes]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 500);

    return () => clearInterval(timer);
  }, [n]);

  return (
    <div className="fact-boxes">

      {boxes.map((box, index) => (
        <Box key={index} value={box.value} animated={box.animated} />
      ))}
    </div>
  );
};

const Factorial = () => {
  const [n, setN] = useState(0);

  return (
    <>
    <LeftBar/>
      <div className="app">
      <div>
        <NavigationBar/>
        <h1 className='titleoffactorial'>Factorial</h1>
        <div className="theory-factorial">
        <h3 id="first">Introduction</h3>Factorial is a mathematical function
        that multiplies a given number by all of the positive integers less than
        it. The factorial of a non-negative integer n is denoted by n!, and is
        defined as:<br></br>
        n! = n x (n - 1) x (n - 2) x ... x 2 x 1<br></br>
        For example, the factorial of 5 is:<br></br>
        5! = 5 x 4 x 3 x 2 x 1 = 120<br></br><br />
        <h3 id="second">Recursive Algorithm</h3> A common way to calculate the
        factorial of a number is by using a recursive algorithm. Here's an
        example implementation in JavaScript:<br></br>
        This function takes a non-negative integer n as input and returns the
        factorial of n. If n is 0, the function returns 1 (since 0! is defined
        to be 1). Otherwise, the function multiplies n by the factorial of n-1.
        <br /><br />
        <h3 id="third">Iterative Algorithm</h3>
        Another way to calculate the factorial of a number is by using an
        iterative algorithm. Here's an example implementation in JavaScript:
        <br></br>
        This function takes a non-negative integer n as input and returns the
        factorial of n. It initializes a variable result to 1, and then uses a
        for loop to multiply result by all of the integers from 2 to n. Finally,
        the function returns result.
        <br /><br />
        <h3 id="fourth">Efficiency</h3>
        Both the recursive and iterative algorithms for calculating factorials
        have a time complexity of O(n), since they perform a constant amount of
        work for each integer between 1 and n. However, the iterative algorithm
        is generally faster and more memory-efficient than the recursive
        algorithm, since it doesn't require creating new function calls on the
        call stack.
        <br /><br />
        <h3 id="fifth">Properties of Factorial</h3>Factorials have a number of
        interesting mathematical properties, such as:
        <ul>
          <li>
            n! is always divisible by all of the integers between 1 and n,
            inclusive.
          </li>
          <li>
            The double factorial of a number is the product of every other
            positive integer up to and including that number. For example, 5!! =
            5 x 3 x 1 = 15.
          </li>
          <li>
            The factorial of a non-negative integer n can be expressed in terms
            of the gamma function, which is a generalization of the factorial
            function to non-integer values.
          </li>
        </ul>
        <h3 id="sixth">Applications of Factorial</h3>Factorials are used in a
        variety of mathematical and computational applications, such as:
        <ul>
          <li>
            Combinatorics: The number of ways to arrange a set of n distinct
            objects is given by n!.
          </li>
          <li>
            Probability: The number of ways to choose k objects from a set of n
            distinct objects is given by n! / (k! * (n-k)!).
          </li>
          <li>
            Calculus: The Taylor series expansion of the exponential function
            e^x is given by the sum of x^n / n!, where n ranges from 0 to
            infinity.
          </li>

          <li>
            Cryptography: Factorials can be used in some types of encryption
            algorithms to generate large prime numbers.
          </li>
        </ul>
        Overall, the factorial function is a fundamental mathematical concept
        with a wide range of applications and properties.
        <br /><br />
        <h3 id='visualize'>Visualizer</h3>
        </div >
        <div className='inputsofn'>
          <label className='n-inputt' htmlFor="n-input">Enter n:</label>
          <input type="number" id="n-input" value={n} onChange={(e) => setN(Number(e.target.value))} />
          <FactBoxes n={n} />
        </div>
        <br />
      </div>
    </div>
    </>
    
  );
};

export default Factorial;

