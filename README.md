## Question 1
Using GitHub is one of the most common source control remote repositories for developers. The distributed version-controls system helps developers track changes in source code during development and is designed for coordinating work among many developers. 

If the project is not already in existence, then the first step is the initialise a new project with github. After creating a new project directory in the command line, a new repository can be made from the + > “New Repository” button on github.com. Your are then given a form where the name and description fields can be filled out. Keep the repository public to allow other to contribute. The “Create Repository”. You are then taken to the new repository where instructions are given on how to connect to remote repo to directory you create in the terminal. One option is to copy the code starting with “echo” (often the first option) into the command line, in the project directory. You can then add, commit and push, and the directory is ready for work.

The next step is to set up the team. It is easiest to add team members as collaborators to the repo. This can be done in the repo’s settings > “Collaborators” > “Add Collaborator”. They will then receive and email, then will be listed a collaborators. As a collaborator, it is best to clone the repo to your Github rather than forking it so that all members are working on the same repository. 

When contributing code to a large project, the procedure is often to make changes to a separate branch which can be merged (or rejected) to the master branch. To do this, you must first fork the repo to your own GitHub account. Then clone the repo to your local machine. You do this by copying repo’s URL into a suitable folder on your device. 
```
git clone <URL>
```
It is a good idea here to create an upstream remote which will allow you to pull in changes made to the source, and avoids merge conflicts. Then you must create a branch to work on. 
```
git checkout -b <your-branch-name>
```
While working you should be committing and pushing changes to your branch with meaningful commit messages.
```
git add .
git commit -m “meaningful commit message”
git push origin <your-branch-name>
```
Once you have made the desired changes on your branch, you should create a pull request on GitHub via the “Compare and Pull Request” button. Here the team can visualise the changes you’ve made to the code, and comments can be added to help the team understand what has been changed. Once your code has been reviewed, and agreed by the team, the person responsible can merge your code into the master branch, or alternatively reject the pull request, and the branch you were working on is deleted from the repo. 

References: 
- https://medium.com/@jonathanmines/the-ultimate-github-collaboration-guide-df816e98fb67
- https://code.tutsplus.com/tutorials/how-to-collaborate-on-github--net-34267

## Question 2
According to the International Organisation for Standardization (ISO) and the Internation Electortechnical Commission (IEC) information technology standards, the most important aspects of quality software are functionality, reliability, usability, efficiency, maintainability and portability.

1. <b>Functionality:</b> The essential purpose of any product or service. It can be broken down into a set of attributes that relies on the existence of a set of functions and their specified properties. For example, a sale order processing system should be able to record customer information. This can be broken down into many functions such as recording sales of product, price and quantity, calculating total price, calculating sales tax, etc. The functions of the app must satisfy the stated or implied needs of the product. Functionality can be broken down into many sub categories including suitability, accuracy, interoperability, security and functionality compliance. 
2. <b>Reliability:</b> The capability of the software to maintain its service provision under defined conditions for a defined period of time. For example, if the network goes down for 1 minute, the system should be able to recover and continue functioning after that 1 minute. Reliability can be broken down into sub categories including maturity, fault tolerance, recoverability, reliability compliance, and recently added: availability. 
3. <b>Usability:</b> The effort required by the stated or implied users to use the software. For example placing commonly used features in prominent locations on the screen does not affect functionality, but affects the usability. The ISO breaks down usability into several subcategories such as understandability, learnability, operability, attractiveness, and usability compliance as well as user error protection and accessibility.  
4. <b>Efficiency:</b> The relationship between the amount of resources used and the level of performance of the software. This may include the amount of disk space, memory or bandwidth used by an application for a given function, or how quickly a function can be completed. An example is using a merge sort which is more efficient than a bubble sort. The ISO breaks down efficiency into several subcategories such as time behaviour, resource utilisation, and efficiency compliance. 
5. <b>Maintainability:</b> The effort required to make modifications to the software. This characteristic addresses the ability to identify and fix faults in software. It is impacted by the code’s readability, complexity and modularisation. The ISO breaks down maintainability into several subcategories such as analysability, changeability, stability, testability, and maintainability compliance. 
6. <b>Portability:</b> The ability of the software to be transferred from one environment from one environment to another. Implementation practices and object oriented design can contribute to the portability of a given software. The ISO breaks down portability into several subcategories including adaptability, installability, co-existence, replaceability and portability compliance. 


References:
- https://www.tutorialspoint.com/software_testing/software_testing_iso_standards.htm
- http://www.sqa.net/iso9126.html

## Question 3

MERN stands for MongoDB, Express JS, React JS and Node JS. The MERN stack is a combination of all of these technologies used to build complex web applications using JavaScript. MERN stack is an open source full stack development framework meaning it provides entire front-end to back-end development components.

