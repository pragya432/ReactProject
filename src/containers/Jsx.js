let name='Mohan';
function CheckEvenOrOdd(num){
 if(num%2===0) {
  return <div> Even</div>
 }
 else {
  return<div> Odd</div>
 }}
  function CheckAlphabet() {
    switch ('char') {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return <div>Vowel</div>
        default:
        return <div> Not Vowel </div>
    }
  }

 let num=4;
 const users=[
  {name:'Mohan',age:25},
  {name:'Ram',age:24},                     
  {name:'Rohit',age:21},
 ]
  function jsx() {         
  return (
    <div>
      <h2> Hello {name}</h2>
      <h2> If Else Statement</h2>
    <div>
      {
    CheckEvenOrOdd(5)
    }
    {
      num % 2=== 0
      ? <div> Even number</div>
      :<div> Odd number</div>
        }
      <h3>If Statement</h3>
      {
    num%2===0&&<div>Even number</div>
      }
           {
            num%2>0&&<div>Odd number</div>
           }  </div>
           <h3>Loop</h3>
   
    {
      users.map((item, index)=>{
        return <div key={index}>
          {item.name} - {item.age}</div>
      })
    }
     <h3>Switch</h3>
    {
      CheckAlphabet('z')
    }
    
    </div>
    
  );
}

export default jsx;
export function Greet(){
  return <h1> Hello World</h1>
}
