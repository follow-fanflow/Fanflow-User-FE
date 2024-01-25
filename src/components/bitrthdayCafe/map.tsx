import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
        clickedMarker: any;
    }
}

function Map() {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=67d0286911f77cf3ceabfd3161f18840&autoload=false&libraries=services,clusterer,drawing';
    document.head.appendChild(mapScript);

    useEffect(() => {
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption);
                const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

                const marker = new window.kakao.maps.Marker({
                    map: map,
                    position: markerPosition,
                });

                marker.setMap(map);

                window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
                    const clickedLatLng = mouseEvent.latLng;

                    marker.setMap(null);

                    const newMarker = new window.kakao.maps.Marker({
                        map: map,
                        position: clickedLatLng,
                    })

                    window.clickedMarker = newMarker;
                })
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, []);

    return (
        <div id="map" style={{ width: "1440px", height: "910px" }}></div>
    )
}

export default Map;