<b>MongoDB</b>

Mongo is used for database management in the MERN framework. It is an open source, cross platform, NoSql DBMS. It is a document oriented database meaning that data is saved using collections and documents, as opposed to a relational database which stores data in tables and rows. This results in faster and easier date integration within applications. Data is stored in binary JSON format allowing for fast exchange between client and server. It can also be used for storage of large volumes of data, an important feature for scalability of applications. The backend of the application, Node.js Express, exports REST APIs and interacts with the database using Mongoose ODM.

<b>Node JS</b>

Node JS is used for to build out the foundations of the back-end of web applications. It is an open-source, cross platform, JavaScript runtime environment, and runs JavaScript code on the server side, outside of the browser. 

<b>Express JS </b> 

Express is involved in the back-end development of MERN applications. As a web framework to Node JS, it runs on top of the Node JS managing servers and routes. It is a server side, backend JavaScript framework that simplifies Node helping to write simplified, fast and secure applications.

<b>React JS</b>

React is used to build out the front-end of MERN applications. It is an open source JavaScript library usually used for single page applications. It enables developers to modify or edit page views without having to refresh the page. A React app is built using components that are composed into complex user interfaces. React components user the render method to input data and return what’s to display. Written is JSX, Babel compiles it to regular JavaScipt. Data can be passed into React components using props. React Client uses Axios to send HTTP Requests and retrieve HTTP Responses. React Router is used for navigating to pages.

References:
- https://medium.com/@digimktg/what-is-mern-stack-9c867dbad302
- https://reactjs.org/
- https://bezkoder.com/react-node-express-mongodb-mern-stack/


## Question 4
To develop a website, team members will need to have a number of hard skills. 

1. <b>Programming:</b> While obvious, it is important the at teams knows how to program. They should know how to use HTML and CSS at the very least, however additional backend, languages and frameworks, depending on the clients needs would be useful. 
2. <b>Design Basics:</b> The website should look nice. As a representation of the client’s business, it is important the website looks professional, modern and attractive, to the client’s specifications. The team should be able to resize image appropriately and place content/features in effective places for the best user experience. The team should also understand responsive design for the web so that the website can be viewed on all devices. Design can be implemented using a plain CSS or frameworks such as Bootstrap. 
3. <b>Security:</b> The site will need to be protected from any potential attacks. It is important that the team has an understanding of common security measures that should be taken when building modern websites such as subresource integrity and sanitising user input.
4. <b>Authentication:</b> The team should know who to implement user authenitcation/authorisation, such as using Devise or Rollify, so permissions are set within the website and users are only accessing pages/features intended for them. This also allows the admin (e.g. business owner) to access content management pages and be able to update the content of the website themselves without the need of a developer every time. It is important the the client has autonomy over their website content after the development team has left.
5. <b>Source Control:</b> The team should understand standard source control procedures such as always keeping the master branch working, developing on feature specific branches, and collaborating effectively to avoid merge conflicts. It is important that the project can be rolled back to a previously working version if something breaks the website during development, so that the team still has a working product when the client needs it.
6. <b>Payment Systems:</b> Most businesses would want to allow customers to make purchases on their website, therefore it is important the team understand how to implement payments systems, such as Stripe, into the website.
7. <b>Testing:</b> The team should know how to test the website and its features effectively, to ensure that it is all working as per the client’s requests.
8. <b>Deployment:</b> The team must be able to put the website live on the internet for customers to access and view, using services such as Heroku. Some basic knowledge of Search Engine Optimisation (SEO) will also help users access the site. 

The team will need to hard skills to technically collaborate on a project, such as how to use GitHub teams,  a number of soft skills will also be essential to working on a project, particularly in a team, for a professional client. The foundations of team work are built on strong communication skills within the team and with the client. It is important that everyone involved is able to explain what needs to be done, and to listen and comprehend what others are trying to say. Particularly when explaining complex concepts such as software, it is essential that the team members can communicate effectively, to save time and ultimately to produce to best product for the client. Strong written communication skills are also necessary to write quality documentation. Built on the foundations of strong communication, the team must have effective collaboration skills. Collaboration allows teams to produce something better than the sum of what each of the members could on their own. This is achieved by leveraging each others strengths, helping each other with weaknesses and knowing when to ask for help and when to step up into leadership role within the team. When assuming a leadership role, it is important the team members understand effective delegation, feedback and motivation to best support the team. 

Additionally, each team member must have effective time management skills and accountability to stay on track with the rest of the team. The team must be able to plan the project effectively, so that each member understands what they are doing and how the project will come together. They must also know how much time to spend on a problem before going to another team member to ask for help. For this reason, all members must also be flexible, so that help can be given quickly, or tasks can be reallocated as needed. Furthermore, each team member must have a strong ability to learn, particularly when developing software. They may be implementing a feature they have not implemented before, so will have to be able to pick up new skills quickly to get the job done. This will also involve degrees of creativity and critical thinking to build software in the most effective ways. 

