const $container=document.getElementById("container")
const $btnSi=document.getElementById("btnSi")
const $btnNo=document.getElementById("btnNo")
const $modal=document.getElementById("modal")
const $audio=document.getElementById("audio")
$btnNo.addEventListener("mouseover",e=>{
    let Y=Math.floor((Math.random () * $container.clientHeight) )
    let X=Math.floor((Math.random () * $container.clientWidth)) 
    if(Y> $btnNo.clientHeight) Y=Y - $btnNo.clientHeight
    if(X>$btnNo.clientWidth ) X=X  - $btnNo.clientWidth 
    $btnNo.style.top=`${Y}px`
    $btnNo.style.left=`${X}px`
})

$btnSi.addEventListener("click",()=>{
  $modal.classList.add("modal--active")
  $audio.play()
  setTimeout(()=> $audio.pause(),2500)
})