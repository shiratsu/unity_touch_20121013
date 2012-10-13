var explosionPrefab : GameObject; // 
var bornPrefab : GameObject; // 
var camera : Camera;
private var damaged : boolean;	  // 
private var killTimer : float;	  // 
public var distance : float = 5.0;


// 
function ApplyDamage() {
	// 
	if (!damaged) {
		// 
		damaged = true;
		// 
		killTimer = 0.4;
		// 
		rigidbody.AddForce(Vector3.up * 15.0, ForceMode.Impulse);
	}
}



function Start () {
	//
}

function Update () {
	
	/*
	Debug.DrawRay(transform.position, transform.forward * distance, Color.white);
    // Shoot the ray on mouse click
    if (Input.GetMouseButtonDown(0))
    {
        var hit : RaycastHit;

        // Cast a ray forward from our position for the specified distance
        if (Physics.Raycast(transform.position, transform.forward, hit, distance))
        {
            // Add a specified force to the Rigidbody component to the other GameObject
            Debug.Log("Destroyed " + hit.collider.gameObject.name);
            try
            {
                //hit.collider.gameObject.Destroy;
                Destroy(gameObject);
            } catch (e) { }
        }
    }
	*/
	if (!damaged) return;
/*	
	

	//
	// 
	killTimer -= Time.deltaTime;
	// 
	

	if (killTimer <= 0.0) {
		Instantiate(explosionPrefab, transform.position, transform.rotation);	
		Destroy(gameObject);
		damaged = false;
		killTimer = 0.4; 
		
		Instantiate(bornPrefab, transform.position, transform.rotation);
	}
*/	
	Debug.Log(killTimer);
	killTimer -= Time.deltaTime;
	if (killTimer <= 0.0) {
		Instantiate(bornPrefab, transform.position, transform.rotation);
		damaged = false;
	}
	
/*
	
	if(Input.GetMouseButtonDown(0)){
		Debug.Log("Touch");
		var screenPoint = Input.mousePosition ;
		screenPoint.z = screenPoint.y;
    	var vec = camera.ScreenToWorldPoint(screenPoint);
		Debug.Log(vec.x);
		Debug.Log(transform.position.x);
		Debug.Log(vec.y);
		Debug.Log(transform.position.y);
		if((transform.position.x-1  <= vec.x && vec.x <= transform.position.x+1)
		&& (transform.position.y-1  <= vec.y && vec.y <= transform.position.y+1)
		){
			Instantiate(explosionPrefab, transform.position, transform.rotation);	
			Destroy(gameObject);
		}
	
	};// タッチ初め
	
*/	
	
}

function OnCollisionEnter(collision : Collision) { 

	//var contact : ContactPoint = collision.contacts[0]; 
	
	//var thisExplosion : GameObject = Instantiate (explosion, contact.point + (contact.normal * 5.0) , Quaternion.identity); 
	/*
	Debug.Log("delete");
	Debug.Log(collision.gameObject.tag);
	if (collision.gameObject.tag == "Player") 
	{ 
		//Destroy (collision.gameObject);
		
		collision.gameObject.SendMessage("ApplyDamage");
	} 
	*/
	//killTimer = 0.4;
	//Destroy (thisExplosion, 2.0); 
	//Destroy (gameObject);
	//Destroy(gameObject);
	
	if (collision.gameObject.tag != "Player") 
	{ 
		//Destroy (collision.gameObject);
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		
		//collision.gameObject.SendMessage("ApplyDamage");

		Destroy (gameObject);
		
		// 
		damaged = true;
		// 
		killTimer = 0.4;
	} 
					
	
}
