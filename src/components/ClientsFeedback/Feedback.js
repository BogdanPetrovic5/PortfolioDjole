import './Feedback.css'
import Quote from './images/quotes.png'
import Man from './images/man.png'
import React, { useEffect, useState, useRef } from 'react';
import Left from './images/left.png'
import Right from './images/right.png'
function Feedback(){
    const articlesData = [
        {
          testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Bogdan Bogdanic",
          image: './images/man.jpg',
        },
        {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Bogdan Bogdanic",
          image: './images/man.jpg',
          },
        
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Bogdan Bogdani",
          image: './images/man.jpg',
          },
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Djole Djokica",
          image: './images/man.jpg',
          },
        
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Djole Djokica",
          image: './images/man.jpg',
          },
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Djole Djokica",
          image: './images/man.jpg',
          }
    ]
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [windowHeight, setWindowHeight] = useState(window.innerHeight);


useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const [ArrayToShow, setArrayToShow] = useState([]);
const [LowerEdge, setLowerEdge] = useState(0);
const [HigherEdge, setHigherEdge] = useState(0);

const targetDivRef = useRef(null);



useEffect(() => {
    if (windowWidth <= 839) {
        setLowerEdge(0);
        setHigherEdge(1);
        
    } else {
        setLowerEdge(0);
        setHigherEdge(3);
       
    }
}, [windowWidth]);
useEffect(() => {
    const updateArrayToShow = () => {
        const newArrayToShow = articlesData.slice(LowerEdge, HigherEdge);
        setArrayToShow(newArrayToShow);
    };

    updateArrayToShow();
}, [LowerEdge, HigherEdge, articlesData]);

const updateEdges = (direction) => {
    const step = windowWidth <= 839 ? 1 : 3;
    if (direction === 'next' && HigherEdge < articlesData.length) {
        setLowerEdge(LowerEdge + step);
        setHigherEdge(HigherEdge + step);
        
    } else if (direction === 'prev' && LowerEdge > 0) {
        setLowerEdge(LowerEdge - step);
        setHigherEdge(HigherEdge - step);
       
    } else if (direction === 'prev' && LowerEdge === 0) {
        setLowerEdge(articlesData.length - step);
        setHigherEdge(articlesData.length);
       
    } else if (direction === 'next' && HigherEdge === articlesData.length) {
        setLowerEdge(0);
        setHigherEdge(step);
        
    }
};
    return(
        <div className="Feedback-Container">
           
            <div className='Feedback-Banner'>
                <img className='Left Navigation-Icon' src={Left} onClick={() => updateEdges('prev')}/>

                <img className='Right Navigation-Icon' src={Right}onClick={() => updateEdges('next')}/>
                <div className='Feedback-Banner-Title'>
                    <div>

                    </div>
                    <h2>
                        Pohvale
                    </h2>
                </div>
                <div className='Feedback-Banner-Description'>
                    <h1>Rezultati mojih klijenata</h1>
                </div>
               
               <div className='Results  ${slideDirection}`' ref={targetDivRef}>
               {ArrayToShow.map((article, index) => (
                     <div className='Result-Item'>
                     <div className='hr'>

                     </div>
                     <div className='Result-Testemonial'>
                         <div className='Quote-Icon'>
                             <img src={Quote}>
                             </img>
                         </div>
                         <div className='Quote'>
                             <p>
                                 {article.testemonial}
                             </p>
                         </div>
                     </div>
                     <div className='Result-Item-Description'>
                         <div className='Result-Item-Picture'>
                             <img src={Man}></img>
                         </div>
                         <div className='Result-Item-Name'>
                             <h2>{article.name}</h2>
                         </div>
                     </div>
                 </div>

               ))}
                   
                    
               </div>
               <div className='Contact-Me-Banner'>
                    <h2>
                        Zelis i ti da radis sa mnnom? Imas neka dodatna pitanja? Popuni formu ispod!
                    </h2>
               </div>
            </div>
        </div>
    )
}
export default Feedback