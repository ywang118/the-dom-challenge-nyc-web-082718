document.addEventListener("DOMContentLoaded",e=>{
  let timer = document.getElementById('counter')
  let myVar =window.setInterval(cb, 1000)
  let commentForm = document.getElementById('comment-form')
  let isPause = true
  let plusBtn = document.getElementById('-')
  let minusBtn = document.getElementById('+')
  let likeBtn = document.getElementById('<3')
  let commentBtn = document.getElementById('submit')
  // debugger
  const likeList = document.getElementsByClassName('likes')[0]
  function cb(){
    timer.innerText = parseInt(timer.innerText) + 1
  }
  let count

  myVar
  document.addEventListener('click',e=>{

    if( e.target.id==="+"){
      timer.innerText = parseInt(timer.innerText) + 1
    } else if(e.target.id ==="-"){
      timer.innerText = parseInt(timer.innerText) - 1
    } else if(e.target.id==="<3"){
      let liList = document.createElement('li')
      liList.id = timer.innerText
      if(document.getElementById(timer.innerText)){
        let exisitingLi = document.getElementById(timer.innerText)
        exisitingLi.innerText =  `${timer.innerText} has been liked ${++count} times`
      } else {
        //append new li to the like list
        count = 1
        liList.innerText = `${timer.innerText} has been liked ${count} time`
        likeList.appendChild(liList)
      }


      console.log(timer.innerText )
    }
  })

  document.addEventListener('click',e=>{
    // debugger
    if(e.target.id === "pause"){
      if(isPause){
        plusBtn.disabled =true
        minusBtn.disabled = true
        likeBtn.disabled=true
        commentBtn.disabled=true
        isPause = false
      }
      else {
        plusBtn.disabled =false
        minusBtn.disabled = false
        likeBtn.disabled=false
        commentBtn.disabled=false
        isPause = true
      }

    }
  })

  commentForm.addEventListener('submit',e=>{
    e.preventDefault()
    let commentInput = document.getElementById('comment').value
    let commentList = document.getElementById('list')
    let pTag =document.createElement('p')
    pTag.innerText = commentInput
    commentList.appendChild(pTag)

    e.target.reset()

  })

})
