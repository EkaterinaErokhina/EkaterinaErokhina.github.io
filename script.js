const main = document.getElementsByTagName('body');
let count = 0;
let count1 = 0;
main[0].addEventListener('keydown', function(event){
  if (event.keyCode===90){
    count+=1
    count1+=1
  }
  if (event.keyCode===88){
    count-=1
    count1+=1
  }
  if (count<0){
    count=0;
  }
  if (count>=5){
    count=5
  }
  console.log(event);
  let men=document.querySelector('#img2')
  let win=document.querySelector('#img3')
  let stoun=document.querySelector('.second')
  console.log(count);
  if (count===1){
    men.style.cssText=`
    position: absolute;
    top: 335px;
    left: 350px;
    visibility: visible;
    `
    win.style.cssText=`
    position: absolute;
    visibility: hidden;
    `
  } else if (count===2){
    men.style.cssText=`
    position: absolute;
    top: 170px;
    left: 600px;
    visibility: visible;
    `
    win.style.cssText=`
    position: absolute;
    visibility: hidden;
    `
  } else if (count===3){
    men.style.cssText=`
    position: absolute;
    bottom: 290px;
    left: 850px;
    visibility: visible;
    `
    win.style.cssText=`
    position: absolute;
    visibility: hidden;
    `
  } else if (count===4){
    men.style.cssText=`
    position: absolute;
    top: 150px;
    left: 1050px;
    visibility: visible;
    `
    win.style.cssText=`
    position: absolute;
    `
  } else if (count===0){
    men.style.cssText=`
    position: absolute;
    bottom: 9px;
    left: 100px;
    visibility: visible;
    `
    win.style.cssText=`
    position: absolute;
    `
  } if (count1===0){
    stoun.style.cssText=`
    visibility: hidden;
    ` 
  } else if (count1===1){
    stoun.style.cssText=`
    visibility: visible;
    `
  } else if (count1===2){
    stoun.style.cssText=`
    position:absolute;
    top: 250px;
    right: 285px;
    visibility: visible;
    `
  } else if (count1===3){
    stoun.style.cssText=`
    position:absolute;
    top: 300px;
    right: 275px;
    visibility: visible;
    `
  } else if (count1===4){
    stoun.style.cssText=`
    position:absolute;
    top: 350px;
    right: 270px;
    visibility: visible;
    `
  } else if (count1===5){
    stoun.style.cssText=`
    position:absolute;
    top: 410px;
    right: 265px;
    visibility: visible;
    `
  } 
  console.log(count, count1)
})
  


