import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
  
    <div className='bodyBG'>
       <div className='mainHeading'>
       <h1>Student Yearly MarkSheet</h1>
       </div>
    <div>
    <MarkSheet name="First Unit Test Exam" telMarks="51" hinMarks="45" englMarks="50" mathsMarks="30" sciMarks="42" socMarks="56" />

    <MarkSheet name="Second Unit Test Exam" telMarks="61" hinMarks="48" englMarks="55" mathsMarks="41" sciMarks="50" socMarks="60" />

    <MarkSheet name="Quarterly Exam" telMarks="69" hinMarks="53" englMarks="62" mathsMarks="50" sciMarks="59" socMarks="71" />

    <MarkSheet name="Half-Yearly Exams" telMarks="75" hinMarks="68" englMarks="71" mathsMarks="61" sciMarks="68" socMarks="84" />

    <MarkSheet name="Yearly (Annual) Exams" telMarks="86" hinMarks="80" englMarks="78" mathsMarks="88" sciMarks="99" socMarks="95" />
    

    </div>

    </div>
    
  
  );
}

export default App;
