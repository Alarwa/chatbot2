import React, {useState } from 'react'
import axios from 'axios';
import './Questions.css';

const Questions=()=>{


    const sendResponse = async () => {
        await axios.post('http://localhost:5001/questions',  {
        body: JSON.stringify(answers)
      });
    }

    // Question#1
    const [Q1,setQ1]=useState('');
    const handleChangeQ1=(e)=>{
        setQ1(e.target.value);}
    // Question#2
    const [Q2,setQ2]=useState('');
    const handleChangeQ2=(e)=>{
        setQ2(e.target.value);}
    // Question#3
    const [Q3,setQ3]=useState('');
    const handleChangeQ3=(e)=>{
        setQ3(e.target.value);}
    // Question#4
    const [Q4,setQ4]=useState('');
    const handleChangeQ4=(e)=>{
        setQ4(e.target.value);}
    // Question#5
    const [Q5,setQ5]=useState('');
    const handleChangeQ5=(e)=>{
        setQ5(e.target.value);}
    // Question#6
    const [Q6,setQ6]=useState('');
    const handleChangeQ6=(e)=>{
        setQ6(e.target.value);}
    // Question#7
    const [Q7,setQ7]=useState('');
    const handleChangeQ7=(e)=>{
        setQ7(e.target.value);}
    // Question#8
    const [Q8,setQ8]=useState('');
    const handleChangeQ8=(e)=>{
        setQ8(e.target.value);}



        // Other Functions
     const handleClick=()=>{
        console.log(answers);
        sendResponse();
    }
     var answers = {'Qu1':Q1, 'Qu2':Q2, 'Qu3':Q3,'Qu4':Q4,'Qu5':Q5,'Qu6':Q6,'Qu7':Q7,'Qu8':Q8};


        return (
            <div>
                <div>
                    <form className="d-flex justify-content-center m-auto flex-column w-50 p-4">
                        <div className="md-5"><h1>Questions:</h1></div>
                        <hr />
                    Please answer the following questions that test your knowledge of blockchain technology.
                    <br /><br />

                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">1)What is the double-spending issue?</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={handleChangeQ1} value={Q1} name="Q1" />
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">2)How does the blockchain solve the double-spending issue?    </label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" onChange={handleChangeQ2}  value={Q2} name="Q2"/>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">3)In the blockchain, there is a key that must be private and never be lost.</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="inlineRadio1" value="A" />
                                <label className="form-check-label" htmlFor="inlineRadio1">True</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q3" id="inlineRadio2" onChange={handleChangeQ3} value="B" />
                                <label className="form-check-label" htmlFor="inlineRadio2">False</label>
                            </div>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">4)According to the text, is blockchain a safe technology?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q4" onChange={handleChangeQ4} id="inlineRadio3" value="A" />
                                <label className="form-check-label" htmlFor="inlineRadio3">True</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q4" onChange={handleChangeQ4} id="inlineRadio4" value="B" />
                                <label className="form-check-label" htmlFor="inlineRadio4">False</label>
                            </div>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">5)There are two main features of Bitcoin that make it different from the traditional coins. What those features are?
</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"  onChange={handleChangeQ5}  value={Q5} name="Q2" />
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">6)PKI uses a hash technique of:
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q6" onChange={handleChangeQ6} id="gridRadios1" value="A" />
                                <label className="form-check-label"htmlFor="gridRadios1">
                                    a. 256 bits
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" onChange={handleChangeQ6} id="gridRadios2" value="B" />
                            <label className="form-check-label"htmlFor="gridRadios2">
                                b. 32 bits
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" onChange={handleChangeQ6} id="gridRadios3" value="C" />
                            <label className="form-check-label"htmlFor="gridRadios3">
                                c. 31 bits
          </label>
                        </div>
                        <br/>
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">7)If Bob sends Alice money through blockchain technology, how they can ensure that no one can take that money, but only Alice?</label>
                            <input type="email" className="form-control" name="Q7" onChange={handleChangeQ7} value={Q7} id="exampleFormControlInput1" />
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">8)In the blockchain, we can use the same Public and Private key for various people or situations?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q8" onChange={handleChangeQ8} id="inlineRadio6" value="A" />
                                <label className="form-check-label" htmlFor="inlineRadio6">True</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q8" onChange={handleChangeQ8} id="inlineRadio7" value="B" />
                                <label className="form-check-label" htmlFor="inlineRadio7">False</label>
                            </div>
                        </div>
                        <hr/>
                        <div className="position-relative">
                <button type="button" className="btn btn-dark position-absolute bottom-10 start-50 translate-middle-x" onClick={handleClick}> Submit</button>
            </div>
                    </form>
                    <br/><br/>
                </div>
            </div>
        )
}

export default Questions
