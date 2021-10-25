// var url = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-delhi-capitals-2nd-match-1254059/live-cricket-score"
var url = "https://www.espncricinfo.com/series/ipl-2021-1249214/rajasthan-royals-vs-delhi-capitals-7th-match-1254064/live-cricket-score"

async function fetchscore() {
    try {
        const response = await fetch('./api.php?url=' + url);
        // const data = await response.json();
        const data = await response.text();
        // console.log(data);
        // if (document.getElementById('liveipl') != null) {
        //     document.getElementById('liveipl').innerHTML = '<p class="has-text-centered">Fetching the Live Score 📦</p>';
        //     setTimeout(() => {
        //         document.getElementById('liveipl').innerHTML = '<div class="notification score is-link has-text-weight-bold">' + data.livescore.score + '</div>';
        //     }, 1000);
        // }

       
        let domElement = document.getElementById('hiddenhtml');
        if(domElement !== null){
            domElement.innerHTML = data;
            let infoDiv = document.querySelector('.match-info.match-info-MATCH');
            // console.log(infoDiv);
            let dataContainer = document.getElementById('themaindatacontainer');
            if(dataContainer !== null){
              document.getElementById('team-names').innerHTML =   document.querySelector('.event .match-info .teams').innerHTML;


              document.getElementById('current-run-rate-bro').innerHTML = document.querySelector('.stats .current-run-rate').innerHTML;


              document.getElementById('startus-text-bro').innerHTML = document.querySelector('.event .status-text').innerHTML;


              document.getElementById('teams-table').innerHTML = document.querySelector('.table-responsive').innerHTML;


              document.getElementById('recent-activities-bro').innerHTML = document.querySelector('.recent-runs').innerHTML;

              $('#teams-table table').addClass('table-responsive')
            //   console.log(document.querySelector('.event .match-info .teams'))
            }

        }
    } catch (exception) {
        console.log('Connection issue');
        if (document.getElementById('liveipl') != null) {
            document.getElementById('liveipl').innerHTML = '<p class="has-text-centered">Fetching the Live Score 📦</p>';
            setTimeout(() => {
                document.getElementById('liveipl').innerHTML = '<p class="has-text-centered">Connection Lost</p>';
            }, 1000);
        }
    }
}
fetchscore();

// https://stackoverflow.com/questions/44282721/update-changing-json-data-on-web-site-without-refreshing
setInterval(fetchscore, 1 * 1000);
// 3rd Match (N), Chennai, Apr 11 2021, Indian Premier League (Nitish Rana 17*, Shubman Gill 6*, Sandeep Sharma 0/13) - Live, KKR vs SRH, 3rd Match, live score, 2021
// document.querySelectorAll('.runs-container')
// document.querySelectorAll('.run-rate-container')
// document.querySelectorAll('.table.table-left.mb-0')
// document.querySelectorAll('.required-run-rate')
// document.querySelectorAll('.event .status-text')
// document.querySelectorAll('.event .match-info .teams')
