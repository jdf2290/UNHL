(function(){
const app=document.getElementById('app');
function size(){
 const frame=app.querySelector('.cinematic-frame'),stage=app.querySelector('.cinematic-stage');
 if(!frame||!stage)return;
 const expanded=frame.classList.contains('expanded');
 const ratio=expanded?1:Math.min(1,frame.clientWidth/1536);
 stage.style.zoom=String(ratio);
 frame.style.height=(960*ratio)+'px';
 frame.style.overflowX=expanded?'auto':'hidden';
 frame.style.overflowY='hidden';
}
function adapt(){
 const stage=app.querySelector('.cinematic-armory:not(.cinematic-stage)');
 if(!stage)return;
 const frame=document.createElement('div');frame.className='cinematic-frame';
 stage.parentNode.insertBefore(frame,stage);frame.appendChild(stage);
 stage.classList.add('cinematic-stage');
 const zoom=document.createElement('button');zoom.className='cinematic-zoom';
 zoom.type='button';zoom.textContent='⤢ Enlarge player loadout';
 frame.insertAdjacentElement('afterend',zoom);
 zoom.addEventListener('click',()=>{
  frame.classList.toggle('expanded');
  zoom.textContent=frame.classList.contains('expanded')?'↩ Fit loadout to screen':'⤢ Enlarge player loadout';
  size();
 });
 size();
}
new MutationObserver(adapt).observe(app,{childList:true});
window.addEventListener('resize',size);
adapt();
})();