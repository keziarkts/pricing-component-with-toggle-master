let active = false;

function myToggleFunction() {
    let toggle = document.querySelector('.toggle');
    const basicMonth = document.querySelector(".basic-monthly-price");
    const basicAnnual = document.querySelector(".basic-annually-price");
    const proMonth = document.querySelector(".pro-monthly-price");
    const proAnnual = document.querySelector(".pro-annually-price");
    const masterMonth = document.querySelector(".master-monthly-price");
    const masterAnnual = document.querySelector(".master-annually-price");
    active = !active

    if (active) {
      toggle.classList.add('active')   
      // for basic plan:
      basicAnnual.style.display = 'none';
      basicMonth.style.display ='flex';
      // for pro plan:
      proAnnual.style.display = 'none';
      proMonth.style.display = 'flex';
      // for master plan: 
      masterAnnual.style.display = 'none';
      masterMonth.style.display = 'flex';
    } else {
      toggle.classList.remove('active')
      // for basic plan:
      basicAnnual.style.display = 'flex';
      basicMonth.style.display = 'none';
      // for pro plan:
      proAnnual.style.display = 'flex';
      proMonth.style.display = 'none';
      // for master plan:
      masterAnnual.style.display = 'flex';
      masterMonth.style.display = 'none';
    }
  }