References:
- https://enterprisersproject.com/article/2019/10/10-soft-skills-it-teams
- https://onextrapixel.com/12-skills-you-need-to-develop-a-website/

## Question 5
In regards to my portfolio project, there were a number of technical skills were required to complete the project and overcome challenges.
1. <b>HTML:</b> I needed to know how to write HTML in order to build the basic structure of the page. HTML is the basic markup language for creating webpages.
2. <b>CSS:</b> Knowing how to code the styling to the website was essential to completing the project, so that the contents of the page were positioned correctly, it overall was nice to look at. On top of design skills, being able to implement ideas using CSS is essential to building a website.  
3. <b>Security:</b> Some basic understanding of security is important for protecting the website and its users from malicious attack. Specifically for this project, an understanding of how to implement sub-resource integrity was necessary to ensure that the exact version of the css file intended is pulled in when loading the website, rather than any malicious code.
4. <b>Deployment:</b> I needed to know how to make the website available on the internet, therefore it was necessary to know how to turn code I’d written on my machine into a website available on the web by deploying it.
5. <b>Design:</b> At least some basic design skills are necessary to build an effective website. First by understanding how to build wireframes from which a website can be build. As well as how to design an easy user experience. 
6. <b>Responsiveness:</b> This means the website should work on all devices and browsers. A strong understanding of flex box and mobile first design is necessary, as well as a good understanding of the differences between browsers.
7. <b>Understanding Accessibility:</b> It is necessary that websites are built so that everyone can use them. For example, this means a strong understanding of semantic tags for html. Effective colour schemes are used so that anyone can see the images. Alt options for images should be used if the image doesn’t load, or the user cannot see them
8. <b>Version Control:</b> This was required to ensure if a change is made at any stage during the project that breaks the code, I can roll back to the previously working version. This also is achieved by working on feature branches which are only pushed to the master branch when the feature is complete and working with the main program. This ensures that the master branch is always working and the risk of having to roll back is decreased. 

There were also a number of soft skills that helped my overcome the challenges while completing the project.
1. <b>Time management:</b> As we only had one week to complete the task, effective time management skills were required to complete the task. It was important to plan my time effectively to have a minimum viable product completed early on, to which features and content could be added. It was also important that I didn’t spend too much time of small tasks that did not contribute too much to the project such as deciding on fonts or colour schemes, allowing more time to be allocated to tasks such as adding security, features or complexity to the website.
2. <b>Ability to Learn: </b> It was vital that I was able to take the little knowledge I had on building websites and expand on it to build a complete product. While we had learned a lot in class, there were many features that I wanted to add which required me to be resourceful, looking for information on the web, and learning it well enough to apply it to my application. This included learning how to build a hand burger navigation button.
3. <b>Understanding the target audience:</b> This was important in building all aspects of the website. Every button, every piece of content, and all of the functionality of the website had to be built with the intent to show the website to a potential employer or client. 
4. <b>Creativity:</b> The design and structure of a website is ultimately a creative process, and being able to build something unique is important for a portfolio to standout. 

## Question 6

1. <b>HTML:</b> I believe that overall, I have a good understanding of how to write HTML. A couple of issues with my HTML were that paths had spaces in them which was not allowed in html, there were some unclosed tags, and I put name attributes in nav and section elements which is not allowed. This will be improved for future projects. Additionally, I am looking to learn more ways to write data driven HTML using rails or react so that the page isn’t made of pure static HTML which is difficult to change.
2. <b>CSS:</b> I believe I wrote working CSS for the knowledge that I had at the time, however, there are a number of improvements that should be made. Firstly, it was all in one document in no particular order, which became difficult to navigate and manage. I also did not consider how my styling would look on other browsers other that chrome. In the future, this is something that I definitely need to consider when writing CSS. Additionally, using preprocessors, or SCSS to help write cleaner and more effective CSS is an improvement I want to make in the future.
3. <b>Security:</b>  I believe I have a very limited understanding of cyber security. For the purpose of this project, I was able to implement subresource integrity for all linked stylesheets using sha-512, and multiple other hashes, to protect the integrity of stylesheets being pull in. This however is only one aspect of security and it would be a good idea to learn more about this topic for future projects. 
4. <b>Deployment:</b> For this project I was able to successfully deploy the project using GitHub pages. The next step for this skill is to use a custom domain and to maybe consider and compare other deployment options for future projects.
5. <b>Design:</b> I made very intentional design choices based on websites I liked and built a smooth user experience. Some of the colour choices lead to accessibility issues, and some of the design on the mobile screen I was never able to implement. However, the surprisingly effective use of drop shadow and intuitive location of navigation buttons at the top and bottom of the screen overall lead to a nice design, given my limited design skills. I still think the design should be updated for future versions of my portfolio to keep the website looking modern, and in line with my current skills.
6. <b>Responsiveness:</b> I made use of both flexbox and grid to build a responsive design of my website. I kept the layout of the website itself very simple as to not rely to heavily on the use of flexbox, which I was not confident with at the start of the project. The hamburger menu that I built for the mobile view didn’t work on the index.html page which limited the responsiveness of that page. I feel that my understanding of flexbox needs work, but was implemented well enough for this project.
7. <b>Understanding Accessibility:</b> I used semantic tags throughout the website however, there were some major accessibility issues which were overlooked. Firstly, in the colour scheme, when hovering over links, they turned grey which was low contrast to the back ground and made them hard to see. Additionally, I used Font Awesome icons for many links, including social links, which did not have text, so aria-labels should have been added for screen readers. I have some major gaps in my understanding of accessibility. Fixing these issues in future projects is a good start, however, researching more into accessibility best practices is a good idea moving forward.
8. <b>Version Control:</b> For this project I used GitHub for version control and built features on separate branches to the master branch. This was an effective way to ensure that my website always had a working version on the master branch. Towards the end of the project when making small changes I stopped using this method, and ran into many issues when this began to break. Additionally, as I finished with a branch, I didn’t delete them which started to clutter my repo. Fixing these issues is a improvement that should be made for future projects particularly when working with other people. 


