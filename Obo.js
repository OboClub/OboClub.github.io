function n1() {
    function keydownHandler(e) {
        e.preventDefault(); // Prevent default behavior (e.g., spacebar key)
      
        if (e.key.toLowerCase() === 'l') {
          e.preventDefault(); // Prevent spawning "Obo"s
        }
      }
      
      // Function to remove all "Obo"s from the page
      function removeObos() {
        var obos = document.querySelectorAll('.obo');
        obos.forEach(function (obo) {
          obo.parentNode.removeChild(obo);
        });
      }
      
      // Run the function to remove existing "Obo"s
      removeObos();
      
      // Prevent the ability to spawn more "Obo"s
      document.removeEventListener('keydown', keydownHandler);
      
      // Optionally, remove the cursor element
      var cursor = document.querySelector('.obo');
      if (cursor) {
        cursor.parentNode.removeChild(cursor);
      }
      
    (function(){var script=document.createElement('script');script.textContent='('+function(){var speed=2;var x=window.innerWidth/2;var y=window.innerHeight/2;var obos=[];var keys={};var colors=['red','yellow','green','lightblue','blue','purple','pink'];var colorIndex=0;var oboStyle={position:'fixed',zIndex:10000,width:'20px',height:'20px',background:colors[colorIndex]};function update(){if(keys['ArrowUp']){y-=speed;obos.forEach(function(obo){obo.style.top=obo.getBoundingClientRect().top-speed+'px';});}if(keys['ArrowDown']){y+=speed;obos.forEach(function(obo){obo.style.top=obo.getBoundingClientRect().top+speed+'px';});}if(keys['ArrowLeft']){x-=speed;obos.forEach(function(obo){obo.style.left=obo.getBoundingClientRect().left-speed+'px';});}if(keys['ArrowRight']){x+=speed;obos.forEach(function(obo){obo.style.left=obo.getBoundingClientRect().left+speed+'px';});}cursor.style.left=x+'px';cursor.style.top=y+'px';requestAnimationFrame(update);}function keydownHandler(e){keys[e.key]=true;switch(e.key){case'l':case'L':var obo=document.createElement('div');Object.assign(obo.style,oboStyle);obo.className='obo';obo.style.left=window.innerWidth/2+'px';obo.style.top=window.innerHeight/2+'px';obo.style.background = colors[colorIndex];document.body.appendChild(obo);obos.push(obo);break;case' ':colorIndex=(colorIndex+1)%colors.length;obos.forEach(function(obo){obo.style.background=colors[colorIndex];});e.preventDefault();break;}}function keyupHandler(e){keys[e.key]=false;}var cursor=document.createElement('div');Object.assign(cursor.style,oboStyle);cursor.className='obo';document.body.appendChild(cursor);obos.push(cursor);window.addEventListener('keydown',keydownHandler);window.addEventListener('keyup',keyupHandler);update();}+')()';document.body.appendChild(script);}())
}