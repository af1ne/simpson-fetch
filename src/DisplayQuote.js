import  React  from  'react';

const  DisplayQuote = ({ simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt={simpson.character}  />
            <ul>
                <li>Character : {simpson.character}</li>
                <li>
                    Quotes : {simpson.quote} {' '}
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;