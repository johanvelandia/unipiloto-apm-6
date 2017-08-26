import { Component } from '@angular/core';

export class Vehicle {
  brand: string;
  model: string;
  color: string;
  plate: string;
  capacity: string;
  build_year: number;
 
 constructor(brand:string,model:string,color:string,plate:string,capacity:string,build_year:number){
			this.brand=brand;
			this.model=model;
			this.color=color;
			this.plate=plate;
			this.capacity=capacity;
			this.build_year=build_year;
	}
/*	
	getBrand():string{
		return this.brand;
	}
	
	setBrand(brand:string):void{
		this.brand=brand;
	}
	
	getModel():string{
		return this.model;
	}
	
	setModel(model:string):void{
		this.model=model;
	}

	getColor():string{
		return this.color;
	}
	
	setColor(color:string):void{
		this.color=color;
	}
	
	getPlate():string{
		return this.plate;
	}
	
	setPlate(plate:string):void{
		this.plate=plate;
	}

	getCapacity():string{
		return this.capacity;
	}
	
	setCapacity(capacity:string):void{
		this.capacity=capacity;
	}

	getBuild_year():number{
		return this.build_year;
	}
	
	setBuild_year(build_year:number):void{
		this.build_year=build_year;
	}
*/	
}


export class Driver {
  
  id: number;
  license: number;
  first_name: string;
  last_name: string;
  age: number;
  
  constructor(id:number,license:number,first_name:string,last_name:string,age: number){
			//super(id,age,name,lastname);
			this.id=id;
			this.license=license;
			this.first_name=first_name;
			this.last_name=last_name;
			this.age=age;
	}
	
	getId():number{
		return this.id;
	}
	
	setId(id:number):void{
		this.id=id;
	}
	
	getLicense():number{
		return this.license;
	}
	
	setLicense(license:number):void{
		this.license=license;
	}

	getFirst_name():string{
		return this.first_name;
	}
	
	setFirst_name(first_name:string):void{
		this.first_name=first_name;
	}
	
	getLast_name():string{
		return this.last_name;
	}
	
	setLast_name(last_name:string):void{
		this.last_name=last_name;
	}

	getAge():number{
		return this.age;
	}
	
	setAge(age:number):void{
		this.age=age;
	}
}








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  selectedVehiculo: Vehicle;
	
  title = 'lista de vehiculos';
  detalles: 'detalles de vehiculos';
  propietario='propietario de vehiculo';
  
  vehicles: Vehicle[] = VEHIC;

  driver1=new Driver(1,20,'migel','Amaya',25);
  
  onSelect(vehiculo: Vehicle){
    this.selectedVehiculo = vehiculo;
  }
  
  
  //var vehiculo1=new Student(1,20,'migel','Amaya',clasesStudent1,10,'grupo1'); 
  
}




const VEHIC: Vehicle[] = [
  {
	brand: "Camaro",
	model: "2017",
	color: "GrisPlata",
	plate: "RKK457",
	capacity: "5",
	build_year: 2016
  },
  {
	brand: "Jaguar",
	model: "2017",
	color: "Negro",
	plate: "FTK567",
	capacity: "5",
	build_year: 2017  
  },
  {
	brand: "Ferari Diablo",
	model: "2017",
	color: "Rojo",
	plate: "YTU892",
	capacity: "2",
	build_year: 2018  
  }
];
