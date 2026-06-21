# PrepWise Lite 📚✨

**PrepWise Lite** is a simple AI-powered study planner built with **Next.js**.
It helps students create a personalized study schedule by entering their subject, topics, and exam date.

This project is designed to make exam preparation more organized, efficient, and student-friendly.

---

## 🚀 Project Overview

PrepWise Lite allows students to:

* Enter a subject name
* Add study topics
* Select an exam date
* Generate a smart study plan
* Save and manage study schedules
* Use AI support to create better preparation plans

The main goal of this project is to help students plan their studies in a structured way instead of studying randomly at the last moment.

---

## 🎯 Purpose of the Project

Many students struggle with time management before exams.
PrepWise Lite solves this problem by generating a study schedule based on the available time and topics.

This project is also useful for learning how to build a full-stack AI-powered application using modern web technologies.

---

## 🛠️ Technologies Used

This project uses the following technologies:

* **Next.js** – React framework for building full-stack web applications
* **React** – For creating user interfaces
* **Tailwind CSS** – For styling the application
* **Supabase** – For database and backend services
* **Groq API / AI Model** – For generating study plans
* **Vercel** – For deployment

---

## ✨ Main Features

* User-friendly study planner interface
* AI-generated study schedule
* Topic-based planning
* Exam date-based schedule generation
* Database storage using Supabase
* Responsive design for desktop and mobile devices
* Clean and modern UI

---

## 📂 Project Structure

```bash
prepwise-lite/
│
├── app/                  # Next.js app router files
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
│
├── components/           # Reusable UI components
│
├── lib/                  # Utility files and configurations
│
├── public/               # Static assets
│
├── .env.local            # Environment variables
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## ⚙️ Installation and Setup

Follow these steps to run the project on your local computer.

### 1. Clone the Repository

```bash
git clone https://github.com/extremenavigatorplus-jpg/Prepwise-lite.git
```

### 2. Go to the Project Folder

```bash
cd Prepwise-lite
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a file named `.env.local` in the root folder of the project.

Add your environment variables like this:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GROQ_API_KEY=your_groq_api_key
```

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
GROQ_API_KEY=your-groq-api-key
```

> Important: Never upload your `.env.local` file to GitHub.

Make sure `.env.local` is included in `.gitignore`.

```gitignore
.env
.env.local
```

---

## ▶️ Run the Development Server

After installing dependencies, run the project:

```bash
npm run dev
```

Then open your browser and go to:

```text
http://localhost:3000
```

Now you can see the PrepWise Lite application running locally.

---

## 🧪 Available Scripts

### Start development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Run linting

```bash
npm run lint
```

---

## 🌐 Deployment

This project can be deployed easily using **Vercel**.

### Deploy Steps

1. Push the project to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import the GitHub repository
4. Add the required environment variables
5. Click **Deploy**

After deployment, Vercel will provide a live website link.

---

## 📌 How the App Works

1. Student enters the subject name
2. Student enters the topics they need to study
3. Student selects the exam date
4. The system sends the data to the AI model
5. AI generates a study schedule
6. The generated plan is displayed to the student
7. The student can save or use the plan for exam preparation

---

## 📸 Screenshots

Add screenshots of your project here.

```md
![Home Page](./public/screenshots/home.png)
![Study Planner](./public/screenshots/planner.png)
```

---

## 🔮 Future Improvements

Possible future improvements for this project:

* User login and registration
* Study progress tracking
* Daily reminder system
* Calendar integration
* PDF download option for study plans
* More advanced AI study recommendations
* Dark mode support

---

## 👨‍💻 Author

Developed by **Asith Pasandul**

GitHub: [extremenavigatorplus-jpg](https://github.com/extremenavigatorplus-jpg)

---

## 📄 License

This project is for educational purposes.
You can modify and improve it for learning and personal use.

---

## 🙌 Acknowledgement

This project was created as part of a Full Stack Web Development learning project using Next.js, Supabase, AI integration, and Vercel deployment.
