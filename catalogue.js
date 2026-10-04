(() => {
  'use strict';
  const grid = document.querySelector('#catalogue-grid');
  if (grid) {
    const cards = [...grid.querySelectorAll('.catalogue-card')];
    const search = document.querySelector('#catalogue-search');
    const sort = document.querySelector('#catalogue-sort');
    const count = document.querySelector('#catalogue-count');
    const empty = document.querySelector('#catalogue-empty');
    let limit = 24;
    const more = document.createElement('button');
    more.type = 'button'; more.className = 'button outline dark catalogue-load-more'; more.textContent = 'Show more products ↓';
    grid.after(more);
    function restore() {
      const params = new URLSearchParams(location.search);
      search.value = params.get('q') || '';
      sort.value = ['name','price-low','price-high'].includes(params.get('sort')) ? params.get('sort') : 'featured';
    }
    function render(updateUrl = false) {
      const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      const matches = cards.filter(card => terms.every(term => card.dataset.name.includes(term)));
      if (sort.value === 'name') matches.sort((a,b)=>a.dataset.name.localeCompare(b.dataset.name));
      if (sort.value === 'price-low') matches.sort((a,b)=>Number(a.dataset.price)-Number(b.dataset.price));
      if (sort.value === 'price-high') matches.sort((a,b)=>Number(b.dataset.price)-Number(a.dataset.price));
      cards.forEach(card => { card.hidden = true; });
      matches.forEach((card,i) => { grid.append(card); card.hidden = i >= limit; });
      count.textContent = `${Math.min(limit, matches.length)} of ${matches.length} product${matches.length===1?'':'s'}`;
      empty.hidden = matches.length > 0; more.hidden = matches.length <= limit;
      if (updateUrl) {
        const url = new URL(location.href);
        search.value.trim() ? url.searchParams.set('q',search.value.trim()) : url.searchParams.delete('q');
        sort.value !== 'featured' ? url.searchParams.set('sort',sort.value) : url.searchParams.delete('sort');
        history.replaceState({},'',url);
      }
    }
    search.addEventListener('input',()=>{limit=24;render(true);});
    sort.addEventListener('change',()=>{limit=24;render(true);});
    document.querySelector('#catalogue-reset').addEventListener('click',()=>{search.value='';limit=24;render(true);search.focus();});
    more.addEventListener('click',()=>{const previous=limit;limit+=24;render();const visible=[...grid.querySelectorAll('.catalogue-card:not([hidden])')];visible[previous]?.focus({preventScroll:true});});
    addEventListener('popstate',()=>{restore();limit=24;render();});
    restore();render();
    const menu=document.querySelector('.category-menu');if(menu && matchMedia('(max-width: 820px)').matches)menu.open=false;
  }
  const raw = document.querySelector('#product-data');
  if (raw) {
    const product = JSON.parse(raw.textContent);
    const form = document.querySelector('#product-options');
    const picture = document.querySelector('.catalogue-main-picture');
    const price = document.querySelector('#selected-price');
    const status = document.querySelector('#variant-status');
    const live = document.querySelector('#live-product-link');
    const enquiry = document.querySelector('.product-actions a:first-child');
    const enquiryBase = enquiry.href;
    const money=n=>new Intl.NumberFormat('en-MT',{style:'currency',currency:'EUR'}).format(n);
    function setImage(src) {
      if(!src)return;
      picture.querySelector('img').src=src;picture.dataset.lightbox=src;
      document.querySelectorAll('[data-product-image]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.productImage===src)));
    }
    document.querySelectorAll('[data-product-image]').forEach(button=>button.addEventListener('click',()=>setImage(button.dataset.productImage)));
    function update() {
      const choices=Object.fromEntries(new FormData(form));
      const complete=product.attributes.every(a=>choices[a.key]);
      const chosenLabels=product.attributes.filter(a=>choices[a.key]).map(a=>`${a.name}: ${a.values.find(v=>v.value===choices[a.key])?.label||choices[a.key]}`);
      const destination=new URL(product.sourceUrl);
      for(const [key,value] of Object.entries(choices))if(value)destination.searchParams.set(key,value);
      live.href=destination.href;
      const enquiryUrl=new URL(enquiryBase);if(chosenLabels.length)enquiryUrl.searchParams.set('options',chosenLabels.join('; '));
      enquiry.href=enquiryUrl.href;
      const matching=product.variants.filter(v=>Object.entries(v.attributes).every(([key,value])=>value===''||choices[key]===value));
      const variant=complete?matching[0]:null;
      price.textContent=variant?.price!=null?money(variant.price):product.priceRange;
      document.querySelector('#variant-sku-row').hidden=!variant?.sku;
      document.querySelector('#variant-sku').textContent=variant?.sku||'';
      if(!complete){status.textContent='Select your options to see the listed price.';setImage(product.initialImage);return;}
      if(!variant){status.textContent='This combination is not listed. Please choose another option or ask our team to confirm availability.';return;}
      setImage(variant.image||product.initialImage);
      status.textContent=variant.inStock===false?'This option was listed as unavailable. Contact our team for current availability.':`Selected: ${chosenLabels.join(' · ')}. Confirm availability before ordering.`;
    }
    if(form){form.addEventListener('change',update);form.addEventListener('reset',()=>setTimeout(update,0));update();}
  }
  const enquiryForm=document.querySelector('#enquiry-form');
  if(enquiryForm){
    const params=new URLSearchParams(location.search);const product=params.get('product');const options=params.get('options');
    if(product){const name=product.slice(0,250),selection=options?.slice(0,800);enquiryForm.elements.message.value=`I would like to enquire about ${name}.${selection?'\n\nPreferred options: '+selection:''}\n\nProject details: `;}
  }
})();
