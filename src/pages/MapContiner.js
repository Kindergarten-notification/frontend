// MapContainer.js

import React, { useEffect } from 'react';
import "./style/detailpage.css"; 
import DetailPage from './DetailPage';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        
        const map = new kakao.maps.Map(container, options);
        
        const ps = new kakao.maps.services.Places();
        
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                const bounds = new kakao.maps.LatLngBounds();
        
                for (const i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }       
        
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
            }
        }

        function displayMarker(place) {
    
            // 마커를 생성하고 지도에 표시합니다
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        
            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                window.setContent('<div id="myMap">' + place.place_name + '</div>');
                window.open(map, marker);
            });
        }
    }, []);

    console.log("지도 나옴");

   return (
    <div id="myMap"></div> 
    );
}

export default MapContainer; 