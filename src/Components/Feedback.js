import React, {useState } from 'react'
import axios from 'axios';

const Feedback=()=>{

    const sendResponse = async () => {
        await axios.post('http://localhost:5001/feedback',  {
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
    // Question#9
    const [Q9,setQ9]=useState('');
    const handleChangeQ9=(e)=>{
        setQ9(e.target.value);}


        // Other Functions
     const handleClick=()=>{
        console.log(answers);
        sendResponse();
    }
     var answers = {'Qu1':Q1, 'Qu2':Q2, 'Qu3':Q3,'Qu4':Q4,'Qu5':Q5,'Qu6':Q6,'Qu7':Q7,'Qu8':Q8,'Qu9':Q9};


        return (
            <div>
                <div>
                    <form className="d-flex justify-content-center m-auto flex-column w-50 p-4">
                        <div className="md-5"><h1>Feedback</h1></div>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">1)Did you enjoy the guidance from the chatbot during the task?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q1" id="inlineRadio3" onChange={handleChangeQ1} value="A" />
                                <label className="form-check-label" htmlFor="inlineRadio3">a.Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="Q1" id="inlineRadio4" onChange={handleChangeQ1} value="B" />
                                <label className="form-check-label" htmlFor="inlineRadio4">b.No</label>
                            </div>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">2)Can you list a suggestion from the chatbot that you found particularly helpful?

</label>
                            <input type="email" className="form-control" name="Q2" onChange={handleChangeQ2} value={Q2} id="exampleFormControlInput1" />
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">3)The chatbot made my work on the task easier.
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="gridRadios1" value="A" />
                                <label className="form-check-label" htmlFor="gridRadios1">
                                    a. Strongly disagree
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="gridRadios2" value="B" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                b. Disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="gridRadios3" value="C" />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                c. Neither agree nor disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="gridRadios4" value="D" />
                            <label className="form-check-label" htmlFor="gridRadios4">
                                d. Agree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q3" onChange={handleChangeQ3} id="gridRadios5" value="E" />
                            <label className="form-check-label" htmlFor="gridRadios5">
                                e. Strongly agree
          </label>
                        </div>
                        <br /> <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">4)Would you like to have this or a similar chatbot to help you with similar learning tasks in the future?
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q4" id="gridRadios8" onChange={handleChangeQ4} value="A" />
                                <label className="form-check-label" htmlFor="gridRadios8">
                                    a.Yes, absolutely
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q4" id="gridRadios9" onChange={handleChangeQ4} value="B" />
                            <label className="form-check-label" htmlFor="gridRadios9">
                                b. No, I would like to study alone or with human tutors
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q4" id="gridRadios10" onChange={handleChangeQ4} value="C" />
                            <label className="form-check-label" htmlFor="gridRadios10">
                                c. I am not sure
          </label>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">5)Please list one improvement that you would like to be implemented in this chatbot.
</label>
                            <input type="email" className="form-control" name="Q5" onChange={handleChangeQ5} value={Q5} id="exampleFormControlInput1" />
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">6)Using chatbot to support learning can generally improve students’ learning performance in the future.
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q6" id="gridRadios11" onChange={handleChangeQ6} value="A" />
                                <label className="form-check-label" htmlFor="gridRadios11">
                                    a. Strongly disagree
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" id="gridRadios12" onChange={handleChangeQ6} value="B" />
                            <label className="form-check-label" htmlFor="gridRadios12">
                                b. Disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" id="gridRadios13" onChange={handleChangeQ6} value="C" />
                            <label className="form-check-label" htmlFor="gridRadios13">
                                c. Neither agree nor disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" id="gridRadios14" onChange={handleChangeQ6} value="D" />
                            <label className="form-check-label" htmlFor="gridRadios14">
                                d. Agree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q6" id="gridRadios15" onChange={handleChangeQ6} value="E" />
                            <label className="form-check-label" htmlFor="gridRadios15">
                                e. Strongly agree
          </label>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">7)The chatbot encouraged me to complete this task.
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q7" id="gridRadios21" onChange={handleChangeQ7} value="A" />
                                <label className="form-check-label" htmlFor="gridRadios21">
                                    a. Strongly disagree
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q7" id="gridRadios22" onChange={handleChangeQ7} value="B" />
                            <label className="form-check-label" htmlFor="gridRadios22">
                                b. Disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q7" id="gridRadios23" onChange={handleChangeQ7} value="C" />
                            <label className="form-check-label" htmlFor="gridRadios23">
                                c. Neither agree nor disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q7" id="gridRadios24" onChange={handleChangeQ7} value="D" />
                            <label className="form-check-label" htmlFor="gridRadios24">
                                d. Agree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q7" id="gridRadios25" onChange={handleChangeQ7} value="E" />
                            <label className="form-check-label" htmlFor="gridRadios25">
                                e. Strongly agree
          </label>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">8)The chatbot helped me stay organized during the task.
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q8" id="gridRadios41" onChange={handleChangeQ8} value="A" />
                                <label className="form-check-label" htmlFor="gridRadios41">
                                    a. Strongly disagree
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q8" id="gridRadios42" onChange={handleChangeQ8} value="B" />
                            <label className="form-check-label" htmlFor="gridRadios42">
                                b. Disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q8" id="gridRadios43" onChange={handleChangeQ8} value="C" />
                            <label className="form-check-label" htmlFor="gridRadios43">
                                c. Neither agree nor disagree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q8" id="gridRadios44" onChange={handleChangeQ8} value="D" />
                            <label className="form-check-label" htmlFor="gridRadios44">
                                d. Agree
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q8" id="gridRadios45" onChange={handleChangeQ8} value="E" />
                            <label className="form-check-label" htmlFor="gridRadios45">
                                e. Strongly agree
          </label>
                        </div>
                        <br />
                        <div className="form-group" >
                            <label htmlFor="exampleFormControlInput1">9)How was the chatbot’s response to your inquires?
</label>
                            <br />
                            <div className="form-check my-1">
                                <input className="form-check-input" type="radio" name="Q9" id="gridRadios51" onChange={handleChangeQ9} value="A" />
                                <label className="form-check-label" htmlFor="gridRadios51">
                                    a. Very good
          </label>
                            </div>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q9" id="gridRadios52" onChange={handleChangeQ9} value="B" />
                            <label className="form-check-label" htmlFor="gridRadios52">
                                b. Good
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q9" id="gridRadios53" onChange={handleChangeQ9} value="C" />
                            <label className="form-check-label" htmlFor="gridRadios53">
                                c. Just okay
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q9" id="gridRadios54" onChange={handleChangeQ9} value="D" />
                            <label className="form-check-label" htmlFor="gridRadios54">
                                d. Bad
          </label>
                        </div>
                        <div className="form-check my-1">
                            <input className="form-check-input" type="radio" name="Q9" id="gridRadios55" onChange={handleChangeQ9} value="E" />
                            <label className="form-check-label" htmlFor="gridRadios55">
                                e. Very bad
          </label>
                        </div>

                        <hr />
                        <div className="position-relative">
                            <button type="button" className="btn btn-dark position-absolute bottom-10 start-50 translate-middle-x" onClick={handleClick}>Submit</button>
                        </div>
                    </form>
                    <br /><br />
                </div>
            </div>
        )
    }


export default Feedback
