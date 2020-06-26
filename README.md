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

## Question 13
