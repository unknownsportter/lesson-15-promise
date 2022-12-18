//random user Q*)

// const newBtn = document.createElement('button');
// let btnClicks = 0;

// async function getUser() {
//     try {
//         const fetchUser = await fetch('https://randomuser.me/api');
//         const fetchResult = await fetchUser.json();
//         fetchResult.results.forEach(function (item) {
//             newBtn.innerText = 'random user';
//             // let btnClicks = 0;

//             newBtn.addEventListener('click', function (event) {
//                 btnClicks++;
//                 console.log(btnClicks);

//                 for (key in item) {
//                     const p = document.createElement('p');
//                     if (
//                         key === 'gender' ||
//                         key === 'email' ||
//                         key === 'phone'
//                     ) {
//                         p.innerText = key + ': ' + item[key];
//                         document.body.appendChild(p);
//                     }

//                     if (key === 'name') {
//                         p.innerText =
//                             key +
//                             ': ' +
//                             item.name.title +
//                             ' ' +
//                             item.name.first +
//                             ' ' +
//                             item.name.last +
//                             ' ';
//                         document.body.appendChild(p);
//                     }
//                     if (key === 'picture') {
//                         const img = document.createElement('img');
//                         img.src = item.picture.medium;
//                         document.body.appendChild(img);
//                     }
//                     if (btnClicks > 1) {
//                         window.location.reload();
//                         btnClicks = 0;
//                     }
//                 }
//             });
//             document.body.appendChild(newBtn);
//             // console.log(item);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUser();

