
    document.addEventListener('DOMContentLoaded', function () {
      var els = document.querySelectorAll('.reveal, .chapter');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
      }, { threshold: 0.15 });
      els.forEach(function (el) { io.observe(el); });

      document.querySelectorAll('.btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          var rect = btn.getBoundingClientRect();
          var ripple = document.createElement('span');
          ripple.className = 'ripple';
          ripple.style.left = (e.clientX - rect.left - 10) + 'px';
          ripple.style.top = (e.clientY - rect.top - 10) + 'px';
          ripple.style.width = ripple.style.height = '20px';
          btn.appendChild(ripple);
          setTimeout(function () { ripple.remove(); }, 550);
        });
      });

      document.querySelectorAll('.faq-item').forEach(function (item) {
        item.querySelector('.faq-q').addEventListener('click', function () {
          var wasOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item.open').forEach(function (o) { o.classList.remove('open'); });
          if (!wasOpen) { item.classList.add('open'); }
        });
      });
    });
