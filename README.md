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