import axios from 'axios';
import React,{useState}  from 'react'
// var answers = {'Qu1':0, 'Qu2':0, 'Qu3':0,'Qu4':0};

const Prior=()=>{

    const sendResponse = async () => {
        await axios.post('http://localhost:5001/prior',  {
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


        // Other Functions
     const handleClick=()=>{
        console.log(answers);
        sendResponse();
    }
     var answers = {'Qu1':Q1, 'Qu2':Q2, 'Qu3':Q3,'Qu4':Q4};


        return (
            <div>
                <div>
                    <form className="d-flex justify-content-center m-auto flex-column w-50 p-4">
                        <h1>Prior knowledge</h1>
                        <div className="md-2">Questions:</div>
                        <hr />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">1)Did you happen to know what is the blockchain?</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" onChange={handleChangeQ1} name="Q1" id="gridRadios1" value="A" />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    a. Yes
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q1" onChange={handleChangeQ1} id="gridRadios2" value="B" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                b. No
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q1" onChange={handleChangeQ1} id="gridRadios3" value="C" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                c. I heard about it, but iam not sure what exactly it is
          </label>
                        </div>
                        <br /> <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">2)Did you use blockchain technology before?</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" onChange={handleChangeQ2} name="Q2" id="gridRadios4" value="A" />
                                <label className="form-check-label" htmlFor="gridRadios4">
                                    a. Yes
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" onChange={handleChangeQ2} name="Q2" id="gridRadios5" value="B" />
                            <label className="form-check-label" htmlFor="gridRadios5">
                                b. No
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" onChange={handleChangeQ2} name="Q2" id="gridRadios6" value="C" />
                            <label className="form-check-label" htmlFor="gridRadios6">
                                c. I plan to start using it soon
          </label>
                        </div>
                        <br /> <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">3)Which protocol does blockchain use?</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" onChange={handleChangeQ3} name="Q3" id="gridRadios4" value="A" />
                                <label className="form-check-label" htmlFor="gridRadios4">
                                    a. Centralized protocols
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" onChange={handleChangeQ3} name="Q3" id="gridRadios5" value="B" />
                            <label className="form-check-label" htmlFor="gridRadios5">
                                b. Decentralized protocols
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" onChange={handleChangeQ3} name="Q3" id="gridRadios6" value="C" />
                            <label className="form-check-label" htmlFor="gridRadios6">
                                c. I don't know
          </label>
                        </div>
                        <br /> <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">4)Do you think Bitcoin is safer than traditional coins?</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q4" onChange={handleChangeQ4} id="gridRadios4" value="A" />
                                <label className="form-check-label" htmlFor="gridRadios4">
                                    a. Yes
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q4" onChange={handleChangeQ4} id="gridRadios5" value="B" />
                            <label className="form-check-label" htmlFor="gridRadios5">
                                b. No
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q4" onChange={handleChangeQ4} id="gridRadios6" value="C" />
                            <label className="form-check-label" htmlFor="gridRadios6">
                                c. I don't know
          </label>
                        </div>
                        <hr />
                        <div className="position-relative">
                            <button type="button" className="btn btn-dark position-absolute bottom-10 start-50 translate-middle-x" onClick={handleClick}>Submit</button>
                        </div>
                    </form>
                    <br /><br/>
                </div>
            </div>
        )
        }


export default Prior
