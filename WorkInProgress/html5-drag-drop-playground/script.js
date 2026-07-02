const item=document.getElementById('drag1');
const zone=document.getElementById('dropzone');
const status=document.getElementById('status');

item.addEventListener('dragstart',e=>{
 e.dataTransfer.setData('text/plain','drag1');
 status.textContent='Status: dragging...';
});
zone.addEventListener('dragover',e=>e.preventDefault());
zone.addEventListener('drop',e=>{
 e.preventDefault();
 zone.appendChild(item);
 status.textContent='Status: dropped successfully!';
});
item.addEventListener('dragend',()=>status.textContent+=' Finished.');
