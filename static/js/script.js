/* script.js - basic tab switching for the sample site
   No external dependency. This purely toggles CSS classes for visual active state. */

document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn=>{
    btn.addEventListener('click', ()=> {
      // visual active state only
      tabs.forEach(b=>{ b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected','true');

      // If you later want to change content on tab click, add code here.
    });
  });
});
