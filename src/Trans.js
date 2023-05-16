import './trans.css';
import {useState,useEffect} from 'react';
import axios from 'axios';



function Trans() {
  const [options,setOptions]=useState([])
  const [to,setTo]=useState('en');
  const [from,setFrom]=useState('en');
  const [input,setInput]=useState('');
  const [output,setOutput]=useState('');

  const translate=()=>{
    const params=new URLSearchParams();
    params.append('q',input);
    params.append('source',from);
    params.append('target',to);
    params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
    

  

    axios.post('https://libretranslate.de/translate',params,{
      headers:{'accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded'},
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };
  useEffect(() => {
    axios.get("https://libretranslate.de/languages",{headers:{'accept':'application/json'}}).then(res=>{
      console.log(res.data)
      setOptions(res.data)
    });

  },[]);
  return (
    <div>
    <p className='heading'>Translater</p>
    <div className="outertrans">
    <div>
      From ({from}):
      <select onChange={e=>setFrom(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      
      </select>
      To ({to}):
       <select onChange={e=>setTo(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      
      </select>
      </div>

      <div className='text'>
      <textarea  cols='30' rows='4' onInput={(e)=>setInput(e.target.value)}></textarea> 
      <textarea  cols='30' rows='4' value={output}></textarea>
      </div>

      <div>
      <button className='buttontrans' onClick={e=>translate()}>Translate</button>
      </div>
    </div>
    </div>
  );
}

export default Trans;
