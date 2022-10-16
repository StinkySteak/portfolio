import './App.css';
import AboutMe from './Pages/AboutMe';
import Footer from './Pages/Footer';
import Main from './Pages/Main';
import Project from './Pages/Project'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Accomplishment from './Pages/Accomplishment';
import Skill from './Pages/Skill';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCkHmcnom1AZYSbgKmAs08srj5DRLOSKk8",
    authDomain: "portfolio-570f1.firebaseapp.com",
    projectId: "portfolio-570f1",
    storageBucket: "portfolio-570f1.appspot.com",
    messagingSenderId: "876298032126",
    appId: "1:876298032126:web:8d89724a7ec355a7e666af",
    measurementId: "G-FQG10PPVJ2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <>
      <Main />
      
      <AboutMe/>
      <Skill/>
      <Project/>
      <Accomplishment/>
      <Footer/>
    </>
  );
}

export default App;
