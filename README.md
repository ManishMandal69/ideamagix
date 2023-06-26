# ideamagix
The Full-Stack Application is a comprehensive platform developed using React.js as the frontend framework, with Bootstrap as the styling library. The backend is powered by a Node.js server built with Express, and the database of choice is MongoDB.

The application offers a seamless user experience starting with a login page. Users can log in as instructors or admins, with admin privileges assigned by the company to a designated instructor. It's worth noting that every admin is also an instructor.

Admins are provided with exclusive features, including the ability to add courses. After adding a course, admins can create lectures with titles and dates and subsequently assign them to instructors or other users.

To ensure efficient scheduling, the application checks for lecture conflicts. If a user already has a lecture allotted on a specific day, an alert will be raised, indicating that a new lecture cannot be assigned.

The admin interface includes options to add courses and create lectures, while instructors will not see the course adding tab.

To run the app
```
1. cd frontend
   npm install
   npm start
```
```
2. cd backend
   npm install
   npm start
```

The application is hosted on netilfy and render

link:
```
admin credentials : email - abc@gmail.com
	            password - 123
```
```
user credentials : email - mandalmanish00@gmail.com
             password - 123
```
