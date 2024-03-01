import React, { useEffect, useState } from "react";

declare global {
    interface Window {
        kakao: any;
    }
}

interface MarkerPosition {
    placeX: number;
    placeY: number;
}

async function fetchMarkerPosition(): Promise<MarkerPosition> {
    try {
        const response = await fetch("/place");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("마커 위치 정보를 가져오는 도중 에러 발생: ", error);
        throw new Error("마커 위치 정보를 가져오는 데 실패");
    }
}

interface CafeInfo {
    name: string;
    address: string;
    link: string;
}

async function fetchBirthdayCafeInfo(x: number, y: number): Promise<CafeInfo> {
    try {
        const response = await fetch(`/place?x=${x}&y=${y}`);
        const data = await response.json();

        if (data.placeListResponse.length > 0) {
            const birthdayCafe = data.placeListResponse[0];
            const address = birthdayCafe.address;
            const name = birthdayCafe.name;
            const link = birthdayCafe.link || "링크 없음";

            return {
                name: name,
                address: address,
                link: link
            };
        } else {
            throw new Error("해당 좌표에 대한 생일카페 정보를 찾을 수 없습니다.");
        }
    } catch (error) {
        console.error("생일카페 정보를 가져오는 도중 에러 발생: ", error);
        return {
            name: "생일카페 정보 없음",
            address: "주소 없음",
            link: "링크 없음"
        };
    }
}

function Map(): JSX.Element {
    const [markerPosition, setMarkerPosition] = useState<MarkerPosition | null>(null);

    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=d132a783f04f722c629df051c361dfa8&autoload=false&libraries=services,clusterer,drawing';
        document.head.appendChild(mapScript);

        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const mapContainer = document.getElementById('map');
                const mapOption = {
                    center: new window.kakao.maps.LatLng(35.9078, 127.7669),
                    level: 12,
                    draggable: true,
                    disableDoubleClick: true,
                    disableZoom: true
                };

                const map = new window.kakao.maps.Map(mapContainer, mapOption);

                map.setZoomable(false);
                map.setDraggable(true);

                if (markerPosition) {
                    const marker = new window.kakao.maps.Marker({
                        map: map,
                        position: new window.kakao.maps.LatLng(markerPosition.placeX, markerPosition.placeY),
                    });

                    marker.setMap(map);

                    let infowindow: any = null;

                    window.kakao.maps.event.addListener(marker, 'click', async function () {
                        const info = await fetchBirthdayCafeInfo(markerPosition.placeX, markerPosition.placeY);
                        const content = `
                            <div style="display: flex; flex-direction: column; background-color: white; padding: 10px; border: 1px solid #D9D9D9; border-radius: 5px; gap: 4px;">
                                <div style="color: black; font-size: 17px">${info.name}</div>
                                <div style="color: black; font-size: 13px">${info.address}</div>
                                <a href="${info.link}" style="color: #008890; text-decoration: none; font-size: 13px">${info.link}</a>
                            </div>
                        `;

                        if (infowindow) {
                            infowindow.close();
                        }

                        infowindow = new window.kakao.maps.InfoWindow({
                            content: content,
                            removable: true
                        });

                        infowindow.open(map, marker);
                    });
                }
            });
        };

        mapScript.addEventListener("load", onLoadKakaoMap);

        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [markerPosition]);

    useEffect(() => {
        async function fetchMarker() {
            try {
                const position = await fetchMarkerPosition();
                setMarkerPosition(position);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMarker();
    }, []);

    return (
        <div id="map" style={{ width: "1400px", height: "840px" }}></div>
    );
}

export default Map;
