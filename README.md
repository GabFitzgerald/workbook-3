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

## Question 4

## Question 5

## Question 6

## Question 7

## Question 8

## Question 9

## Question 10

## Question 11

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
