#pragma strict

function Start () {

}

function Update () {
	Debug.Log("Update");
}

function OnCollisionEnter(collision : Collision) { 

	//var contact : ContactPoint = collision.contacts[0]; 
	
	//var thisExplosion : GameObject = Instantiate (explosion, contact.point + (contact.normal * 5.0) , Quaternion.identity); 
	Debug.Log("delete");
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") 
	{ 
		//Destroy (collision.gameObject);
		
		collision.gameObject.SendMessage("ApplyDamage");
	} 

	//Destroy (thisExplosion, 2.0); 
	//Destroy (gameObject); 
}

function OnControllerColliderHit (hit : ControllerColliderHit) {
	Debug.Log("hit");
}