9. <b>Time management:</b> I believe my time management for this project was effective. I built a minimum viable product, consisting of the pages, minimal styling and navigation between the pages within the first couple of days, then spent the rest of the time available building on that. This included adding more interesting styling, icons for links, some content and pictures. By giving myself deadlines I never completed something I was 100% happy with, however, I was able to move on and finish a complete project by the end of the time .
10. <b>Ability to Learn:</b> This project involved a lot of learning as I go scenarios. For example, learning how to build the hamburger navigation button required watching tutorials on YouTube and some articles to get it (mostly) working. This took an couple of hours towards the end of the week, however I was able to pick up the skills necessary to build something I had never built before. I did the same thing with learning how to embed a tweet. This required doing a google search and looking through a few websites before finding what I needed. Through this project I became more resourceful, and my ability to learn quickly improved. 

## Question 7: Control Flow

Control flow is the order in which statements are executed in a script. JavaScript contains many control flow statements such as if, else and break that determine what section of code in run in a program at any one time. 

For example, the code in a if statement will run if the statement between the parentheses is true. For example:

``` javascript 
const x = 3
if (x === 3) {
  console.log("x is 3!")
}
```

This code logs 'x is 3!' to the console, because the statement between the parentheses works out to true. However, if x was assigned to 1 at the start of the code, the statement between the parentheses would be false, and the code would not run. An else statement can be used to run code, when the statement is false. For example:

``` javascript 
const x = 2
if (x === 3) {
  console.log("x is 3!")
} else {
  console.log("x is not 3")
}
```

In this case, if the statement is true, the first block of code is run, if the statement is false, the code after the else statement is run. The above code will therefore log "x is not 3" to the console. This can also be written as a ternary operator, which will achieve the same thing with fewer lines of code. If the statement before the question mark evaluates to true, the code before the colon is run, if the statement is false, the code after the colon is run. 
``` javascript 
console.log(x === 3 ? "x is 3!" : "x is not 3")
```

More cases can be tested using an else if statement. For example:

```javascript
const x = 2
if (x === 3) { //condition 1
  console.log("x is 3!") // block 1
} else if (x === 2) { // condition 2
    console.log("x is 2!") // block 2
} else {
    console.log("x is not 2 or 3") // block 3
}
```

In this case, block 1 is run as normal if condition 1 is true. The second block is run if condition 1 is false and condition 2 is true. Block 3 is run if both condition 1 and 2 are false. In this case, the code above will log 'x is 2!' to the console as condition 1 is false, condition 2 is true and block 2 is run.

When these if else control flow structures start to get more complex, we can use switch statements to test several conditions. 

```javascript
const x = 2
switch(x) {
    case (3):
        console.log("x is 3!")
        break
    case 2:
        console.log("x is 2!")
        break
    default:
        console.log("x is not 2 or 3")
  }
```

This code works by evaluating the switch expression once, then comparing the value of the expression to each case. If there is a match, the associated block of code is executed. If there is not match, then teh default code is executed. In this case, the code logs "x is 2!" to the console. If x was defined as 1, the default code would be run loggin "x is not 2 or 3" to the console. The break keyword breaks JavaScript out of the switch block. So if there were, 2 cases that evaluated to true, only the first one would be run. For instance:

