import React from 'react'
import './calc.css'

const Calc = () => {

    

    return(
        <>
        <section className="calc">
            <div className="grid-container">
                <span className="grid-itemDisplay"></span>
                <div className="grid-itemC"><button className="botao">C</button></div>
                <div className="grid-itemP"><button className="botao" >()</button></div>
                <div className="grid-itemPorc"><button className="botao" >%</button></div>
                <div className="grid-itemDivid/"><button className="botao" >÷</button></div>
                <div className="grid-item7"><button className="botao" >7</button></div>
                <div className="grid-item8"><button className="botao" >8</button></div>
                <div className="grid-item9"><button className="botao" >9</button></div>
                <div className="grid-itemX"><button className="botao" >X</button></div>
                <div className="grid-item4"><button className="botao" >4</button></div>
                <div className="grid-item5"><button className="botao" >5</button></div>
                <div className="grid-item6"><button className="botao" >6</button></div>
                <div className="grid-item-"><button className="botao" >-</button></div>
                <div className="grid-item1"><button className="botao" >1</button></div>
                <div className="grid-item2"><button className="botao" >2</button></div>
                <div className="grid-item3"><button className="botao" >3</button></div>
                <div className="grid-item+"><button className="botao" >+</button></div>
                <div className="grid-item+-"><button className="botao" >+/-</button></div>
                <div className="grid-item0"><button className="botao" >0</button></div>
                <div className="grid-item,"><button className="botao" >,</button></div>
                <div className="grid-item="><button className="botao" >=</button></div>

            </div>
        </section>
        </>
    )
}

export default Calc