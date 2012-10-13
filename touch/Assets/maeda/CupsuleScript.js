#pragma strict

var turnFlg = 0;

var vx = 0.6;
var vy = 0.6;
var vz = 0.6;

var randomRangeMin = -0.2;
var randomRangeMax = 0.2;

var randomRangeRoMin = -180;
var randomRangeRoMax = 180;

static var rangeBuf = 0.01;


function Start () {
	vx = Random.Range(randomRangeMin, randomRangeMax);
	vy = Random.Range(randomRangeMin, randomRangeMax);
	vz = Random.Range(randomRangeMin, randomRangeMax);
}
	
function Update () {
	this.transform.Translate(vx,0,vz);
	
	
	if(turnFlg % 15 == 0) {
		this.transform.Rotate(Random.Range(randomRangeRoMin,randomRangeRoMax),Random.Range(randomRangeRoMin,randomRangeRoMax), Random.Range(randomRangeRoMin,randomRangeRoMax));
	}
	
	
	
	//if(turnFlg % 101 == 0) {
		//this.renderer.material.color = Color.Lerp(Color.red,Color.blue,0.5);
	//}
	
	turnFlg++;
	
	if(Input.GetMouseButtonDown(0) ) { 
		var hit : RaycastHit ; 
		var ray  = Camera.main.ScreenPointToRay(Input.mousePosition); 
		
		if(!Physics.Raycast(ray, hit, 50) ) {
			Destroy (this.gameObject);
		}
	} 
}


	
function OnCollisionEnter(col : Collision){

	if(this.gameObject.name != col.gameObject.name) {
		Destroy (this.gameObject,5);
		Destroy(this,5);
	}
}
	