```javascript
const x = 2
switch(x) {
    case 2:
        console.log("x is 2!")
        break // line 5
    case 2:
        console.log("x is 2 again!")
        break
    default:
        console.log("x is not 2 or 3")
  }
```

Here the break keyword on line 5, means that only 'x is 2!' is logged to the console. The second break is not needed as the block ends there anyway. Removing the break keywords:
```javascript
const x = 2
switch(x) {
    case 2:
        console.log("x is 2!")
    case 2:
        console.log("x is 2 again!")
    default:
        console.log("x is not 2 or 3")
  }
```
This will log both 'x is 2!' and 'x is 2 again!' to the console, as both matches have been found and run without being stopped by a break statement. 

Control flow is also has a very important application in error handling in JavaScript. In Javascript, the throw keyword will stop running the code and generate and error. For example:

```javascript
throw "GabError" // creates a custom error called GabError
console.log("code after") //this code is not run
```

Finally, try..catch statements can control program flow and generate custom error messages. Usually, these blocks are used to handle errors that occur in the program while still running the code. The 'try' keyword defines a block of code to be tested for errors while being executed, the the 'catch' keyword defines the code to be run if an error occurs in the try block. A 'finally' statement can also be used to execute code after the try and catch regardless of the result. For example:

```javascript
const x = ""
try {
    if(x == "") throw "Empty input";  //code to try
}
catch(err) {
    console.log(err) //code to handle errors => Empty Imput
}
finally {
    console.log(`Your input: ${x}`)  //code to be executed regardless of the try / catch result
}
```
In this case, the try block is run first. Since x the expression is true in the if statement, the throw statement is run. This is caught by the catch block as err. Then logged to the console by the catch block. The finally statement is then run, logging 'Your input: ' to the console. If x was defined a "hello" at the start, the try block would not have thrown an error, the catch block would not have been run, then the finally block would log "Your input: hello" to the console. 

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- https://developer.mozilla.org/en-US/docs/Glossary/Control_flow
- https://www.computerhope.com/jargon/c/contflow.htm
- https://www.w3schools.com/js/js_switch.asp
- https://www.w3schools.com/jsref/jsref_throw.asp

## Question 8: Type Coercion

Type coercion in JavaScript automatically (or implicitly) coverts values from one data type to another. This is similar to type conversion except however, type conversion can be either implicit or explicit. For example:
```javascript
const value1 = '10'
const value2 = 1
let sum = value1 + value2
console.log(sum) // => 101
```
This code logs 101 to the console, because value2 is coerced to a string, then the two values are concatenated together as strings. When given the choice between string and number, JavaScript will coerce values into a string.

Furthermore, in JavaScript you can use two equals signs to allow type coercion and three equals signs to enforce strict coercion.
```javascript
1 == “1” //=> true
1 === “1” //=> false
```
So in this code, the first line coerced the number 1 to a string, which evaluated to equal "1", however the 2nd line kept the values strictly their original data type, meaning the expression evaluates to false.

Any data type in JavaScript can be the subject of type coercion. 

References:
- https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
- https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion

## Question 9: Data Types

There are 8 basic data types in JavaScript: number, bigint, string, boolean, null, undefined, object and symbol. 

1. <b>Number.</b> This data type is for numbers of any kind: integers and floats. Many math operations can be used on this data type including addition (`+`), subtraction (`-`),  multiplication (`*`), division (`/`) and more. E.g.
```javascript
1 + 1 // => 2
10 - 1 // => 9
13 * 2 // => 26
14 % 5 // => 4
1.1 + 1.2 // => 2.3
```

In JavaScript, numbers have a precision up to 15 digits. When a number has 16 digits or greater, it will be rounded to the nearest 15.
```js
9999999999999999 // => 10000000000000000 (15 digits)
```
Additionally, floating point numbers don't always behave as expected.
```js
0.1 + 0.2 // => 0.30000000000000004
```
While we understand math in decimal (base 10), computers do this operation in binary (base 2). In binary, 0.1 is an irrational number ~0.00011001100110011001100110..., must longer than 16 digits, similarly with 0.2. So when they are added together, there is a degree of inaccuracy which can be seen in the result. 

Aside from regular numbers, there are also special numeric values in JavaScript which are also part of the Number data type: `Infinity`, `-Infinity' and `NaN`. Infinity in JavaScript represents mathematical infinity, which is greater than any number. We get it as a result of dividing by 0:
```javascript
 console.log(1/0) // => Infinity
