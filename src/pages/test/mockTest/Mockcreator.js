import React, { useState } from "react";
import "./mockCreator.css";

function Mockcreator() {
  const minCount = 3;
  const [choiceArray, setChoicArray] = useState(["", "", ""]);
  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState("");

  const addQuestion = () => {
    console.log(choiceArray, answer, question);
  };
  const handleChange = (e, i) => {
    let array = choiceArray;
    array[i] = e.target.value;
    setChoicArray((prev) => [...array]);
  };

  const addRow = () => {
    setChoicArray((prev) => [...choiceArray, ""]);
  };
  const removeRow = () => {
    let array = choiceArray;
    if (array.length > 3) {
      array.splice(-1);
      setChoicArray((prev) => [...array]);
    } else alert("minimum 3 choice required");
  };

  const handletextChange = (e) => {
    setQuestion(e.target.value);
  };

  const validate = () => {
    let count = 0;
    if (answer != null) {
      count += 1;
    }
    let hasempty = choiceArray.includes("");
    if (!hasempty) {
      count += 1;
    }
    if (question != "") {
      count += 1;
    }

    if (count == 3) {
      return false;
    } else {
      return true;
    }
  };

  const lineBreak = (e) => {
    setQuestion((prev) => prev + "<br/>");
  };
  return (
    <div>
      <div>
        <h3>Mock Test Creator</h3>
      </div>
      <div className="container custom_container">
        <p className="custom_paragraph">Enter Question:</p>
        <button className="btn btn-warning custom_button" onClick={lineBreak}>
          Line Break
        </button>
        <br />
        <br />
        <div className="form-control txt_area">
          <textarea
            rows=""
            className="txt_area"
            value={question}
            cols="10"
            onChange={handletextChange}
          ></textarea>
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: question }} /> */}
        <div className="option_area">
          <br />
          <p className="custom_paragraph">Add Choice Here</p>

          <div style={{ float: "right" }}>
            <button className="btn btn-primary" onClick={addRow}>
              +
            </button>
            &nbsp; &nbsp; &nbsp;
            <button className="btn btn-danger" onClick={removeRow}>
              -
            </button>
          </div>
          <br />

          <table className="table table-stripped">
            <tbody>
              {choiceArray.map((item, i) => (
                <tr key={i + "table_row"}>
                  <td>{String.fromCharCode(65 + i)}</td>
                  <td>
                    <input
                      type={"text"}
                      className="form-control"
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td>
                    <input
                      type="radio"
                      checked={answer === i ? true : false}
                      onChange={() => {
                        setAnswer((prev) => i);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              addQuestion();
            }}
            disabled={validate()}
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mockcreator;
