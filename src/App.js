import logo from './logo.svg';
import './App.css';
import './test.css';// 외부 css파일 import
import App2 from './App2';
import First from './compo/First';
import Secend from './compo/Secend';

function App() {

  const name = "KK";
  const data = 'Secend';
  
  //return 안에 사용자 저의태그 구조를 작성할 수 있다. 
  let num = 10;
  function chNum(){//state 관리
    num = 30;
  }
  
  return (
    //JSX 문법 - Js와 html을 같이 사용할 수 있는 문법!
    // 규칙 1 - 꼭 html 구조는 한기지 태그로 묶어있어야 한다
    // 규칙 2 - 모든 태그는 닫는 태그가 있어야 한다.
    // 규칙 3
      //빈테그로도 묶어서 사용이 가능하다.
      // 변수를 사용 할때는 {변수명}으로 사용한다.
      //JXS 문법 안에서는 사용할 수 있는 JS문법이 제한 되어있다.
      //삼항 연산자는 가능 한다1
      // name 에 있는 값이 kk 라면 출력
      // name 에 있는 값이 다른거라면 False 출력
      // 삼항 연산자 {조건부 ? 참값 : 거짓값}
    //규칙 4 - class 를 지정해줄때는 className 이라는 키워드를 사용한다.
    
    <>
      <h1 style={{color:'red'}} id='test'>월요일 좋아</h1>
      <h1 className='secend'>-스폰지밥-</h1>
      <h1> {name == 'KK' ? `이름 : ${name}`:`이름/ 확인이 필요합니다 현재 입력 : ${name}`}</h1>  
      <App2></App2>
      {data == 'First' ? <First></First>:<Secend></Secend>}
      <h1>{num}</h1>
      <button onClick={chNum}>숫자 바꾸기</button>  
      
      
    </>
    


  );
}

export default App;
//위에서 만들어놓은 사용자 정의태그를 내보내겠습니다.