```
Negative infinity is the opposite, representing a value lower than all numbers. `NaN` represents a computational error in JavaScript as a result of an undefined or incorrect mathematical operation e.g:
```javascript
console.log("hello"/2) // => NaN
```

<hr>

2. <b>Bigint.</b> In JavaScript, the number type cannot represent really big or really negative numbers (greater than 9007199254740991, 2<sup>53</sup>-1, or -2<sup>53</sup>-1). Most purposes can be covered, by the number data type, however, in some cases Bigints are required. A BigInt value is created by appending n to the end of an integer:
```javascript
const bigInt = 1234567890123456789012345678901234567890n;
```

<hr>

3. <b>String.</b> Strings in JavaScript must be surrounded by single quotes, double quotes, or back ticks.
```javascript
let single = "Hello"
let double = 'World'
let backTicks = `can embed ${single}`
```
Single and double quotes are considered simple quote with virtually no difference between them in JavaScript. Back ticks extended functionality quotes which are used to embed variables and expressions into a string by wrapping them in ${…}:
```javascript
let name = "Gab";
// embed a variable
console.log(`Hello, ${name}!`); // => Hello, Gab!
// embed an expression
console.log(`the answer is ${1 + 2}`); // the answer is 3
``` 

<hr>

4. <b>Boolean.</b> This type has only two values: true and false. This type is often used to store "yes" or "no" values. Such as:
```javascript
let nameIsUnique = true; // yes, name is unique
let ofLegalAge = false; // no, not legal age
```
Booleans are also the result of comparison expressions and therefore used often in control flow.
```javascript
const x = 2
console.log(x > 10) // => false
if (x < 5) {
  console.log("x is less than 5")
}
// "x is less than 5" is logged
```
<hr>

5. <b>Null.</b> Not fitting into any of the types mentioned above, in JavaScript, the null type represents “nothing”, “empty” or “value unknown”. For example:
```javascript
let name = null
```
This means that the value of the name variable is unknown. 

<hr>

6. <b>Undefined.</b> Similar to null, undefined is also its own datatype, meaning that a value is unassigned. For example, if a variable is defined, but not set equal to anything, this is will be undefined. E.g:
```javascript
let x
console.log(x) // => undefined
```
Values can also be explicitly assigned as undefined. However it is usually recommended that values are assigned null if they are unknown as undefined should be reserved for initially unassigned values:
```javascript
let x = 2
x = undefined
console.log(x) // => undefined
```

<hr>

7. <b>Object.</b> All other data type are considered "primitive" types as the only store one value. Objects however story keyed collection of various data and more complex entities. Objects cover almost every aspect of the JavaScript language. An object can be created with braces (`{...}`) or with object constructor syntax:
```javascript
let user = new Object() // "object constructor" syntax
let user = {}  // "object literal" syntax
```
A property is a key value pair, where the key is a string and the value can be any data type. The properties are comma separated in the object, and the key is followed by a colon, then the property value. Keys with many words must use quotes.
```javascript
let object = {     // an object
  name: "Gab",  // by key "name" store value "Gab"
  age: 20        // by key "age" store value 20
  "license number": 123456789
}
```
The values of the object's properties can be accessed and changed (unless the object is declared as a constant) with with dot notation. Square brackets must be used for multi word keys.
```javascript
object.name // => "Gab"
object.name = "Gabby"
object.name // => "Gabby"
object.age // => 20
object["license number"] // => 123456789
```

There are many kinds of objects in JavaScript which belong to the object type including Array to store ordered data collections, Date to store the information about the date and time, and Error to store the information about an error.

<hr>

8. <b>Symbol</b> This type is used to create unique identifiers for objects. This type was introduced in ES6, and can be created using the Symbol() function. Every symbol created by Symbol() is unique, so it has its now identity. For example: 
```javascript
const hello1 = Symbol('hello')
const hello2 = Symbol('hello')
console.log(hello1 == hello2) //=> false
```

References:
- https://javascript.info/types
- https://www.freecodecamp.org/news/how-did-i-miss-javascript-symbols-c1f1c0e1874a/#:~:text=Symbols%20are%20new%20primitive%20type,()%20which%20returns%20a%20Symbol.&text=Every%20time%20you%20call%20the,and%20unique%20symbol%20is%20created.

## Question 10: Array manipulation

Arrays can be manipulated in a variety of ways from simple array methods, to sorting and iterations.

<b>Array Methods</b>

Simple array methods in JavaScript allow you to add, remove, and change elements in arrays as well as split or merge arrays. 

* **Add** Elements can be added to the end of an array using the `push()` method and added to the start of an array using the `unshift()` method. Both methods will return the length of the new array.
```javascript
let children = ["Gab", "Leo"]
console.log(children.push("Jerome")) // => 3
console.log(children) // => [ 'Gab', 'Leo', 'Jerome' ]
console.log(children.unshift("Brian")) // => 4
console.log(children) // => [ 'Brian', 'Gab', 'Leo', 'Jerome' ]
```

The `splice()` method can also be used to add new items to an array. It takes many parameters with the first defining the position of where elements should be added, the second defining how many elements should be removed (0 if added elements). The rest of the parameters define the new elements to be added. This method returns an array of deleted items. The following is an example of added elements with the splice method:
```js
let children = ["Gab", "Leo", "Jerome"]
console.log(children.splice(2, 0, "Rebecca")) // => []
console.log(children) // => [ 'Gab', 'Leo', 'Rebecca', 'Jerome' ]
```

* **Remove** Elements can be removed from the end of an array using the `pop()` method and removed from the start of an array using the `unshift()` method. Both methods will return the element that was removed. For example:
```javascript
let children = ["Brian", "Gab", "Leo", "Jerome"]
console.log(children.pop()) // => Jerome
console.log(children) // => [ 'Brian', 'Gab', 'Leo' ]
console.log(children.shift()) // => Brian
console.log(children) // => [ 'Gab', 'Leo' ]
```

Since arrays are objects in Javascript, elements can also be deleted using the JavaScript operator delete however this leaves holes in the array and is not recommended.
```js
let children = ["Gab", "Leo", "Jerome"]
delete children[1]
console.log(children) // => [ 'Gab', <1 empty item>, 'Jerome' ]
```

The splice method can also be used to remove elements using the second parameter.
```js
let children = ["Gab", "Leo", "Rebecca", "Jerome"]
console.log(children.splice(2, 1)) // => ["Rebecca"]
console.log(children) // => [ 'Gab', 'Leo', 'Jerome' ]
```

Additionally, the `slice()` method will slice out a piece of an array into a new array without effecting the existing array. The function can take one parameter which will be the element the slice starts. The method can also take 2 parameters represting the start and the end of the slice.
```js
let children = ["Gab", "Leo", "Jerome"]

