class Chain{
constructor(bodyA,pointB){
    var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stifness:0.04,
    }
    this.pointB=pointB;
    this.chain=Constraint.create(options)

World.add(world,this.chain)

}
display(){
var posa=this.chain.bodyA.position;
var posb=this.pointB;
line(posa.x,posa.y,posb.x,posb.y)
}



}