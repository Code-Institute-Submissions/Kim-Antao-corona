[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Kim-Antao/corona) 

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Kim-Antao/corona) 

ALL ABOUT COVID-19

Currently the world is full of chaos, confusion and fear due to the outbreak
of the novel corona virus. With news channels filled with sections about deaths
caused by it. Though being informed is very important, it is proved that continuous
watching about it will only cause every one to stress and panic. 

This is where this project comes into picture. Even though its in its initial stage
it provides basic statistics about the spread of virus. which will not only help you
understand whats happening in your country but if you have family and friends in 
different countries, help to understand their situation as well. That too with just a 
click. All countries summarised on one site so no more hassel of loading diffrent Pages


UX

All about Covid-19 is created keeping everyone in mind. its basic idea being able to
tell the user what the statistics are globally

Most of the countries are trying to lift the lockdown with businesses eventually 
getting back on track. If you are a part of a big organisation and have meetings 
abroad, this website will help to determine which countries might prove 
to be safer than the others. If you import items from other countries, it will help 
you to be aware of the precautions you need to take as well. It might also help you 
decide when its the best move to start your business again.

After this long lockdown you might want to go somewhere out and socialise. A vacation 
to somewhere other than your house. But its best to be safe so you can check which 
countries have a lower spread.  

You might be working on a project and need the stats and this website is just the right
place to be. the website also provides graphs to help understand the figures better.



Features

Existing Features
Feature 1 - allows the user to get the statistics by just clicking on the chosen 
country.

Feature 2 - provides the figures in a chart format by just choosing the country 
from the drop down list.

Features Left to Implement
Another feature idea: 1) allow users to choose a state from a country and narrow 
                        down the results
                      2) provide information like which organisation provides help 
                        during such times in the particular country
                      3) list down the precautions 
                      4) links to where you can find PPE




Technologies Used

Gitpod
IDE used to create the site
link: https://gitpod.io/workspaces/

JQuery
to simplify DOM manipulation.

Google Fonts
Add cool different fonts to the site
link: https://fonts.google.com/

Bootstrap
To design a responsive site, with prebuilt classes
link: https://getbootstrap.com/

Google Maps API
To display the google maps 
link: https://developers.google.com/maps/documentation/javascript/get-api-key

Geocoding API
Used reverse geocoding to get a human readable address from the coordinates
link: https://developers.google.com/maps/documentation/geocoding/intro 

covid19 API
API to get all the figures
link: https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#

Chart.js
used to create graphs
link: https://www.chartjs.org/

Testing
main page: tried clicking on different countries and checked if its giving the 
correct country name.
Then checked the figures against the api to see if its displaying the right figures.
checked if its giving the correct error messages by exceeding the limit

graph page: chose a country from the drop down and checked if the correct figures are 
being populated.

Deployment

github is used for deployement of the project
1)create a new repository: git remote add origin "link "
2)push the files: git push -u origin master


to run the code type the following in your terminal:
python3 -m http.server

Credits
Content
The figures for this site is obtained from covid 19 API

Acknowledgements
I received inspiration for this project from 
1)https://www.covid19india.org/
2)https://www.youtube.com/watch?v=TolRhE478OY
3)https://www.youtube.com/watch?v=bXoNcBaxfVs&t=488s
