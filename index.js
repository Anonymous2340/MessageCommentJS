"use strict";

    const textarea = document.getElementById("write");
    const countChar = document.getElementById("count");
    const btnSbmt = document.querySelector("button");
    const comments = document.getElementById("comments");
    textarea.value = null; // clean textarea value; 
    let count;
    let val;

    textarea.addEventListener("input", () => {
      count = (textarea.value.length - 1) + 1;
      countChar.innerText = `${count}/100`;
      if (textarea.value.length >= 100) {
        countChar.style.color = "red";
      } else {
        countChar.style.color = "black";
      }

      val = textarea.value;
    });


    btnSbmt.addEventListener("click", () => {
      console.log(val);
      let numCom = 0;
      const comSc = document.createElement("div");
      comSc.setAttribute("class", "com");
      comments.appendChild(comSc);
      
      if (val) {
        comments.style.border = "1px solid black";
        const par = document.createElement("p");
        par.setAttribute("class", "text");
        numCom++;
        par.innerText = `Comment ${numCom}:  ${val}`;
        comSc.appendChild(par);
      } else {
        comSc.innerText = null;
      }

      textarea.value = null;
      countChar.innerText = `0/100`;
    });