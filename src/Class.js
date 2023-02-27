class ClassName{


    constructor(name,age){
        console.log('im Comming')
        this.Stuname=name;
        this.Stuage=age;
    }

    indrajit(){
        console.log(`${this.Stuname} ${this.Stuage}`)
    }
}

let Arnab=new ClassName('Arnab',20)
Arnab.indrajit()
