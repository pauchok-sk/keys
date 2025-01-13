export default function map() {
  const contactsMaps = document.querySelectorAll(".maps__map");

  if (contactsMaps.length) {
    contactsMaps.forEach((map) => {
      const center = JSON.parse(map.dataset.center);
      const zoom = Number(map.dataset.zoom);

      function init() {
        const htmlMap = new ymaps.Map(map, {
          center,
          zoom,
        });

        const placemark = new ymaps.Placemark(
          center,
          {},
          {
            iconLayout: "default#image",
            iconImageHref: "../img/map.svg",
            iconImageSize: [66, 66],
            iconImageOffset: [-35, -45]
          }
        );

        htmlMap.controls.remove("geolocationControl"); // удаляем геолокацию
        htmlMap.controls.remove("searchControl"); // удаляем поиск
        htmlMap.controls.remove("trafficControl"); // удаляем контроль трафика
        htmlMap.controls.remove("typeSelector"); // удаляем тип
        htmlMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        htmlMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
        htmlMap.controls.remove("rulerControl"); // удаляем контрол правил
        htmlMap.behaviors.disable(["scrollZoom"]);
        htmlMap.geoObjects.add(placemark);
      }

      ymaps.ready(init);
    });
  }
}
