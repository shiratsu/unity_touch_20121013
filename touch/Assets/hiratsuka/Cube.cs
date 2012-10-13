using UnityEngine;
using System.Collections;

public class Cube : MonoBehaviour {
	
	public GameObject cube;
	public GameObject explosion;
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
		if(Input.GetMouseButtonDown(0)){
			Vector3 vec= Input.mousePosition	; 
			Debug.Log("x"+vec.x);
			Debug.Log("y"+vec.y);
		
			vec.z=50;
			vec = Camera.main.ScreenToWorldPoint (vec);
			
			Destroy (this);
		}	
	
	}
}
