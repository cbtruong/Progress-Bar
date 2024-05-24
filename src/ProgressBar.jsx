import { useState } from "react"


const ProgressBar = () => {
    const [progress,setProgress]=useState(0);
    const handleButtonClick =()=>{
        if (progress<100)
            {
                setProgress(progress+20);
            }
    }
    const handleButtonReset=()=>{
        setProgress(0);
    }
    const getColor =()=>{
        if (progress<40){
            return "#ff0000";
        } else if (progress<70)
            {
                return "#ffa500";
            }else 
                {
                    return "#2ecc71";
                }
    }
  return (
    <div className="container">
        <div className="progress_bar">
            <div className="progress_bar_fill" style={{width:`${progress}%`,backgroundColor:getColor()}}>

            </div>
        </div>
        <div className="progress_label">{progress}%</div>
        <button className="progress" onClick={handleButtonClick}>Progress</button>
        <button className="reset" onClick={handleButtonReset}>Exit</button>
    </div>
  )
}

export default ProgressBar
