1. Server side

   - List of all api-endpoints, with different request methods GET, POST, etc.

     1. `/api/auth`
     2. `/api/courses`
     3. `/api/users`
     4. `/api/study-plan`
     5. `/api/enroll`

   - Datebase tables
     1. User (Stores login users)
     2. Courses (Stores courses available in the system)
     3. Studyplans (Stores different study plans created by different users)
     4. Enrollments (References the courses that are added to different studyplans that are created by different users)

2. Client Side

   - React app routes

     1. `/`
     2. `/login`
     3. `/register`
     4. `/study-plans`

   - React Components

     1. `CourseComponent.jsx`
     2. `NavComponent.jsx`
     3. `StudyPlanComponent.jsx`
     4. Some form components
        - `FormComponent.jsx`
        - `FormInputComponent.jsx`
        - `FormSubmitComponent.jsx`
     5. Some route components
        - `HomeScreen.jsx`
        - `LoginScreen.jsx`
        - `RegisterScreen.jsx`
        - `StudyPlanScreen.jsx`

3. Overall
   ![Home Page](/img/home.png)

   - Users

   1. rizwan@gmail.com (Password: `abcd1234`)
   2. new@gmail.com (Password: `abcd1234`)
