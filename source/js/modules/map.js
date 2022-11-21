export function renderLazyMap() {
  let mapContainer = document.getElementById('map-container');
  let mapConfiguration = {
    once: true, // запуск один раз, и удаление наблюдателя сразу
    passive: true,
    capture: true,
  };

  if (mapContainer) {
    mapContainer.addEventListener('click', startLazyMap, mapConfiguration);
    mapContainer.addEventListener('mouseover', startLazyMap, mapConfiguration);
    mapContainer.addEventListener('touchstart', startLazyMap, mapConfiguration);
    mapContainer.addEventListener('touchmove', startLazyMap, mapConfiguration);
  }

  let mapLoaded = false;
  function startLazyMap() {
    if (!mapLoaded) {
      mapLoaded = true;
      ymaps.ready(init);
    }
  }
}

function init() {
  let myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15.5,
    controls: [],
  });

  let myPlacemark1 = new ymaps.Placemark([59.937589, 30.322788], {
    balloonContent: '"Круизы в Антарктику"',
  }, {
    iconLayout: 'default#image',
    iconImageClipRect: [[0, 0], [18, 22]],
    iconImageHref: 'img/svg/icon-flag.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(myPlacemark1);
}
