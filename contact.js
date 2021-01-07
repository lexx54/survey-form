const d=document;


// d.addEventListener("DOMContentLoad",e=>{
 
// })
contactMaker()

function contactMaker(){
  let $footer,$main,
    $divLine=d.createElement('div'),
    $para=d.createElement('p'),
    $paraLink=d.createElement('a'),
    $divSocial=d.createElement('div'),
    $twitterIc=d.createElement("a"),
    $twitterLink=d.createElement('i');
    $githubIc=d.createElement("a"),
    $linkedinIc=d.createElement("a"),
    $head=d.getElementsByTagName("head")[0],
    $linkFont=d.createElement('link');

    console.log($head)
    //first create the FontAwesome's link
    $linkFont.rel='stylesheet';
    $linkFont.href='https://use.fontawesome.com/releases/v5.15.1/css/all.css';
    $linkFont.integrity='sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp';
    $linkFont.crossOrigin='anonymous';
    //second append it in the head
    $head.appendChild($linkFont);
    // <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
  
    //look up for footer tag if no found look the body tag
    d.querySelector("footer")
  ? $footer=d.querySelector("footer")
  :($main=d.querySelector("body"),$footer=d.createElement("footer"));

  $divLine.style.width='80%';
  $divLine.style.backgroundColor="black";
  $divLine.style.height="2px";

  $twitterIc.href="https://twitter.com/code_lexx";
  $twitterLink.classList.add("fab","fa-twitter-square")
  $twitterIc.appendChild($twitterLink);

  if(!$main){
    console.log("exist")
  } else{
    $footer.appendChild($divLine);
    $footer.appendChild($twitterIc);

    $main.appendChild($footer);
  }

}