let youngerChildren = children.slice(1)
console.log(youngerChildren) // => [ 'Gab', 'Leo', 'Jerome' ]

let middleChildren = children.slice(1, children.length - 1)
console.log(middleChildren) // =>  [ 'Leo' ]

console.log(children) // => [ 'Leo', 'Jerome' ]
```


* **Change**
Array elements are access with their index number, and can be individually resassigned unless the array was initially declared as a constant. 
```javascript
let children = ["Gab", "Madeline", "Jerome"]
children[1] = "Leo"
console.log(children) // => [ 'Gab', 'Leo', 'Jerome' ]
```

* **Merge**
Arrays can be merged with the `concat()` method. This method creates a new array out of existing arrays without changing the existing arrays, returning the new array. This method can take any nubmer of arrays as arguments, as well as strings.
```js
let girls = ["Gab"]
let boys = ["Leo", "Jerome"]
let children = girls.concat(boys)
console.log(children) // => [ 'Gab', 'Leo', 'Jerome' ]
```

* **Covert to String.** Arrays can also be converted to strings using the `toSting()` method. This method will convert an array of strings to a string of comma separated values. 
```javascript
let children = ["Gab", "Leo", "Jerome"]
console.log(children.toString()) // => Gab,Leo,Jerome
```

<b>Sorting</b>

There are also a number of sorting methods that can be used on arrays which will change the order of elements.

* `sort()` will sort an array alphabetically. Note that this alters the original array.
```js
let children = ["Gab", "Leo", "Jerome"]
console.log(children.sort()) //=> [ 'Gab', 'Jerome', 'Leo' ]
console.log(children) // => [ 'Gab', 'Jerome', 'Leo' ]
```
By default, this method sorts values as strings, so a compare function must be used to order numbers correctly.

* `reverse()` will reverse the order of elements in the array. Similarly, this alters the existing array rather than creating a new one.
```js
let children = ["Gab", "Leo", "Jerome"]
console.log(children.reverse()) //=> [ 'Jerome', 'Leo', 'Gab' ]
console.log(children) // => [ 'Jerome', 'Leo', 'Gab' ]
```

<b>Iterating</b>

Iteration methods on arrays with operate on every item in the array. The functions that iterate over arrays in Javascript include:
* `forEach()` which calls a function on each item in the array. For example:
  ```javascript
  let array = ["Gab", "Leo", "Jerome"]
  function logItem (item) {
      console.log(item)
  } 
  array.forEach(logItem) // => Gab Leo Jerome
  ```

* `map()`creates a new array by performing a function on each element it the array without changing the original array. For example:
```javascript
let numbers = [1, 2, 3]
let numbersTimesTwo = numbers.map(timesTwo)

function timesTwo(number) {
  return number * 2
}

console.log(numbersTimesTwo) // => [2, 4, 6]
```

* `filter()` creates a new array with array elements that passes a test. For example:
```javascript
let numbers = [1, 2, 3, 10]
let over2 = numbers.filter(filterFunction);

function filterFunction(number) {
  return number > 2
}

