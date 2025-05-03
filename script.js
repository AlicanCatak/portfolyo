function showCards(category) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      card.classList.remove('show');
      if (card.classList.contains(category)) {
        card.classList.add('show');
      }
    });
  }

  // Sayfa yüklendiğinde varsayılan olarak UI/UX göster
  window.onload = () => {
    showCards('uiux');
  };



  function showCards(category) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      card.classList.remove('show');
      if (card.classList.contains(category)) {
        card.classList.add('show');
      }
    });
  }


  // Sayfa yüklendiğinde varsayılan olarak UI/UX göster
  const texts = [
    "UX/UI<br>Designer",
    "Front-end<br>Developer"
  ];
  const textElement = document.getElementById("animated-text");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    const plainText = currentText.replace(/<br>/g, ""); // sadece yazılacak karakterleri say

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    const visibleText = plainText.substring(0, charIndex);

    // <br> konumunu tekrar yerine koyarak görünür halini oluştur
    const displayText = insertBreak(currentText, visibleText.length);
    textElement.innerHTML = displayText;

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === plainText.length) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  function insertBreak(fullText, length) {
    const parts = fullText.split("<br>");
    const combined = parts.join("");
    const visible = combined.substring(0, length);
    let result = "";

    if (length <= parts[0].length) {
      result = visible;
    } else {
      result = parts[0] + "<br>" + visible.substring(parts[0].length);
    }

    return result;
  }

  window.onload = () => {
    showCards('uiux');
    typeEffect();
  };


  // my skills
  document.querySelectorAll('.circle').forEach(circle => {
    const percent = circle.getAttribute('data-percent');
    const angle = (percent / 100) * 360;
    circle.style.setProperty('--angle', angle + 'deg');
  });


  // my skills
  document.addEventListener('DOMContentLoaded', function() {
    // Barları ve hedef yükseklikleri tanımla
    const bars = [
      { element: document.querySelector('.html-bar'), targetHeight: '90%' },
      { element: document.querySelector('.js-bar'), targetHeight: '63%' },
      { element: document.querySelector('.css-bar'), targetHeight: '85%' },
      { element: document.querySelector('.figma-bar'), targetHeight: '90%' }
    ];
  
    // Başlangıçta tüm barları sıfırla (inline style ile)
    bars.forEach(bar => {
      bar.element.style.height = '0%';
      bar.element.style.transition = 'height 1.5s ease-in-out';
    });
  
    // Scroll animasyonu için Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetBar = bars.find(b => b.element === entry.target);
          if (targetBar) {
            entry.target.style.height = targetBar.targetHeight;
            observer.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.7 });
  
    // Observer'ı başlat
    bars.forEach(bar => {
      observer.observe(bar.element);
    });
  });

  // smoth scroll
  // Scroll animasyonu için Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
  // Animasyon uygulanacak tüm elementler
  const animateElements = document.querySelectorAll(
    '.intro, .profile, .metin, .work, .work1, .card-container, .vertical-skills, footer'
  );
  
  // Progress barlar için özel ayar
  const progressBars = [
    { el: document.querySelector('.html-bar'), target: '90%' },
    { el: document.querySelector('.js-bar'), target: '63%' },
    { el: document.querySelector('.css-bar'), target: '85%' },
    { el: document.querySelector('.figma-bar'), target: '90%' }
  ];

  // Başlangıçta tüm elementleri gizle ve progress barları sıfırla
  function initAnimations() {
    animateElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    progressBars.forEach(bar => {
      if (bar.el) {
        bar.el.style.height = '0%';
        bar.el.style.transition = 'height 1.5s ease-in-out';
      }
    });
  }

  // Elementler görünür olduğunda animasyonu tetikle
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Progress bar kontrolü
        if (entry.target.classList.contains('vertical-skills')) {
          progressBars.forEach(bar => {
            if (bar.el) {
              bar.el.style.height = bar.target;
            }
          });
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // İşlemleri başlat
  initAnimations();
  animateElements.forEach(el => observer.observe(el));
  
  // Eğer progress barlar başka bir yerdeyse onları da observe et
  const skillsSection = document.querySelector('.vertical-skills');
  if (skillsSection) observer.observe(skillsSection);
});

// Mevcut card göster/gizle fonksiyonunuz
function showCards(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = card.classList.contains(category) ? 'block' : 'none';
  });
}