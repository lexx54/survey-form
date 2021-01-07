const d=document;
export function contactMaker(){
  $footer;
  $main;
  if(d.querySelector("footer")) $footer=d.querySelector("footer");
  else {
    $main=d.querySelector("body");
    $footer=d.createElement("footer")
  }

}