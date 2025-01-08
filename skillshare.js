const buttonData=[{buttonId:"button-2",messageId:"message-2",timerId:"timer-2",links:["https://irritatepillssurly.com/rjme04ys8?key=a0c8c5551172bf0f91afd5b4dca2ce0c","https://irritatepillssurly.com/pf2us6j8y?key=8ef4117604431efed6f9587684c049b8","https://irritatepillssurly.com/anvef6w0h?key=8fb7dc805ef8d1e360dddd9b3352bdba","https://irritatepillssurly.com/x0ep5jde4?key=0e8f5b3feba83e660f5ec8be880d94f8","https://irritatepillssurly.com/bg96zuy8t?key=9cf741645d2db71d10c345c2ffa4c67a"],maxClicks:5,downloadLink:"",}];function fetchDownloadLink(retryCount=0){const proxyUrl='https://api.allorigins.win/raw?url=';const targetUrl='https://www.techebyninja.xyz/2024/12/Skillshare.html';fetch(proxyUrl+encodeURIComponent(targetUrl)).then(response=>response.text()).then(html=>{const parser=new DOMParser();const doc=parser.parseFromString(html,'text/html');const downloadElement=doc.querySelector('a#download_link');if(downloadElement){buttonData[0].downloadLink=downloadElement.href}else{console.error("Download link not found.")}}).catch(error=>{console.error("Error fetching the download link:",error);if(retryCount<2){console.log("Retrying...");fetchDownloadLink(retryCount+1)}else{buttonData[0].downloadLink="error"}})}
buttonData.forEach((data,index)=>{const button=document.getElementById(data.buttonId);const message=document.getElementById(data.messageId);const timerDisplay=document.getElementById(data.timerId);let clickCount=0;let openedTabs=[];let timeElapsed=!1;button.addEventListener("click",()=>{if(clickCount<data.maxClicks){const newTab=window.open(data.links[clickCount],"_blank");openedTabs.push(newTab);const remainingClicks=data.maxClicks-clickCount-1;if(remainingClicks>0){button.innerHTML=`<i class="fas fa-play-circle"></i> ${remainingClicks} Clicks Left`}}
clickCount++;if(clickCount===data.maxClicks){button.innerHTML=`<i class="fas fa-thank-you"></i> Thank You`;button.disabled=!0;button.style.cursor="not-allowed";message.innerHTML="Link is getting ready. Please wait!";let timeLeft=60;const countdown=setInterval(()=>{if(timeLeft>0){timerDisplay.innerHTML=`Time left: ${timeLeft} seconds`;timeLeft--}else{clearInterval(countdown);timeElapsed=!0;if(data.downloadLink==="error"){message.innerHTML=`<div class="warning-box" role="alert" aria-live="assertive">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p class="warning-text">The server is experiencing high traffic. Please refresh the page and try again after a few minutes.</p>
                        </div>`}else if(data.downloadLink){message.innerHTML=`File is Ready: <a id="download-link-${index}" href="${data.downloadLink}" target="_blank" aria-label="Download the file">Click to download <i class="fas fa-download"></i></a>`}else{message.innerHTML=`<div class="warning-box" role="alert" aria-live="assertive">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p class="warning-text">Failed to fetch the download link. Please try again later.</p>
                        </div>`}
timerDisplay.innerHTML=''}},1000);fetchDownloadLink();const intervalCheck=setInterval(()=>{if(openedTabs.some(tab=>tab.closed)&&!timeElapsed){clearInterval(countdown);clearInterval(intervalCheck);button.disabled=!0;button.style.cursor="not-allowed";message.innerHTML=`
                        <div class="warning-box" role="alert" aria-live="assertive">
                            <i class="fas fa-exclamation-triangle"></i>
                            <p class="warning-text">Please do not close the Advertise tabs before 60 seconds. Refresh the page and try again.</p>
                        </div>`;timerDisplay.innerHTML=''}},500)}})});
