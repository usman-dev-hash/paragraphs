import React, {useState} from 'react';
import data from './data';

function App(){

    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        /* parseInt() because input field generate it as string */
        let amount = parseInt(count);

        /* it'll always return 1st paragraph even if value <= 0 */
        if (count <= 0){
            amount = 1;
        }

        /* it'll always return all paragraphs if value exceed of total length of data */
        if (count > data.length){
            amount = data.length;
        }

        /* slice( startIndex, total ) - `startIndex` is start from 0 & `total` is total length */
        setText(data.slice(0,amount));
    }

    return (
        <section className='section-center'>
            <h3>tired of boring lorem ipsum?</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>paragraphs:</label>
                <input type='number' name='amount'
                       id='amount' value={count}
                       onChange={ (e) => setCount(e.target.value) }
                />
                <button type="submit" className='btn'>generate</button>
            </form>
            <article className='lorem-text'>
                {text.map( (item, index) => {
                    return (
                        <p key={index}>{item}</p>
                    )
                })}
            </article>
        </section>
    )

}

export default App;