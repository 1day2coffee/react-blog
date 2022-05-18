import "./App.css";
import { useState } from "react";

function App() {
  let post = "reactProject";
  let [변수이름, 변수이름변경] = useState(["글1", "글2", "글3"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>

      {변수이름.map(function (파라미터, i) {
        return (
          <div className="list" key={i} onClick={() => {
            setModal(!modal)
          }}>
            <h4>
              {변수이름[i]}
              <span
                onClick={(e) => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy); e.stopPropagation()
                }}>
                🤚
              </span>
              좋아요{따봉[i]}
            </h4>
            <h4>2월 17일</h4>
          </div>
        );
      })}
      <input onChange={(e) => { 입력값변경(e.target.value) }}></input>
      <button onClick={() => { 변수이름변경(변수이름.concat(입력값)) }}>글 발행하기</button>
      {modal === true ? (
        <Modal 변수이름={변수이름} 변수이름변경={변수이름변경} />
      ) : null}
    </div>
  );

}

function Modal(props) {
  let [title] = useState();
  return (
    <div className="modal">
      <h4>{props.변수이름[title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.변수이름];
          copy[0] = "wow";
          props.변수이름변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
