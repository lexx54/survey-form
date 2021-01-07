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
    $head=d.getElementsByTagName("head")[0],
    $linkFont=d.createElement('link');

    const links=['https://twitter.com/code_lexx',"https://github.com/lexx54","https://www.linkedin.com/in/lexx-chape-01b521193/"],
    classes=[['fab','fa-twitter-square'],['fab','fa-github-square'],['fab','fa-linkedin']];
    

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

  //create the link and icons for the social contacts
  for (let i=0;i<3;i++){
    const $icon=d.createElement("i"),
      $link=d.createElement("a");

      $link.href=links[i]; //set the url
      $icon.classList.add(classes[i][0],classes[i][1]); //set the font awesome classes

      $link.appendChild($icon); //add the icon inside the anchor tag

      $divSocial.appendChild($link); //append the each a tag to the social div once at a time
  }
  // $twitterIc.href="https://twitter.com/code_lexx";
  // $twitterLink.classList.add("fab","fa-twitter-square")
  // $twitterIc.appendChild($twitterLink);



}