//1.1*)

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function (callback) {
//         // console.log(callback);
//         return callback.json();
//     })
//     .then(function (anser) {
//         anser.forEach(function (item) {
//             const ul = document.createElement('ul');
//             ul.style.fontSize = '22px';
//             ul.style.border = '2px solid';
//             ul.style.margin = '0';
//             ul.innerText = item.id;
//             const li = document.createElement('li');
//             li.style.fontSize = '16px';
//             const crossLine = document.createElement('del');
//             ul.appendChild(li);
//             document.body.appendChild(ul);
//             if (item.completed === true) {
//                 crossLine.innerText = item.title;
//                 li.append(crossLine);
//             }
//             if (item.completed === false) {
//                 li.innerText = item.title;
//             }
//         });
//         console.log(anser);
//     })
//     .catch(function (error) {
//         console.log(error + ': THIS is the error');
//     });

//1.2*)

// async function todosList(list) {
//     try {
//         const fetchList = await fetch(
//             'https://jsonplaceholder.typicode.com/todos'
//         );
//         const fetchResults = await fetchList.json();
//         fetchResults.forEach(function (item) {
//             const ul = document.createElement('ul');
//             ul.style.fontSize = '22px';
//             ul.style.border = '2px solid';
//             ul.style.margin = '0';
//             ul.innerText = item.id;
//             const li = document.createElement('li');
//             li.style.fontSize = '16px';
//             const crossLine = document.createElement('del');
//             ul.appendChild(li);
//             document.body.appendChild(ul);
//             if (item.completed === true) {
//                 crossLine.innerText = item.title;
//                 li.append(crossLine);
//             }
//             if (item.completed === false) {
//                 li.innerText = item.title;
//             }
//         });
//         // console.log(fetchResults);
//     } catch (error) {
//         console.log(error + ': THIS is the error');
//     }
// }

// todosList();

//2*)

// async function usersList(list) {
//     try {

//         const fetchList = await fetch('https://reqres.in/api/users');
//         const fetchResults = await fetchList.json();
//         // console.log(fetchResults);
//         fetchResults.data.forEach(function (item) {
//             // console.log(item);

//             const idDiv = document.createElement('div');
//             idDiv.className = item.id;
//             idDiv.style.border = '3px solid black';
//             idDiv.style.display = 'flex';
//             idDiv.style.flexDirection = 'column';
//             idDiv.style.alignItems = 'center';
//             document.body.appendChild(idDiv);
//             for (key in item) {
//                 const p = document.createElement('p');
//                 p.style.margin = '4px';
//                 p.innerText = key + ': ' + item[key];
//                 idDiv.appendChild(p);

//                 if (key === 'id') {
//                     p.innerText = '';
//                 }

//                 if (key === 'first_name') {
//                     p.innerText = 'First name: ' + item[key];
//                 }

//                 if (key === 'last_name') {
//                     p.innerText = 'Last name: ' + item[key];
//                 }

//                 if (key === 'avatar') {
//                     const img = document.createElement('img');
//                     img.src = item.avatar;
//                     p.innerText = '';
//                     p.appendChild(img);
//                 }
//             }
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// usersList();

//3*)

// const body = document.querySelector('body');
// body.style.display = 'flex';
// body.style.flexDirection = 'column';
// body.style.alignItems = 'center';

// async function usersList(list) {
//     try {
//         const fetchList = await fetch('https://reqres.in/api/users');
//         const fetchResults = await fetchList.json();
//         // console.log(fetchResults);
//         fetchResults.data.forEach(function (item) {
//             // console.log(item);

//             const idDiv = document.createElement('div');
//             idDiv.className = item.id;
//             idDiv.style.border = '3px solid black';
//             idDiv.style.display = 'flex';
//             idDiv.style.flexDirection = 'column';
//             idDiv.style.alignItems = 'center';
//             idDiv.style.minWidth = '600px';
//             document.body.appendChild(idDiv);
//             for (key in item) {
//                 const p = document.createElement('p');
//                 p.style.margin = '4px';
//                 p.innerText = key + ': ' + item[key];
//                 idDiv.appendChild(p);

//                 if (key === 'id') {
//                     p.innerText = '';
//                 }

//                 if (key === 'first_name') {
//                     p.innerText = 'First name: ' + item[key];
//                 }

//                 if (key === 'last_name') {
//                     p.innerText = 'Last name: ' + item[key];
//                 }

//                 if (key === 'avatar') {
//                     const img = document.createElement('img');
//                     img.src = item.avatar;
//                     p.innerText = '';
//                     p.appendChild(img);
//                 }
//             }
//             const link = document.createElement('a');
//             link.href = '#' + item.id; //'https://reqres.in/api/users/' + item.id;
//             link.style.cursor = 'pointer';
//             link.style.textDecoration = 'underline';
//             link.style.fontSize = '16px';
//             link.innerText = 'Git hub page: ' + item.last_name;
//             idDiv.appendChild(link);
//             link.addEventListener('click', function (event) {
//                 alert(item.first_name + ': \n' + link);
//             });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }
// usersList();

//4*)

// async function catsImgs(list) {
//     try {
//         const fetchCats = await fetch(
//             'https://api.thecatapi.com/v1/images/search?limit=10'
//         );
//         const fetchResults = await fetchCats.json();
//         // console.log(fetchResults);

//         for (let i = 1; i <= 10; i++) {
//             const newBtn = document.createElement('button');
//             newBtn.innerText = 'Page: ' + i;
//             document.body.appendChild(newBtn);
//         }

//         fetchResults.forEach(function (item) {
//             const img = document.createElement('img');
//             img.id = item.id;
//             img.src = item.url;
//             img.style.width = '300px';
//             img.style.height = '300px';
//             document.body.appendChild(img);
//         });

//         const btns = document.querySelectorAll('button');
//         btns.forEach(function (item) {
//             item.addEventListener('click', function () {
//                 async function getPageCat() {
//                     try {
//                         const onePageFetch = await fetch(
//                             'https://api.thecatapi.com/v1/images/search?limit=10&page=' +
//                                 item.value
//                         );
//                         const onePageFetchResults = await onePageFetch.json();
//                         // console.log(onePageFetchResults);
//                         onePageFetchResults.forEach(function (item) {
//                             const newImgs = document.createElement('img');
//                             newImgs.src = item.url;
//                             newImgs.style.width = '300px';
//                             newImgs.style.height = '300px';

//                             const oldImgs = document.querySelector('img');
//                             document.body.removeChild(oldImgs);
//                             document.body.appendChild(newImgs);
//                         });
//                     } catch (error) {
//                         console.log(error, ': this is the error');
//                     }
//                 }
//                 getPageCat();
//             });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// catsImgs();

//

//5*)

//
// async function getCats() {
//     try {
//         const fetchCats = await fetch('https://api.thecatapi.com/v1/breeds');
//         const fetchResults = await fetchCats.json();
//         // console.log(fetchResults);
//         const newSelect = document.createElement('select');
//         document.body.appendChild(newSelect);
//         fetchResults.forEach(function (items) {
//             // console.log(items);
//             const newOption = document.createElement('option');
//             newOption.innerText = items.name;
//             newOption.value = items.id;
//             // console.log(newOption.id);
//             newSelect.appendChild(newOption);
//         });

//         newSelect.addEventListener('change', function (event) {
//             const breedId = event.target.value;
//             async function getOneCat(getCats) {
//                 // console.log(breedId);
//                 try {
//                     const fetchOneRace = await fetch(
//                         'https://api.thecatapi.com/v1/images/search?breed_ids=' +
//                             breedId
//                     );
//                     const fetchOneRaceResults = await fetchOneRace.json();
//                     const catImg = document.createElement('img');
//                     // console.log(fetchOneRaceResults);
//                     catImg.src = fetchOneRaceResults[0].url;
//                     catImg.style.width = '200px';
//                     catImg.style.height = '200px';
//                     document.body.appendChild(catImg);
//                 } catch (error) {
//                     console.log(error, 'This is the ERROR 2');
//                 }
//             }
//             getOneCat();
//         });
//     } catch (error) {
//         console.log(error, 'This is the ERROR 1');
//     }
// }
// getCats();
