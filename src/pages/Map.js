/* global kakao */

import React, { useEffect, useState } from 'react';
import cn from "classnames";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDetailPage } from '../_actions/actions';
import '../../src/components/style/style.css';

const { kakao } = window;

// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new window.kakao.maps.InfoWindow({zIndex:1});

const Map = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const kinder_id = location.state;

  // kinder 객체 안에 detail 정보 있습니다.
  const [kinder, setKinder] = useState({});

  useEffect(() => {
    const payload = dispatch(getDetailPage(kinder_id)).payload;
    payload.then((data) => {
      console.log(data.addr);
      console.log(data.kinder_name);
      setKinder(data);
    });

    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    const ps = new window.kakao.maps.services.Places(); 
        //('{kinder.addr}+{kinder.kinder_name}')
        ps.keywordSearch("서울특별시 용산구 이촌로84길 9-7 강변유치원", placesSearchCB); 
                        
        function placesSearchCB (data, status) {
            if (status === window.kakao.maps.services.Status.OK) {
                let bounds = new window.kakao.maps.LatLngBounds();

                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                    bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                }       
                map.setBounds(bounds);
            } 
        }

        function displayMarker(place) {
            let marker = new window.kakao.maps.Marker({
                map: map,
                position: new window.kakao.maps.LatLng(place.y, place.x) 
            });
            
             // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
        }
  }, []);

  return (
    <div className={cn("Map")}>
      <div className={cn("MapContainer")} id="map">
      </div>
    </div>
  );
};

export default Map;