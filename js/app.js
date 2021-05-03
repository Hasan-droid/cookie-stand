'use strict';
let hours= ['6am', '7am', '8am', '9am', '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm'];
let list=document.getElementById("lists");
let Seattle = {
    location : 'seattle',
    min_max_hourlyCoustomers:0,
    Average_Cookies:6.3,
    total:0,
    
    sales:[],
    customerPerHour:[],
    
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(23, 65) ;
         
    },

    

    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
      
        }
    },

    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
           
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            
            this.sales.push(resulets);
            this.total+=resulets;
      
        }
    },

    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);

        let ule1=document.createElement('ul')
        list.appendChild(ule1);

        pe1.textContent=this.location;

        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
           

            
            
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                
            
        }

        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
        
    }

};

let Tokyo = {
    location : 'Tokyo',
    min_max_hourlyCoustomers:0,
    Average_Cookies:3,
    total:0,
    
    sales:[],
    customerPerHour:[],
    
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(3, 24) ;
         
    },

    

    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
      
        }
    },

    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
           
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            
            this.sales.push(resulets);
            this.total+=resulets;
      
        }
    },

    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);

        let ule1=document.createElement('ul')
        list.appendChild(ule1);

        pe1.textContent=this.location;

        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
           

            
            
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                
            
        }

        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
        
    }

};


let Dubai = {
    location : 'Dubai',
    min_max_hourlyCoustomers:0,
    Average_Cookies:3.7,
    total:0,
    
    sales:[],
    customerPerHour:[],
    
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(11, 38) ;
         
    },

    

    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
      
        }
    },

    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
           
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            
            this.sales.push(resulets);
            this.total+=resulets;
      
        }
    },

    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);

        let ule1=document.createElement('ul')
        list.appendChild(ule1);

        pe1.textContent=this.location;

        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
           

            
            
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                
            
        }

        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
        
    }

};

let Paris = {
    location : 'Paris',
    min_max_hourlyCoustomers:0,
    Average_Cookies:2.3,
    total:0,
    
    sales:[],
    customerPerHour:[],
    
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(20, 38) ;
         
    },

    

    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
      
        }
    },

    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
           
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            
            this.sales.push(resulets);
            this.total+=resulets;
      
        }
    },

    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);

        let ule1=document.createElement('ul')
        list.appendChild(ule1);

        pe1.textContent=this.location;

        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
           

            
            
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                
            
        }

        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
        
    }

};


let Lima = {
    location : 'Lima',
    min_max_hourlyCoustomers:0,
    Average_Cookies:2.3,
    total:0,
    
    sales:[],
    customerPerHour:[],
    
    getCust: function() {
       return this.min_max_hourlyCoustomers= avgCust(2, 16) ;
         
    },

    

    getCoustomerPerHour: function()
    {
        for(let i = 0 ; i < hours.length ; i++){
        this.customerPerHour.push(this.getCust());
      
        }
    },

    getCokiesAvg : function()
    {
        for(let k = 0 ; k < hours.length ; k++){
           
            let resulets=Math.floor(this.customerPerHour[k] * this.Average_Cookies )
            
            this.sales.push(resulets);
            this.total+=resulets;
      
        }
    },

    render : function()
    {
        let pe1=document.createElement('p');
        list.appendChild(pe1);

        let ule1=document.createElement('ul')
        list.appendChild(ule1);

        pe1.textContent=this.location;

        for(let j=0 ; j <hours.length ; j++)
        {
            let lie1=document.createElement('li');
            ule1.appendChild(lie1);
           

            
            
                lie1.textContent=`${hours[j]} : ${this.sales[j]} cookies`;
                this.total=this.total+this.sales[j];
                
            
        }

        let liRsults=document.createElement('li');
        ule1.appendChild(liRsults)
        liRsults.textContent=`total : ${this.total}`;
        
    }

};
 
function avgCust(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Seattle.getCoustomerPerHour();
Seattle.getCokiesAvg();
Seattle.render();

Tokyo.getCoustomerPerHour();
Tokyo.getCokiesAvg();
Tokyo.render();

Dubai.getCoustomerPerHour();
Dubai.getCokiesAvg();
Dubai.render();

Paris.getCoustomerPerHour();
Paris.getCokiesAvg();
Paris.render();

Lima.getCoustomerPerHour();
Lima.getCokiesAvg();
Lima.render();


