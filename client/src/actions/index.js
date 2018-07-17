//import axios from 'axios';



/*========= USER ===========*/

export function action1(){

    return {
        type:'ACTION_1',
        payload:{ 
                    "id": 1,
                    "name": "Jimi Hendrix",
                    "cover":"jimi_hendrix.jpg",
                    "bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    "albums": [
                        {"albumId":"a1","title":"Electric Ladyland","year":1968,"cover":"electric-ladyland.jpg","price":20},
                        {"albumId":"a2","title":"Experience","year":1971,"cover":"experienced.jpg","price":25},
                        {"albumId":"a3","title":"Isle of Wright","year":1971,"cover":"isle_of_wright.jpg","price":15},
                        {"albumId":"a4","title":"Band of Gypsys","year":1970,"cover":"band_of_gypsys.jpg","price":10}
                    ],
                    "style":"rock, blues"
                }
    }

}
