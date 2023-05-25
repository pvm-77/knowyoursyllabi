
import './App.css';
import CourseCard from './components/CourseCard';


function App() {

  const course = {
    title: 'Descriptive Statistics',
    code: "STBSMJ1001",
    units: [
      {
        id: '1',
        name: 'UNIT 1',
        topics: [
          { id: '1', name: 'Definition and scope of Statistics' },
          { id: '2', name: 'concepts of statistical population and sample from apopulation' },
          { id: '3', name: 'quantitative and qualitative data' },
          { id: '4', name: 'frequency and non-frequency data' },
          { id: '5', name: 'scales of measurement- nominal, ordinal, interval and ratio' },
          { id: '6', name: 'Presentation: tabular and graphical,including histogram and ogives' },
        ]
      },
      {
        id: '2',
        name: 'UNIT 2',
        topics: [
          { id: '1', name: 'Measures of Central Tendency: mathematical and positional' },
          { id: '2', name: 'Measures of Dispersion: range,quartile deviation, mean deviation, standard deviation, coefficient of variation,' },
          { id: '3', name: 'Moments,absolute moments, factorial moments' },
          { id: '4', name: 'skewness and kurtosis,' },
          { id: '5', name: 'Sheppard’s corrections' },
          { id: '6', name: 'box plot' },

        ]
      },
      {
        id: '3',
        name: 'UNIT 3',
        topics: [
          { id: '1', name: 'Bivariate data: Scatter diagram' },
          { id: '2', name: 'Product moment correlation coefficient and its properties' },
          { id: '3', name: 'Correlation ratio, Rank correlation including repeated ranks' },
          { id: '4', name: 'Multiple and partial correlation(3 variables only).' },


        ]
      },
      {
        id: '4',
        name: 'UNIT 4',
        topics: [
          { id: '1', name: 'Concept of regression' },
          { id: '2', name: 'Simple and multiple regression,' },
          { id: '3', name: 'principle of least squares' },
          { id: '4', name: 'residuals and their properties ' },
          { id: '5', name: 'fitting of linear regressions' },
          { id: '6', name: 'power curves ' },

        ]
      },
    ],
    logo: 'imagerirl',
    // books: [{ id: 'bookid', title: 'bookname', authors: ['name1', 'name2'] }]
    suggestedReading: [
      {
        title: "Fundamentals of Statistics",
        authors: [
          "Goon A.M.",
          "Gupta M.K.",
          "Dasgupta B."
        ],
        year: "2002",
        edition: "8th",
        publisher: "The World Press",
        location: "Kolkata"
      },
      {
        title: "John E. Freund’s Mathematical Statistics with Applications",
        authors: [
          "Miller, Irwin",
          "Miller, Marylees"
        ],
        yea: "2006",
        editio: "7th",
        publishe: "Pearson Education",
        locatio: "Asia"
      },
      {
        title: "Introduction to the Theory of Statistics",
        authors: [
          "Mood, A.M.",
          "Graybill, F.A.",
          "Boes, D.C."
        ],
        year: "2007",
        edition: "3rd",
        publisher: "Tata McGraw-Hill Pub. Co. Ltd.",
        location: "India"
      }
    ]


  }

  return (
    <>
      <div className='card-wrapper'>
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
        <CourseCard course={course} />
      </div>
    </>
  );
}

export default App;
