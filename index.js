const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs ={
    startBtn:document.querySelector('button[data-action="start"]'),
    stopBtn:document.querySelector('button[data-action="stop"]'),
    body:document.querySelector('body')
  }

  refs.startBtn.addEventListener('click', onStartBtnClick);
  refs.stopBtn.addEventListener('click', onStopBtnClick);



  function onStartBtnClick(){
     refs.startBtn.setAttribute("disabled", " disabled");
     intervalId=setInterval(()=>{
        const index=randomIntegerFromInterval(0,colors.length-1);
        refs.body.style.backgroundColor = colors[index];
    }, 1000);
    
  };

  function onStopBtnClick() {
    refs.startBtn.removeAttribute("disabled", " disabled");
    clearInterval(intervalId);
  };

  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };