import React, { useState } from 'react';





const fastheartbeat = require("./audio/fastheartbeat.mp3");
const flatline = require("./audio/flatline.mp3");
const scarylaugh2 = require("./audio/scarylaugh2.mp3");






document.addEventListener('click', musicPla);
            
function musicPla() {
    document.getElementById("audio2").play();
    document.removeEventListener('click', musicPla); 
}



const randNum = Math.floor( (Math.random() * 10) + 1 ); 
console.log(randNum)


const numObjs = [
    {
        value: 1,
        disable: false,
    },
    {
        value: 2,
        disable: false,
    },
    {
        value: 3,
        disable: false,
    },
    {
        value: 4,
        disable: false,
    },
    {
        value: 5,
        disable: false,
    },
    {
        value: 6,
        disable: false,
    },
    {
        value: 7,
        disable: false,
    },
    {
        value: 8,
        disable: false,
    },
    {
        value: 9,
        disable: false,
    },
    {
        value: 10,
        disable: false,
    },
    
];

const GuesserGame = () => {

    const [guesses, setGuesses] = useState(3);
    const [hide, setHide] = useState(true);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [nums, setNums] = useState(numObjs)
    


   

    const countDn = (guess) => {
    
        if (guesses > 0) {
            setGuesses(guesses - 1)
            
        }
        if (randNum === guess) {
            setHide(false);
            setShow2(true);
            

            
        }
        if (guesses === 1) {
        
        setHide(false);
        setShow(true);
        
        
        
        };
        const updateNums = nums.map(item => {
            if (guess === item.value) {
                return {...item, disable: true}
            }
            return item
        })
        
        setNums(updateNums)

        

      
      
    };
    

    return (
    <>
    
    {hide?<header>
        <h1>Welcome to number guesser</h1>
        <h2>guess the correct number to survive</h2>
        <p>You have 3 lives: {guesses}/3</p>
    </header>:null}
    
    {hide?<section>
        {nums.map(item => (
    
            <button key={item.value} type="button" disabled={item.disable} onClick={() => countDn(item.value)}>{item.value}</button>

        ))}

            <audio autoPlay id="audio2" key="audio2" loop>
                <source src={fastheartbeat} type="audio/mp3"/>
            </audio>
           

    </section>:null}

    {show2?<section id="correct">
        <h1>You survived... this time...</h1>
       <audio autoPlay id="audio5">
                <source src={scarylaugh2} type="audio/mp3"/>
        </audio>
    </section>:null}
    
 
    
    
    {show?<section id="wrong" >
        <h1>you have died!</h1>
        <audio autoPlay id="audio3">
                <source src={flatline} type="audio/mp3"/>
            </audio>
        
    </section>:null}
    
    </>
    );
    
};

export default GuesserGame;