console.log(over2) // => [3, 10]
```

Other iterating methods include `reduce()`, which runs a function on each array element to produce a single value running left to right, `reduceRight()`, which does the same thing running right to left. `every()` checks if all elements pass a test. `some()` checks if some elements pass a test. `lastIndexOf()` searches an array for an array value and returns its position. `find()` returns the value of the first array element that passes a test function. `findIndex()` return the index of that element. 

References:
- https://www.w3schools.com/js/js_array_methods.asp


## Question 11: Object manipulation




## Question 12
JavaScript Object Notation (JSON) is a format that is easy for humans to read and write and for machines to parse and generate. In JavaScript, JSON is a string so it is not usable in JavaScript right away. The JSON string must first be passed through the JSON.parse method. For example rake the JSON string: 
```
'[{"name":"Adele","firstAlbum":"19","biggestHit":"Hello"},{"name":"Lady Gaga","firstAlbum":"The Fame”,”biggestHit":"Shallow"}]'
```
To make this usable in JavaScript:
```javascript
let singersArray = JSON.parse( '[{"name":"Adele","firstAlbum":"19","biggestHit":"Hello"},{"name":"Lady Gaga","firstAlbum":"The Fame”,”biggestHit”:”Shallow”}]')

console.log(singersArray) => [
  { name: 'Adele', firstAlbum: '19', biggestHit: 'Hello' },
  { name: 'Lady Gaga', firstAlbum: 'The Fame', biggestHit: 'Shallow' }
]
```
The revers of the .parse() method is the .stringify() method which converts JavaScript objects into JSON strings which can be transferred more easily.
```javascript
let singersJSON = JSON.stringify([
  { name: 'Adele', firstAlbum: '19', biggestHit: 'Hello' },
  { name: 'Lady Gaga', firstAlbum: 'The Fame', biggestHit: 'Shallow' }
])

console.log(singersJSON) => [{"name":"Adele","firstAlbum":"19","biggestHit":"Hello"},{"name":"Lady Gaga","firstAlbum":"The Fame","biggestHit":"Shallow"}]
```


## Question 13
```javascript
// defines a new class called Car
class Car {
    // constructor function is called every time a new instance of Car is created, takes one parameter: "brand"
    constructor(brand) {
      // when a new instance of Car is created, the brand parameter passed in is stored as the Car's "carname"
      this.carname = brand;
    }
    // a function for the class called "present" has been defined
    present() {
      // the function will return a string. e.g. If "Toyota" passed in as the brand parameter, this function would return: 'I have a Toyota'  
      return 'I have a ' + this.carname;
    }
  }
  
  // the subclass Model has been defined. It will inherit, the constructor and present function from the parent class. 
  class Model extends Car {
    // the constructor function defined taking in two parameters: brand and mod. This function is called whenever a new instance of a Model is created.
    constructor(brand, mod) {
      // the brand parameter is inherited for the Car class. So it will also store the brand parameter in carname
      super(brand);
      // the mod parameter is stored in model. Can be accessed using .model method. 
      this.model = mod;
    }
    // defines a new function in mode called show. Called as .show()
    show() {
      // Returns a string based on the make and model of the car, by calling the present function inherited from the Car class. e.g. it Toyota was passed in as the brand and 2016 was passed in as the model, the function would return: 'I have a Toyota, it was made in 2016'
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
  // stores the array in the makes variable
  let makes = ["Ford", "Holden", "Toyota"]
  // creates a new Array with 40 elements, which are numbers from 1980 to 2019 inclusive
  let models = Array.from(new Array(40), (x,i) => i + 1980)

  // defines a function called randomIntFromInterval which takes two parameters: min and max.
  function randomIntFromInterval(min,max) { // min and max included
      // Creates a random number between 0 and 1, numtiplied it by the difference between max and min plus 1, then adds min. Then rounds down to the next interger (takes the floor). E.g. if min was 1 and max was 3, it would return 1, 2 or 3 randomly
      return Math.floor(Math.random()*(max-min+1)+min);
  }

  // begins a loop which will iterate over each of the elements of the previously defined models array.
  for (model of models) {
  
    // picks a random make from the makes array, by selecting a random index out of the possible indexes of the array and storing the value of that index in the make variable
    make = makes[randomIntFromInterval(0,makes.length-1)]
    // picks are random model from the models array, by selecting a random index out of the possible indexes of the array and storing the value of that index in model
    model = models[randomIntFromInterval(0,makes.length-1)]
     
    // defines as new instance of a Model passing in the previously defined make and model, and storing it in the variable called mycar
    mycar = new Model(make, model);
    // logs the result of the show function on the mycar variable to the console. E.g. is make was Toyota and model was 1980, it would log out: 'I have a Toyota, it was made in 1980'.
    console.log(mycar.show())
  }
  ```