document.addEventListener('DOMContentLoaded', () => {
    const sneakerSlider = document.querySelector('.sneaker-slider');
    sneakerSlider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      infinite: true,
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.sneaker-slider img');
    let currentIndex = 0;
    const showNextImage = () => {
      // Masquer toutes les images
      images.forEach(image => image.style.display = 'none');
      // Afficher l'image suivante
      images[currentIndex].style.display = 'block';
      // Incrémenter l'index pour passer à l'image suivante
      currentIndex = (currentIndex + 1) % images.length;
    };
    // Afficher la première image
    showNextImage();
    // Changer l'image toutes les 4 secondes
    setInterval(showNextImage, 4000);
  });
  // Fonctions pour les boutons de connexion et d'inscription
  const login = () => {
    alert("Fonction de connexion en cours de développement...");
  };
  const signup = () => {
    alert("Fonction d'inscription en cours de développement...");
  };