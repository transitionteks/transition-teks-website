
const drawer=document.querySelector('.drawer');
document.querySelector('.hamb')?.addEventListener('click',()=>drawer.classList.add('open'));
document.querySelector('.close')?.addEventListener('click',()=>drawer.classList.remove('open'));
document.querySelectorAll('.drawer a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));
const aiBtn=document.querySelector('.ai-btn'), aiPanel=document.querySelector('.ai-panel'), aiReply=document.querySelector('.ai-reply');
aiBtn?.addEventListener('click',()=>aiPanel.classList.toggle('open'));
document.querySelectorAll('.quick button').forEach(btn=>btn.addEventListener('click',()=>{aiReply.textContent=btn.dataset.reply;}));
