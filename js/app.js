'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , 'total'];
let list=document.getElementById("lists");
let tableE1=document.createElement('table');
let SalesObjects=[];
function Sales(location , min_max_hourlyCoustomers , Average_Cookies , total , sales , customerPerHour)
{
    this.location=location;
    this.min_max_hourlyCoustomers=min_max_hourlyCoustomers;
    this.Average_Cookies=Average_Cookies;
    this.total=total;
    this.sales=sales;
    this.customerPerHour=customerPerHour;
    SalesObjects.push(this);
}
 

Sales.prototype.getCoustomerPerHour =function(low , high)
{
    for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(avgCust(low , high));
      
        }
}

Sales.prototype.getCokiesAvg=function()
{
    for(let k = 0 ; k < hours.length ; k++){
           
        let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
        
        this.sales.push(resulets);
      
  
    }
}

 
Sales.prototype.render=function()
{
    let tr2E1=document.createElement('tr');
        tableE1.appendChild(tr2E1);

        let td2E1=document.createElement('td')
            td2E1.textContent=this.location;
        tr2E1.appendChild(td2E1);

        for(let j=0 ; j <hours.length ; j++)
        { 
             if((hours.length -1)===j)
            break;
            let tdE1=document.createElement('td');
            tr2E1.appendChild(tdE1);
           

           
                this.total+=this.sales[j];
                tdE1.textContent=`${this.sales[j]} cookies`;
                
                
            
        }

        let liRsults=document.createElement('td');
        tr2E1.appendChild(liRsults)
        liRsults.textContent=`${this.total} cookies `;
        
    
}

let headertable=function()
{
list.appendChild(tableE1);
let trE1=document.createElement('tr');
tableE1.appendChild(trE1);
let thE1=document.createElement('th');

trE1.appendChild(thE1);
for(let i=0 ; i <hours.length ; i++)
{
    thE1=document.createElement('th');
    thE1.textContent=hours[i];
    trE1.appendChild(thE1);
}
};

let footertable=function()
{
    list.appendChild(tableE1);
    let tr2E1=document.createElement('tr')
    let th2E1=document.createElement('th');
    tableE1.appendChild(tr2E1);
    tr2E1.appendChild(th2E1);
    th2E1.textContent="total";
    let totalCookies=0;
    for(let i=0 ; i<hours.length ; i++)
    { let totalCookiesPerHour=0;
       
       
        th2E1=document.createElement('th');
        
        for(let k=0 ; k<SalesObjects.length ; k++)
        {  
             
             if((hours.length -1)===i){
             
             totalCookies+=SalesObjects[k].total;
           
            
             
             }

             else{
                totalCookiesPerHour+=SalesObjects[k].sales[i];
                 
             }
             
        }
        if((hours.length -1 )=== i )
        break;
        th2E1.textContent=totalCookiesPerHour;
        
        tr2E1.appendChild(th2E1);
    }
    let liRsults=document.createElement('th');
    tr2E1.appendChild(liRsults)
    liRsults.textContent=`${totalCookies} cookies `;
}

let Seattle=new Sales('Seattle' , avgCust(23 , 65) , 6.3 , 0 , [] , [] );
Seattle.getCoustomerPerHour(23,65);
Seattle.getCokiesAvg();

let Tokyo=new Sales('Tokyo', avgCust(3, 24) , 3 ,0, [] , []);
Tokyo.getCoustomerPerHour(3,24);
Tokyo.getCokiesAvg();

let Dubai=new Sales('Dubai',avgCust(11 , 38),3.7 , 0 , [] , []);
Dubai.getCoustomerPerHour(11 , 38);
Dubai.getCokiesAvg();

let Paris=new Sales('Paris' , avgCust(20,38) , 2.3 , 0 , [] , []);
Paris.getCoustomerPerHour(20 , 38)
Paris.getCokiesAvg();

let Lima=new Sales('Lima' , avgCust(2,16) , 2.3 , 0 , [] , []);
Lima.getCoustomerPerHour(2 , 16)
Lima.getCokiesAvg();

headertable();


Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

footertable();

let newStandForm=document.getElementById("newStandForm")
newStandForm.addEventListener('submit',submitter);

function submitter(event) {
    event.preventDefault();
     console.log('hello event is working', event);
   let locationName=event.target.location.value;
   let max=Number(event.target.max.value);
   let min=Number(event.target.min.value);
   let avg=Number(event.target.avg.value);

   let newStand=new Sales(locationName , avgCust(min , max), avg , 0 , [] , []);

   removeRow();

   newStand.getCoustomerPerHour(min , max);
   newStand.getCokiesAvg();
   newStand.render();

   footertable();
   
}






 


 
 
function avgCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function removeRow()
{
    tableE1.deleteRow(tableE1.rows.length-1);
}

 



 

 


