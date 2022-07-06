# SurgerGlobal---DevelopmentProject

*In this application there are two user types, Admin and Student.* 
*From the registration form, it can create user. In this form, the userId and the password are auto generated. 
The user account is creating with a temporary password and it will be auto generated. 
The password will be sent to the user's email filled in the form before with the login link.
When user logged in to the system by using the temporary password for the first time user can fill password details and reset password for their account. 
The password is validating by the system.*

*When student logged into the system, the student can view My notes list, create notes with title and a description, update notes and delete notes.*

*Admin can view user list and view a specific user details in a popup.* 

*The Routes are protected for the admin and student.*

*All the forms are validated.*

## Backend

### To run the backend
install libraries
```
npm install
```

to start the backend of the application
```
npm start
```

The backend will be start running successfully...

to run the seed file
**go to the 'Seed' folder**
_Backend > Seed_
```
node AdminSeeder.js
```

## Frontend

### To run the frontend
install libraries
```
npm install
```

to start the frontend of the application
```
npm start
```
***Please refresh the page in the initial login because it soemtimes redirect to the oppsite page because of the routes are protected***

The frontend of the application will be started running on http://localhost:1234
